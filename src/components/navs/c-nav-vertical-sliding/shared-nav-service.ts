/*
Copyright 2021, Yahoo EdgeCast
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {Router} from 'aurelia-router';

import {IVNavSliderNavList, IVNavSliderObj, IVNavSliderPageList} from './c-nav-vertical-sliding-interfaces';

export class SharedNav {
    public nav: IVNavSliderObj = {
        activeIndex: 0,
        pages: [
            {
                navs: [],
            },
        ],
        shownIndex: 0,
    };

    public initMainNav(router: Router): void {
        const page: IVNavSliderPageList = {
            navs: [],
            nextText: ' ',
        };

        _.forEach(router.navigation, row => {
            const nav: IVNavSliderNavList = {
                active: false,
                href: row.href,
                title: row.title,
            };

            page.navs.push(nav);
        });

        this.replacePage(page, 0);
    }

    public replacePage(page: IVNavSliderPageList, pageIndex: number) {
        this.clearAllActive();
        this.nav.pages.splice(pageIndex, 1, page);
        this.setPageIndex(pageIndex);
    }

    public setNextText(text: string) {
        setTimeout(() => {
            this.nav.pages[0].nextText = text;
        }, 1000);
    }

    public setActive(pageIndex: number, index: number) {
        this.clearPageActive(pageIndex);
        this.setPageIndex(pageIndex);

        try {
            this.nav.pages[pageIndex].navs[index].active = true;
        } catch (e) {
            // Don't do anything
        }
    }

    private clearAllActive() {
        _.forEach(this.nav.pages, page =>
            _.forEach(page.navs, nav => {
                nav.active = false;
            }),
        );
    }

    private setPageIndex(pageIndex) {
        this.nav.activeIndex = pageIndex;
        this.nav.shownIndex = pageIndex;
    }

    private clearPageActive(pageIndex: number) {
        try {
            _.forEach(this.nav.pages[pageIndex].navs, nav => {
                nav.active = false;
            });
        } catch (e) {
            // Don't do anything
        }
    }
}
