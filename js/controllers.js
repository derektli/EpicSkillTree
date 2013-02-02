'use strict';

/* Controllers */
function InitialController() {
}
InitialController.$inject = [];

function AboutController() {
}
AboutController.$inject = [];

function ContactController() {
}
ContactController.$inject = [];

function TreeMakerController($scope) {

    var addNodePopupTemplate = $("#addNodePopup"),
//
//            $('<div class="popupTemplate" id="addNodePopup">' +
//            '<form id="addNodeForm" action="javascript:$(\"addNodeForm\").submit();">' +
//                '<fieldset>' +
//                    '<label>Title:</label><input type="text" name="title"/>' +
//                    '<label>Link:</label><input type="text" name="link"/>' +
//                    '<label>Description:</label><textarea name="desc"></textarea>' +
//                    '<br/>' +
//                    '<input type="submit" value="Save Node" class="submit btn btn-primary saveButton"/>' +
//                '</fieldset>' +
//            '</form>' +
//            '</div>'),

        addNodePopup = $(".addNode").popup({
            content : addNodePopupTemplate
        }).data('popup'),

        createNode = function (node) {
            var newNode = $("<div class='node'><h6>" + node.title + "</h6><hr/><a href=" + node.link + " > " + node.link + "</a><br/><p>" + node.desc + "</p></div>");
            $(".addNode").replaceWith(newNode);
        };

    $('#addNodeForm').submit(function (e) {
        e.preventDefault();
        var title = $("input[name=title]")[1].value,
            link = $("input[name=link]")[1].value,
            description = $("textarea[name=desc]")[1].value,
            node = {title: title, link: link, desc: description},
            newNode = createNode(node);
        addNodePopup.close();
    });
}
TreeMakerController.$inject = [];