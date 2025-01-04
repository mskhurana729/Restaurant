/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadContactPage: () => (/* binding */ loadContactPage)\n/* harmony export */ });\nconst loadContactPage = function () {\n  const content = document.getElementById(\"content\");\n  content.textContent = \"\";\n  const headline = document.createElement(\"h1\");\n  headline.textContent = \"Contact Us\";\n  content.appendChild(headline);\n  const contactsContainer = document.createElement(\"ul\");\n  const contact1 = document.createElement(\"li\");\n  const contact2 = document.createElement(\"li\");\n  const contact3 = document.createElement(\"li\");\n  const contact4 = document.createElement(\"li\");\n  contact1.textContent = \"Mama Bear: 555-555-5555\";\n  contact2.textContent = \"Papa Bear: 444-444-4444\";\n  contact3.textContent = \"Baby Bear: 333-333-3333\";\n  contact4.textContent = \"Grandpa Bear: 999-999-9999\";\n  contactsContainer.classList.add(\"contactsContainer\");\n  contactsContainer.appendChild(contact1);\n  contactsContainer.appendChild(contact2);\n  contactsContainer.appendChild(contact3);\n  contactsContainer.appendChild(contact4);\n  content.appendChild(contactsContainer);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGFjdC5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2NvbnRhY3QuanM/ZDU2NSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgbG9hZENvbnRhY3RQYWdlID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuICBjb250ZW50LnRleHRDb250ZW50ID0gXCJcIjtcbiAgY29uc3QgaGVhZGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIGhlYWRsaW5lLnRleHRDb250ZW50ID0gXCJDb250YWN0IFVzXCI7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGxpbmUpO1xuICBjb25zdCBjb250YWN0c0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgY29uc3QgY29udGFjdDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGNvbnN0IGNvbnRhY3QyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBjb25zdCBjb250YWN0MyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgY29uc3QgY29udGFjdDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGNvbnRhY3QxLnRleHRDb250ZW50ID0gXCJNYW1hIEJlYXI6IDU1NS01NTUtNTU1NVwiO1xuICBjb250YWN0Mi50ZXh0Q29udGVudCA9IFwiUGFwYSBCZWFyOiA0NDQtNDQ0LTQ0NDRcIjtcbiAgY29udGFjdDMudGV4dENvbnRlbnQgPSBcIkJhYnkgQmVhcjogMzMzLTMzMy0zMzMzXCI7XG4gIGNvbnRhY3Q0LnRleHRDb250ZW50ID0gXCJHcmFuZHBhIEJlYXI6IDk5OS05OTktOTk5OVwiO1xuICBjb250YWN0c0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY29udGFjdHNDb250YWluZXJcIik7XG4gIGNvbnRhY3RzQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhY3QxKTtcbiAgY29udGFjdHNDb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFjdDIpO1xuICBjb250YWN0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWN0Myk7XG4gIGNvbnRhY3RzQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhY3Q0KTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChjb250YWN0c0NvbnRhaW5lcik7XG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/contact.js\n");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadHomePage: () => (/* binding */ loadHomePage)\n/* harmony export */ });\n/* harmony import */ var _logo_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logo.jpg */ \"./src/logo.jpg\");\n\nconst loadHomePage = function () {\n  const content = document.getElementById(\"content\");\n  const logo = document.createElement(\"img\");\n  const headline = document.createElement(\"h1\");\n  const description = document.createElement(\"p\");\n  content.textContent = \"\";\n  description.textContent =\n    \"Enjoy a pure vegetarian dining experience at Khurana Restaurant. Discover delicious, healthy, and 100% plant-based meals crafted with fresh ingredients\";\n\n  headline.textContent = \"Pure Vegetarian Restaurant\";\n  logo.setAttribute(\"src\", _logo_jpg__WEBPACK_IMPORTED_MODULE_0__);\n  content.appendChild(logo);\n\n  content.appendChild(headline);\n  content.appendChild(description);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9tZS5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFpQztBQUMxQjtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCLHNDQUFPO0FBQ2xDOztBQUVBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvaG9tZS5qcz83YjQxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBpbWdQYXRoIGZyb20gXCIuL2xvZ28uanBnXCI7XG5leHBvcnQgY29uc3QgbG9hZEhvbWVQYWdlID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuICBjb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgY29uc3QgaGVhZGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGNvbnRlbnQudGV4dENvbnRlbnQgPSBcIlwiO1xuICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9XG4gICAgXCJFbmpveSBhIHB1cmUgdmVnZXRhcmlhbiBkaW5pbmcgZXhwZXJpZW5jZSBhdCBLaHVyYW5hIFJlc3RhdXJhbnQuIERpc2NvdmVyIGRlbGljaW91cywgaGVhbHRoeSwgYW5kIDEwMCUgcGxhbnQtYmFzZWQgbWVhbHMgY3JhZnRlZCB3aXRoIGZyZXNoIGluZ3JlZGllbnRzXCI7XG5cbiAgaGVhZGxpbmUudGV4dENvbnRlbnQgPSBcIlB1cmUgVmVnZXRhcmlhbiBSZXN0YXVyYW50XCI7XG4gIGxvZ28uc2V0QXR0cmlidXRlKFwic3JjXCIsIGltZ1BhdGgpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGxvZ28pO1xuXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGxpbmUpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/home.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n\n\n\n\nconsole.log(\"Hello\");\n\nconst buttonEvents = (function () {\n  (0,_home_js__WEBPACK_IMPORTED_MODULE_1__.loadHomePage)();\n  const menuBtnEvent = (function () {\n    const menuBtn = document.querySelector(\".menuBtn\");\n    menuBtn.addEventListener(\"click\", (e) => {\n      (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__.loadMenuPage)();\n    });\n  })();\n  const homeBtnEvent = (function () {\n    const homeBtn = document.querySelector(\".homeBtn\");\n    homeBtn.addEventListener(\"click\", (e) => {\n      (0,_home_js__WEBPACK_IMPORTED_MODULE_1__.loadHomePage)();\n    });\n  })();\n  const contactBtnEvent = (function () {\n    const contactBtn = document.querySelector(\".contactBtn\");\n    contactBtn.addEventListener(\"click\", (e) => {\n      (0,_contact_js__WEBPACK_IMPORTED_MODULE_0__.loadContactPage)();\n    });\n  })();\n})();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7OztBQUErQztBQUNOO0FBQ0E7O0FBRXpDOztBQUVBO0FBQ0EsRUFBRSxzREFBWTtBQUNkO0FBQ0E7QUFDQTtBQUNBLE1BQU0sc0RBQVk7QUFDbEIsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxNQUFNLHNEQUFZO0FBQ2xCLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsTUFBTSw0REFBZTtBQUNyQixLQUFLO0FBQ0wsR0FBRztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbG9hZENvbnRhY3RQYWdlIH0gZnJvbSBcIi4vY29udGFjdC5qc1wiO1xuaW1wb3J0IHsgbG9hZEhvbWVQYWdlIH0gZnJvbSBcIi4vaG9tZS5qc1wiO1xuaW1wb3J0IHsgbG9hZE1lbnVQYWdlIH0gZnJvbSBcIi4vbWVudS5qc1wiO1xuXG5jb25zb2xlLmxvZyhcIkhlbGxvXCIpO1xuXG5jb25zdCBidXR0b25FdmVudHMgPSAoZnVuY3Rpb24gKCkge1xuICBsb2FkSG9tZVBhZ2UoKTtcbiAgY29uc3QgbWVudUJ0bkV2ZW50ID0gKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBtZW51QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51QnRuXCIpO1xuICAgIG1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICBsb2FkTWVudVBhZ2UoKTtcbiAgICB9KTtcbiAgfSkoKTtcbiAgY29uc3QgaG9tZUJ0bkV2ZW50ID0gKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBob21lQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ob21lQnRuXCIpO1xuICAgIGhvbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICBsb2FkSG9tZVBhZ2UoKTtcbiAgICB9KTtcbiAgfSkoKTtcbiAgY29uc3QgY29udGFjdEJ0bkV2ZW50ID0gKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBjb250YWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWN0QnRuXCIpO1xuICAgIGNvbnRhY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICBsb2FkQ29udGFjdFBhZ2UoKTtcbiAgICB9KTtcbiAgfSkoKTtcbn0pKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadMenuPage: () => (/* binding */ loadMenuPage)\n/* harmony export */ });\nconst loadMenuPage = function () {\n  const content = document.getElementById(\"content\");\n  const headline1 = document.createElement(\"h1\");\n  const menuItemsContainer = document.createElement(\"ul\");\n  const menuItem1 = document.createElement(\"li\");\n  const menuItem2 = document.createElement(\"li\");\n  const menuItem3 = document.createElement(\"li\");\n  const menuItem4 = document.createElement(\"li\");\n  menuItem1.textContent = \"Honey Tea $2\";\n  menuItem2.textContent = \"Beary Tea $3\";\n  menuItem3.textContent = \"Toast And Jam $1\";\n  menuItem4.textContent = \"Fresh Fruit $3\";\n  menuItemsContainer.classList.add(\"menuItemsContainer\");\n\n  content.textContent = \"\";\n  headline1.textContent = \"Menu\";\n  menuItemsContainer.appendChild(menuItem1);\n  menuItemsContainer.appendChild(menuItem2);\n  menuItemsContainer.appendChild(menuItem3);\n  menuItemsContainer.appendChild(menuItem4);\n  content.appendChild(headline1);\n  content.appendChild(menuItemsContainer);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWVudS5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9tZW51LmpzP2FiMDgiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGxvYWRNZW51UGFnZSA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbiAgY29uc3QgaGVhZGxpbmUxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBjb25zdCBtZW51SXRlbXNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gIGNvbnN0IG1lbnVJdGVtMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgY29uc3QgbWVudUl0ZW0yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBjb25zdCBtZW51SXRlbTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGNvbnN0IG1lbnVJdGVtNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgbWVudUl0ZW0xLnRleHRDb250ZW50ID0gXCJIb25leSBUZWEgJDJcIjtcbiAgbWVudUl0ZW0yLnRleHRDb250ZW50ID0gXCJCZWFyeSBUZWEgJDNcIjtcbiAgbWVudUl0ZW0zLnRleHRDb250ZW50ID0gXCJUb2FzdCBBbmQgSmFtICQxXCI7XG4gIG1lbnVJdGVtNC50ZXh0Q29udGVudCA9IFwiRnJlc2ggRnJ1aXQgJDNcIjtcbiAgbWVudUl0ZW1zQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJtZW51SXRlbXNDb250YWluZXJcIik7XG5cbiAgY29udGVudC50ZXh0Q29udGVudCA9IFwiXCI7XG4gIGhlYWRsaW5lMS50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xuICBtZW51SXRlbXNDb250YWluZXIuYXBwZW5kQ2hpbGQobWVudUl0ZW0xKTtcbiAgbWVudUl0ZW1zQ29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVJdGVtMik7XG4gIG1lbnVJdGVtc0NvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51SXRlbTMpO1xuICBtZW51SXRlbXNDb250YWluZXIuYXBwZW5kQ2hpbGQobWVudUl0ZW00KTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkbGluZTEpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKG1lbnVJdGVtc0NvbnRhaW5lcik7XG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/menu.js\n");

/***/ }),

/***/ "./src/logo.jpg":
/*!**********************!*\
  !*** ./src/logo.jpg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bc566b388a0adde880d9.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;