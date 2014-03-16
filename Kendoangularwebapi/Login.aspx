<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Login.aspx.cs" Inherits="Kendoangularwebapi.Login" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml" ng-app="denemeApp">
<head runat="server">
    <title></title>
    
    <script src="lib/script/jquery-2.1.0.min.js"></script>
    <script src="lib/script/angular.js"></script>
    <script src="lib/script/kendo.all.min.js"></script>
    <script src="lib/script/angular-kendo.js"></script>
    <script src="js/controllers.js"></script>
    <link href="lib/style/kendo.common.min.css" rel="stylesheet" type="text/css" />
    <link href="lib/style/kendo.default.min.css" rel="stylesheet" type="text/css" />
</head>
<body ng-controller="DenemeCtrl">
 
    <button class="k-button" ng-click="window.open()">Open Modal</button>
<div kendo-window="modal" k-title="'Sample Window'" k-visible="false" k-modal="true">
  <div kendo-grid k-data-source="products" k-selectable="'row'"
k-pageable='{ "pageSize": 2, "refresh": true, "pageSizes": true }'
  k-columns='[
    { "field": "name", "title": "Name"},
    { "field": "department", "title": "Department"},
    { "field": "lastShipment", "title": "Last Shipment" }
  ]'>
</div>
<%--       <div>
        <ul>
            <li ng-repeat="phone in phones">
                {{phone.name}}
                <p>{{phone.snippet}}</p>
            </li>
        </ul>
    </div>
   <select kendo-drop-down-list k-options="thingsOptions"
        ng-model="selectedThing"></select>
<h5>You Selected: {{ selectedThing }}</h5>--%>
</div>

</body>
</html>
