class Actions extends Vanilla_Redux_Actions {  
    movePage (data) {
        let state = STORE.get('site');

        // Page は選択された route の根なので "[0]" を指定。
        state.active_page = data.route[0];

        STORE.dispatch({
            type: 'MOVE-PAGE',
            data: { site: state },
            route: data.route,
        });
    }
    fetchData () {
        API.get('/', function (response) {
            STORE.dispatch(this.fetchedData(response));
        }.bind(this));
    }
    fetchedData (response) {
        return {
            type: 'FETCHED-DATA',
            data: response,
            target: 'stage'
        };
    }
    fetchJsonWbsStructure () {
        Request.get('/data/wbs-structure.json', function (response) {
            STORE.dispatch(this.fetchedJsonWbsStructure(response));
        }.bind(this));
    }
    fetchedJsonWbsStructure (response) {
        let state = STORE.get('wbs');

        let wbs = new WbsDiagram();

        state.structures = wbs.response2state(response);

        return {
            type:   'FETCHED-JSON-WBS-STRUCTURE',
            data:   { wbs: state },
            target: 'stage'
        };
    }
}
