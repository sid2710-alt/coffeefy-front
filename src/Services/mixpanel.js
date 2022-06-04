import mixpanel from 'mixpanel-browser';
var mixpanelToken = "4ba25db6eec5e34e281b802dcdd93e99";

mixpanel.init(mixpanelToken, { debug: true, ignore_dnt: true });

console.log(mixpanelToken);

export default function Mixpanel(purpose, buttonName) {
    console.log(purpose, buttonName);
    mixpanel.track(purpose, {
        'source': buttonName,
        'dummyData': "My name is rak"
    });
}