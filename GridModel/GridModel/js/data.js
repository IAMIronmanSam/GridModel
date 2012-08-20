(function () {
    "use strict";

    

    // console.log("A:"+a);

    Microsoft.Maps.loadModule('Microsoft.Maps.Map', { callback: initMap });
    function initMap() {
        var map;

        var mapOptions =
        {
            credentials: "AoUv-FMpF-A_zutBXGaP2Eh_GmpST6K5hyxByrOoY9uSPNY5TLT5dINTJbzyWCnk",
            height: 800,
            width: 1276,
            zoom: 14,
            mapTypeId: Microsoft.Maps.MapTypeId.road,
            showMapTypeSelector: false
        };

        map = new Microsoft.Maps.Map(document.getElementById("mapDiv"), mapOptions);
        // Initialize the location provider
        var geoLocationProvider = new Microsoft.Maps.GeoLocationProvider(map);

        // Get the user's current location
        // geoLocationProvider.getCurrentPosition();

        navigator.geolocation.getCurrentPosition(function (position) {
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;
            console.log(latitude);
            console.log(longitude);
            // document.write(latitude);
            var md = new Windows.UI.Popups.MessageDialog("Your Current  Latitude:" + latitude + " Longitude: " + longitude);
            md.showAsync();

            var location = new Microsoft.Maps.Location(latitude, longitude);
            var pushpin = new Microsoft.Maps.Pushpin(location);
            map.entities.push(pushpin);
            map.setView({ center: new Microsoft.Maps.Location(latitude, longitude) });
        })





        var groupDescription = "Group Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tempor scelerisque lorem in vehicula. Aliquam tincidunt, lacus ut sagittis tristique, turpis massa volutpat augue, eu rutrum ligula ante a ante";
        var itemDescription = "Item Description: Pellentesque porta mauris quis interdum vehicula urna sapien ultrices velit nec venenatis dui odio in augue cras posuere enim a cursus convallis neque turpis malesuada erat ut adipiscing neque tortor ac erat";
        var itemContent = "<p>Curabitur class aliquam vestibulum nam curae maecenas sed integer cras phasellus suspendisse quisque donec dis praesent accumsan bibendum pellentesque condimentum adipiscing etiam consequat vivamus dictumst aliquam duis convallis scelerisque est parturient ullamcorper aliquet fusce suspendisse nunc hac eleifend amet blandit facilisi condimentum commodo scelerisque faucibus aenean ullamcorper ante mauris dignissim consectetuer nullam lorem vestibulum habitant conubia elementum pellentesque morbi facilisis arcu sollicitudin diam cubilia aptent vestibulum auctor eget dapibus pellentesque inceptos leo egestas interdum nulla consectetuer suspendisse adipiscing pellentesque proin lobortis sollicitudin augue elit mus congue fermentum parturient fringilla euismod feugiat</p><p>Curabitur class aliquam vestibulum nam curae maecenas sed integer cras phasellus suspendisse quisque donec dis praesent accumsan bibendum pellentesque condimentum adipiscing etiam consequat vivamus dictumst aliquam duis convallis scelerisque est parturient ullamcorper aliquet fusce suspendisse nunc hac eleifend amet blandit facilisi condimentum commodo scelerisque faucibus aenean ullamcorper ante mauris dignissim consectetuer nullam lorem vestibulum habitant conubia elementum pellentesque morbi facilisis arcu sollicitudin diam cubilia aptent vestibulum auctor eget dapibus pellentesque inceptos leo egestas interdum nulla consectetuer suspendisse adipiscing pellentesque proin lobortis sollicitudin augue elit mus congue fermentum parturient fringilla euismod feugiat</p><p>Curabitur class aliquam vestibulum nam curae maecenas sed integer cras phasellus suspendisse quisque donec dis praesent accumsan bibendum pellentesque condimentum adipiscing etiam consequat vivamus dictumst aliquam duis convallis scelerisque est parturient ullamcorper aliquet fusce suspendisse nunc hac eleifend amet blandit facilisi condimentum commodo scelerisque faucibus aenean ullamcorper ante mauris dignissim consectetuer nullam lorem vestibulum habitant conubia elementum pellentesque morbi facilisis arcu sollicitudin diam cubilia aptent vestibulum auctor eget dapibus pellentesque inceptos leo egestas interdum nulla consectetuer suspendisse adipiscing pellentesque proin lobortis sollicitudin augue elit mus congue fermentum parturient fringilla euismod feugiat</p><p>Curabitur class aliquam vestibulum nam curae maecenas sed integer cras phasellus suspendisse quisque donec dis praesent accumsan bibendum pellentesque condimentum adipiscing etiam consequat vivamus dictumst aliquam duis convallis scelerisque est parturient ullamcorper aliquet fusce suspendisse nunc hac eleifend amet blandit facilisi condimentum commodo scelerisque faucibus aenean ullamcorper ante mauris dignissim consectetuer nullam lorem vestibulum habitant conubia elementum pellentesque morbi facilisis arcu sollicitudin diam cubilia aptent vestibulum auctor eget dapibus pellentesque inceptos leo egestas interdum nulla consectetuer suspendisse adipiscing pellentesque proin lobortis sollicitudin augue elit mus congue fermentum parturient fringilla euismod feugiat</p><p>Curabitur class aliquam vestibulum nam curae maecenas sed integer cras phasellus suspendisse quisque donec dis praesent accumsan bibendum pellentesque condimentum adipiscing etiam consequat vivamus dictumst aliquam duis convallis scelerisque est parturient ullamcorper aliquet fusce suspendisse nunc hac eleifend amet blandit facilisi condimentum commodo scelerisque faucibus aenean ullamcorper ante mauris dignissim consectetuer nullam lorem vestibulum habitant conubia elementum pellentesque morbi facilisis arcu sollicitudin diam cubilia aptent vestibulum auctor eget dapibus pellentesque inceptos leo egestas interdum nulla consectetuer suspendisse adipiscing pellentesque proin lobortis sollicitudin augue elit mus congue fermentum parturient fringilla euismod feugiat</p><p>Curabitur class aliquam vestibulum nam curae maecenas sed integer cras phasellus suspendisse quisque donec dis praesent accumsan bibendum pellentesque condimentum adipiscing etiam consequat vivamus dictumst aliquam duis convallis scelerisque est parturient ullamcorper aliquet fusce suspendisse nunc hac eleifend amet blandit facilisi condimentum commodo scelerisque faucibus aenean ullamcorper ante mauris dignissim consectetuer nullam lorem vestibulum habitant conubia elementum pellentesque morbi facilisis arcu sollicitudin diam cubilia aptent vestibulum auctor eget dapibus pellentesque inceptos leo egestas interdum nulla consectetuer suspendisse adipiscing pellentesque proin lobortis sollicitudin augue elit mus congue fermentum parturient fringilla euismod feugiat</p><p>Curabitur class aliquam vestibulum nam curae maecenas sed integer cras phasellus suspendisse quisque donec dis praesent accumsan bibendum pellentesque condimentum adipiscing etiam consequat vivamus dictumst aliquam duis convallis scelerisque est parturient ullamcorper aliquet fusce suspendisse nunc hac eleifend amet blandit facilisi condimentum commodo scelerisque faucibus aenean ullamcorper ante mauris dignissim consectetuer nullam lorem vestibulum habitant conubia elementum pellentesque morbi facilisis arcu sollicitudin diam cubilia aptent vestibulum auctor eget dapibus pellentesque inceptos leo egestas interdum nulla consectetuer suspendisse adipiscing pellentesque proin lobortis sollicitudin augue elit mus congue fermentum parturient fringilla euismod feugiat";

        // These three strings encode placeholder images. You will want to set the
        // backgroundImage property in your real data to be URLs to images.
        var lightGray = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXY7h4+cp/AAhpA3h+ANDKAAAAAElFTkSuQmCC";
        var mediumGray = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXY5g8dcZ/AAY/AsAlWFQ+AAAAAElFTkSuQmCC";
        var darkGray = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXY3B0cPoPAANMAcOba1BlAAAAAElFTkSuQmCC";

        // Each of these sample groups must have a unique key to be displayed
        // separately.
        var sampleGroups =
            { key: "group1", title: latitude, subtitle: "Group Subtitle: 1", backgroundImage: darkGray, description: groupDescription };

        //function getvalue() {
        //    var a = document.getElementById("s").value;
        //    return a;
        //}
        // Each of these sample items should have a reference to a particular
        // group.

        var sampleItems = [
            { group: sampleGroups, title: "Item Title: 1", subtitle: "Item Subtitle: 1", description: itemDescription, content: itemContent, backgroundImage: lightGray },
            { group: sampleGroups, title: "Item Title: 2", subtitle: "Item Subtitle: 2", description: itemDescription, content: itemContent, backgroundImage: darkGray },
            { group: sampleGroups, title: "Item Title: 3", subtitle: "Item Subtitle: 3", description: itemDescription, content: itemContent, backgroundImage: mediumGray },
            { group: sampleGroups, title: "Item Title: 4", subtitle: "Item Subtitle: 4", description: itemDescription, content: itemContent, backgroundImage: darkGray },
            { group: sampleGroups, title: "Item Title: 5", subtitle: "Item Subtitle: 5", description: itemDescription, content: itemContent, backgroundImage: mediumGray },


        ];


        // Get a reference for an item, using the group key and item title as a
        // unique reference to the item that can be easily serialized.
        function getItemReference(item) {
            return [item.group.key, item.title];
        }

        function resolveGroupReference(key) {
            for (var i = 0; i < groupedItems.groups.length; i++) {
                if (groupedItems.groups.getAt(i).key === key) {
                    return groupedItems.groups.getAt(i);
                }
            }
        }

        function resolveItemReference(reference) {
            for (var i = 0; i < groupedItems.length; i++) {
                var item = groupedItems.getAt(i);
                if (item.group.key === reference[0] && item.title === reference[1]) {
                    return item;
                }
            }
        }

        // This function returns a WinJS.Binding.List containing only the items
        // that belong to the provided group.
        function getItemsFromGroup(group) {
            return list.createFiltered(function (item) { return item.group.key === group.key; });
        }

        var list = new WinJS.Binding.List();
        var groupedItems = list.createGrouped(
            function groupKeySelector(item) { return item.group.key; },
            function groupDataSelector(item) { return item.group; }
        );

        // TODO: Replace the data with your real data.
        // You can add data from asynchronous sources whenever it becomes available.
        sampleItems.forEach(function (item) {
            list.push(item);
        });

        WinJS.Namespace.define("Data", {
            items: groupedItems,
            groups: groupedItems.groups,
            getItemsFromGroup: getItemsFromGroup,
            getItemReference: getItemReference,
            resolveGroupReference: resolveGroupReference,
            resolveItemReference: resolveItemReference
        });

       
    }
    var nav = WinJS.Navigation;
    WinJS.UI.Pages.define("/pages/Home.html", {
        ready: function (element, options) {

            document.getElementById("submit").addEventListener("click", navi, false);
        }
    });


    var a;
    function navi() {
        a = document.getElementById("s").value;
        console.log(a);
        nav.navigate('/pages/groupedItems/groupedItems.html');
        console.log(a);
        var st = sampleGroups.title;

        st.a;
        console.log(st);
        // return a;
    }
})();
