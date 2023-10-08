console.log("Made by LimeGradient");

let bookmarkFolderId = 0;
let openTabs = [];

chrome.bookmarks.create(
    { 'title': 'RamFix' },
    function (newFolder) {
        console.log("added folder: " + newFolder.title);
        bookmarkFolderId = newFolder.id;
    },
)

setTimeout(() => {
    console.log(openTabs)
    openTabs.forEach(function (tab) {
        chrome.bookmarks.create({
            'parentId': bookmarkFolderId,
            'title': tab.title,
            'url': tab.url,
        });
        chrome.tabs.remove(tab.id);
    })
}, 1000);

chrome.tabs.query({}, function(tabs) { 
    tabs.forEach(function (tab) {
        openTabs.push(tab);
    })
 } );