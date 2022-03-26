chrome.runetime.onInstalled.addListener(function () {
    chrome.contextMenus.create({
        id: 'mesba7',
        title: 'توليد نص عشوائي',
        context: [
            'جملة واحدة',
            'جملتان'
        ]
    })
});