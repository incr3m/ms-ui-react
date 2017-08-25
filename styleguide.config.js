let path = require('path');

module.exports = {
    //   components: 'src/components/**/*.js',
    title: 'ms ui react',
    require: [
        'semantic-ui-css/semantic.min.css'
    ],
    ignore: [
        '**/*reducers.js',
        '**/reducers/*.js'
    ],
    context:{
        dummies:path.resolve(__dirname, 'src/data/dummies')
    },
    sections: [
        {
            name: "Sample",
            components: 'src/components/_sample/*.js'
        },
        {
            name: "Views",
            components: 'src/components/views/**/*.js'
        },
        {
            name: "Procurement",
            sections:[
                {
                    name: "Components",
                    components: 'src/procurement/components/**/*.js'
                },
                {
                    name: "Scenes",
                    content: 'src/procurement/scenes/pr-profile-post/docs.md'
                }
            ]
        }
    ]
};