var config = {
    lang: 'en',
    time: {
        timeFormat: 12
    },
    weather: {
        //change weather params here:
        //units: metric or imperial
        params: {
            q: 'Honolulu, Hawaii',
            units: 'imperial',
            // if you want a different lang for the weather that what is set above, change it here
            lang: 'en',
            APPID: 'f4625e4000fd95bc30860cc1677867fd'
        }
    },
    /*compliments: {
        interval: 30000,
        fadeInterval: 4000,
        morning: [
            'Good morning, handsome!',
            'Enjoy your day!',
            'How was your sleep?'
        ],
        afternoon: [
            'Hello, beauty!',
            'You look sexy!',
            'Looking good today!'
        ],
        evening: [
            'Wow, you look hot!',
            'You look nice!',
            'Hi, sexy!'
        ]
    },*/
    calendar: {
        maximumEntries: 10,
        url: "https://p04-calendarws.icloud.com/ca/subscribe/1/gLykV1CpcAZz1vFqitc9ZtLOZRBuoYMDrRHvj6jE-LbrNVUTxWuYQBfPeaFdgE2BaJDyoqrj3Vi-utmfk013XVkK4mrLptMdipVfJlPmzY4"
    },
    news: {
        feed: 'http://khon2.com/feed/'
    },
	wordaday: {
		feed: 'http://feeds.feedburner.com/brainyquote/QUOTEBR'
	}
}
