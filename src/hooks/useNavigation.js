import { useCallback, useRef, useState } from 'react';

export const useNavigation = (initialPage) => {
    const [activePage, setActivePage] = useState(initialPage);
    const history = useRef([activePage]);

    const [activeView, activePanel = activeView] = activePage.split('/');

    const go = useCallback((e) => {
        const {page} = e.currentTarget.dataset;
        setActivePage(page);

        if (page.split('/').length > 1) {
            history.current = [...history.current, page];
        }
        else {
            history.current = [page];
        }
    }, []);

    const goBack = useCallback(() => {
        const newHistory = history.current.slice(0, -1);
        history.current = newHistory;
        setActivePage(newHistory[newHistory.length - 1]);
    }, []);

    return {activeView, activePanel, go, goBack};
};