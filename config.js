var config = {
    style: 'mapbox://styles/nishanz/clhwb6bv9006b01quh4s6ebfc',
    accessToken: 'pk.eyJ1IjoibmlzaGFueiIsImEiOiJjbGZoNDdvenoxejJqM3BuMTc4Zm5veXRlIn0.l2u5uJsLU-UjLVAhqykX_Q',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'WEBMAP FOR NORTH EVIA',
    subtitle: '!WIP! need participant',
    byline: 'MAY 2023',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'question',
            alignment: 'middle',
            hidden: false,
            title: '',
            image: '',
            description: 'Do you know this is the future?',
            location: {
                center: [23.38608, 38.80960],
                zoom: 7.58,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'delelopment-area-polygon',
                    opacity: 1
                },
                {
                    layer: 'd-road',
                    opacity: 1
                },
                {
                    layer: 'poles-content only',
                    opacity: 1
                },
              ],
            onChapterExit: []
        },
        {
            id: 'first-chapter',
            alignment: 'middle',
            hidden: false,
            title: 'The Reconstruction Plan',
            image: 'images/overlapped diazoma plan maps.png',
            description: 'Since the wildfire of August 2021, the government-backed planning commision, DIAZOMA, has been working on strategies to redevelop the remaining and burnt forests of northern Evia; thus far, these plans appear to be driven by commercial development interests and without regard for existing residents, ecologies, and economies.Diazoma is using vague languages and low-resolution images in their official files. And basing on our interview, we can easily found the public haven’t found their environment ,architectures and lifestyle are going to change.',
            location: {
                center: [23.38608, 38.8098],
                zoom: 7.58,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'second-chapter',
            alignment: 'middle',
            hidden: false,
            title: 'Do you know this plan? Do you agree with this plan? Or can you disagree?',
            image: 'images/overall map.jpg',
            description: '',
            location: {
                center: [23.32172, 38.81438],
                zoom: 9.45,
                pitch: 45.00,
                bearing: 0.00
                
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'delelopment-area-polygon',
                    opacity: 1
                },
                {
                    layer: 'd-road',
                    opacity: 1
                },
                {
                    layer: 'delelopment-area-labels',
                    opacity: 1
                },
              ],
              onChapterExit: [

              ]
        },
        {
            id: 'third-chapter',
            alignment: 'left',
            hidden: false,
            title: 'INVESTIGATION ON NEW ROAD NETWORK',
            description: 'the proposed road network may across your house',
            location: {
                center: [23.15762, 38.94562],
                zoom: 18.40,
                pitch: 74.26,
                bearing: 20.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth-chapter',
            alignment: 'middle',
            hidden: false,
            title: 'the propsed road network from Diazoma',
            image: 'images/evoia-meta-dromos-map_georeferenced.png',
            description: '',
            location: {
                center: [23.02697, 38.74281],
                zoom: 9,
                pitch: 0.00,
                bearing: 0.00

            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '5.1',
            alignment: 'left',
            hidden: false,
            title: 'THE PROPOESED ROAD NETWORK FROM DIAZOMA',
            image: '',
            description: '',
            location: {
                center: [23.02697, 38.74281],
                zoom: 9,
                pitch: 0.00,
                bearing: 0.00

            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'delelopment-area-polygon',
                    opacity: 0
                },
                {
                    layer: 'd-road',
                    opacity: 1
                },
                {
                    layer: 'delelopment-area-labels',
                    opacity: 0
                },
                {
                    layer: 'scaned-roads-highlight',
                    opacity: 1
                },
                {
                    layer: 'poles-content only',
                    opacity: 0
                },
            ],
            onChapterExit: []
        },
        {
            id: '5.2',
            alignment: 'left',
            hidden: false,
            title: 'Existing or auctioned parts',
            image: '',
            description: '',
            location: {
                center: [23.02697, 38.74281],
                zoom: 9,
                pitch: 0.00,
                bearing: 0.00

            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'delelopment-area-polygon',
                    opacity: 0
                },
                {
                    layer: 'd-road',
                    opacity: 0
                },
                {
                    layer: 'Existing or auctioned parts',
                    opacity: 1
                },
                {
                    layer: 'delelopment-area-labels',
                    opacity: 0
                },
                {
                    layer: 'scaned-roads-highlight',
                    opacity: 1
                },
                {
                    layer: 'poles-content only',
                    opacity: 0
                },
                {
                    layer: 'scaned-roads-highlight label',
                    opacity: 1
                },
            ],
            onChapterExit: [
                {
                    layer: 'Existing or auctioned parts',
                    opacity: 0
                },
            ]
        },
        {
            id: '5.3',
            alignment: 'left',
            hidden: false,
            title: 'programmable extension Stroflia - Istiea',
            image: '',
            description: '',
            location: {
                center: [23.45810, 38.68971],
                zoom: 10.2,
                pitch: 21.52,
                bearing: 0.00

            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'programmable extension Stroflia-Istiea',
                    opacity: 1
                },
                {
                    layer: 'scaned-roads-highlight',
                    opacity: 1
                },
                {
                    layer: 'scaned-roads-highlight label',
                    opacity: 1
                },
            ],
            onChapterExit: [
                {
                    layer: 'programmable extension Stroflia-Istiea',
                    opacity: 0
                },
            ],
        },
        {
            id: '5.4',
            alignment: 'left',
            hidden: false,
            title: 'Psachna-Stroflia section already being promoted for implementation',
            image: '',
            description: '',
            location: {
                center: [23.10196, 38.87771],
                zoom: 10.5,
                pitch: 25.51,
                bearing: 0.00

            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'Psachna-Stroflia section already being promoted for implementation',
                    opacity: 1
                },
                {
                    layer: 'scaned-roads-highlight',
                    opacity: 1
                },
                {
                    layer: 'scaned-roads-highlight label',
                    opacity: 1
                },
            ],
            onChapterExit: [
                {
                    layer: 'Psachna-Stroflia section already being promoted for implementation',
                    opacity: 0
                },
            ],
        },        
        {
            id: 'sixth',
            alignment: 'middle',
            hidden: false,
            title: 'CASE 1',
            image: 'images/istea.jpg',
            description: 'lng: 23.27308, lat: 38.89677',
            location: {
                center: [23.27314, 38.89673],
                zoom: 19.38,
                pitch: 78,
                bearing: 141.15

            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'scaned-roads-highlight',
                    opacity: 1
                },
                {
                    layer: 'scaned-roads-highlight label',
                    opacity: 1
                },
                {
                    layer: 'd-road',
                    opacity: 1
                },
            ],
            onChapterExit: []
        },
        {
            id: '7',
            alignment: 'left',
            hidden: false,
            title: 'Contrary to what the interviewees thought, this plan is still ongoing and road construction is a top priority. The environment where residents live is truly changing.',
            image: '',
            description: '',
            location: {
                center: [23.02697, 38.74281],
                zoom: 9,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'delelopment-area-polygon',
                    opacity: 1
                },
                {
                    layer: 'd-road',
                    opacity: 1
                },
                {
                    layer: 'poles-content only',
                    opacity: 0
                },
                {
                    layer: 'scaned-roads-highlight',
                    opacity: 0
                },
                {
                    layer: 'scaned-roads-highlight label',
                    opacity: 0
                },
                {
                    layer: 'poles',
                    opacity: 1
                },
              ],
            onChapterExit: [
                {
                    layer: 'poles',
                    opacity: 0
                },
                {
                    layer: 'd-road',
                    opacity: 0
                },
                {
                    layer: 'delelopment-area-polygon',
                    opacity: 0
                },
            ]
        },
        {
            id: 'other land use changes',
            alignment: 'left',
            hidden: false,
            title: 'In the plan, there are other land use changes',
            image: '',
            description: '',
            location: {
                center: [23.18941, 38.86599],
                zoom: 9.97,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'delelopment-area-polygon',
                    opacity: 1
                },
                {
                    layer: 'delelopment-area-labels',
                    opacity: 1
                },
              ],
            onChapterExit: [                
                {
                layer: 'delelopment-area-polygon',
                opacity: 0
                },
                {
                layer: 'delelopment-area-labels',
                opacity: 0
                },
            ]
        },
        {
            id: 'points...',
            alignment: 'left',
            hidden: false,
            title: 'and unclear points...',
            image: '',
            description: '',
            location: {
                center: [23.18941, 38.86599],
                zoom: 9.97,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'poles',
                    opacity: 1
                },
                {
                    layer: 'poles-content only',
                    opacity: 1
                },
              ],
            onChapterExit: [                
            {
                layer: 'poles',
                opacity: 0
            },
            {
                layer: 'poles-content only',
                opacity: 0
            },]
        },
        {
            id: 'BLUE FLAG',
            alignment: 'left',
            hidden: false,
            title: 'such as: POINTS-BLUE FLAG',
            image: '',
            description: '“The iconic Blue Flag is one of the world’s most recognised voluntary awards for beaches, marinas, and sustainable tourism boats. In order to qualify for the Blue Flag, a series of stringent environmental, educational, safety, and accessibility criteria must be met and maintained.”',
            location: {
                center: [23.18941, 38.86599],
                zoom: 9.97,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'poles-BLUE FLAG',
                    opacity: 1
                },
                {
                    layer: 'poles-content only-BLUE FLAG',
                    opacity: 1
                },
              ],
            onChapterExit: [
                {
                    layer: 'poles-BLUE FLAG',
                    opacity: 0
                },
                {
                    layer: 'poles-content only-BLUE FLAG',
                    opacity: 0
                },
            ]
        },
        {
            id: 'hope',
            alignment: 'middle',
            hidden: false,
            title: '',
            image: '',
            description: 'Even after thoroughly reading their documents, researchers still cannot determine what North Evia will look like in the future in the Diazoma plan. We hope to gather residents’ thoughts through this platform.',
            location: {
                center: [23.18941, 38.86599],
                zoom: 9.97,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};

