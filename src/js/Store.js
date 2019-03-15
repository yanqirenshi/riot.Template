class Store extends Vanilla_Redux_Store {
    constructor(reducer) {
        super(reducer, Immutable.Map({}));
    }
    pages() {
        return [
            {
                code: "home",
                menu_label: '家',
                tag: 'home_page_root',
                children: [],
                stye: {
                    color: { 1: '#fdeff2', 2: '#e0e0e0', 3: '#e198b4', 4: '#ffffff', 5: '#eeeeee', 5: '#333333' }
                }
            },
            {
                code: "use-tabs",
                menu_label: 'タブ',
                tag: 'page_use-tabs',
                children: [],
                stye: {
                    color: { 1: '#fdeff2', 2: '#e0e0e0', 3: '#e198b4', 4: '#ffffff', 5: '#eeeeee', 5: '#333333' }
                }
            },
            {
                code: "have-child",
                menu_label: '子供',
                tag: 'page_have-childs',
                children: [
                    {
                        code: "child01",
                        tag: 'page_have-childs_page1',
                        children: [],
                    },
                    {
                        code: "child02",
                        tag: 'page_have-childs_page2',
                        children: [],
                    },
                    {
                        code: "child03",
                        tag: 'page_have-childs_page3',
                        children: [],
                    },
                ],
                stye: {
                    color: { 1: '#fdeff2', 2: '#e0e0e0', 3: '#e198b4', 4: '#ffffff', 5: '#eeeeee', 5: '#333333' }
                }
            },
            {
                code: "teams",
                menu_label: '集',
                tag: 'page_teams',
                children: [
                    {
                        code: "members",
                        children: [
                            {
                                code: "user-id",
                                regex: /^\d+$/,
                                // TODO: regex: { contents: /^\d+$/, type: 'integer' },
                                tag: 'page_member',
                                children: [],
                            },
                        ],
                    },
                ],
            },
        ];
    }
    init () {
        let data = {
            site: {
                active_page: 'home',
                home_page: 'home',
                pages: this.pages(),
            }
        };

        for (let page of data.site.pages)
            this.setHashTo(page);

        this._contents = Immutable.Map(data);
        return this;
    }
}
