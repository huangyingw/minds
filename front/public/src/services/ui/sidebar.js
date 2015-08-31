var Sidebar = (function () {
    function Sidebar() {
    }
    Sidebar.prototype.open = function () {
        var drawer = document.getElementsByClassName('mdl-layout__drawer')[0];
        drawer.style['transform'] = "translateX(0)";
        drawer.style['-webkit-transform'] = "translateX(0)";
        drawer.style['-moz-transform'] = "translateX(0)";
        var self = this;
        setTimeout(function () {
            var listener = function (e) {
                self.close();
                document.removeEventListener('click', listener);
            };
            document.addEventListener("click", listener);
        }, 300);
    };
    Sidebar.prototype.close = function () {
        var drawer = document.getElementsByClassName('mdl-layout__drawer')[0];
        drawer.style['transform'] = null;
        drawer.style['-webkit-transform'] = null;
        drawer.style['-moz-transform'] = null;
    };
    return Sidebar;
})();
exports.Sidebar = Sidebar;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zZXJ2aWNlcy91aS9zaWRlYmFyLnRzIl0sIm5hbWVzIjpbIlNpZGViYXIiLCJTaWRlYmFyLmNvbnN0cnVjdG9yIiwiU2lkZWJhci5vcGVuIiwiU2lkZWJhci5jbG9zZSJdLCJtYXBwaW5ncyI6IkFBQUE7SUFBQUE7SUFzQkFDLENBQUNBO0lBckJBRCxzQkFBSUEsR0FBSkE7UUFDQ0UsSUFBSUEsTUFBTUEsR0FBU0EsUUFBUUEsQ0FBQ0Esc0JBQXNCQSxDQUFDQSxvQkFBb0JBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO1FBQzVFQSxNQUFNQSxDQUFDQSxLQUFLQSxDQUFDQSxXQUFXQSxDQUFDQSxHQUFHQSxlQUFlQSxDQUFDQTtRQUM1Q0EsTUFBTUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsbUJBQW1CQSxDQUFDQSxHQUFHQSxlQUFlQSxDQUFDQTtRQUNwREEsTUFBTUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsZ0JBQWdCQSxDQUFDQSxHQUFHQSxlQUFlQSxDQUFDQTtRQUNqREEsSUFBSUEsSUFBSUEsR0FBR0EsSUFBSUEsQ0FBQ0E7UUFFaEJBLFVBQVVBLENBQUNBO1lBQ1ZBLElBQUlBLFFBQVFBLEdBQUdBLFVBQUNBLENBQUNBO2dCQUNoQkEsSUFBSUEsQ0FBQ0EsS0FBS0EsRUFBRUEsQ0FBQ0E7Z0JBQ2JBLFFBQVFBLENBQUNBLG1CQUFtQkEsQ0FBQ0EsT0FBT0EsRUFBRUEsUUFBUUEsQ0FBQ0EsQ0FBQ0E7WUFDakRBLENBQUNBLENBQUNBO1lBQ0ZBLFFBQVFBLENBQUNBLGdCQUFnQkEsQ0FBQ0EsT0FBT0EsRUFBRUEsUUFBUUEsQ0FBQ0EsQ0FBQ0E7UUFDOUNBLENBQUNBLEVBQUVBLEdBQUdBLENBQUNBLENBQUNBO0lBQ1RBLENBQUNBO0lBQ0RGLHVCQUFLQSxHQUFMQTtRQUNDRyxJQUFJQSxNQUFNQSxHQUFTQSxRQUFRQSxDQUFDQSxzQkFBc0JBLENBQUNBLG9CQUFvQkEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7UUFDNUVBLE1BQU1BLENBQUNBLEtBQUtBLENBQUNBLFdBQVdBLENBQUNBLEdBQUdBLElBQUlBLENBQUNBO1FBQ2pDQSxNQUFNQSxDQUFDQSxLQUFLQSxDQUFDQSxtQkFBbUJBLENBQUNBLEdBQUdBLElBQUlBLENBQUNBO1FBQ3pDQSxNQUFNQSxDQUFDQSxLQUFLQSxDQUFDQSxnQkFBZ0JBLENBQUNBLEdBQUdBLElBQUlBLENBQUNBO0lBQ3ZDQSxDQUFDQTtJQUNGSCxjQUFDQTtBQUFEQSxDQXRCQSxBQXNCQ0EsSUFBQTtBQXRCWSxlQUFPLFVBc0JuQixDQUFBIiwiZmlsZSI6InNyYy9zZXJ2aWNlcy91aS9zaWRlYmFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFNpZGViYXJ7XG5cdG9wZW4oKXtcblx0XHR2YXIgZHJhd2VyIDogYW55ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbWRsLWxheW91dF9fZHJhd2VyJylbMF07XG5cdFx0ZHJhd2VyLnN0eWxlWyd0cmFuc2Zvcm0nXSA9IFwidHJhbnNsYXRlWCgwKVwiO1xuXHRcdGRyYXdlci5zdHlsZVsnLXdlYmtpdC10cmFuc2Zvcm0nXSA9IFwidHJhbnNsYXRlWCgwKVwiO1xuXHRcdGRyYXdlci5zdHlsZVsnLW1vei10cmFuc2Zvcm0nXSA9IFwidHJhbnNsYXRlWCgwKVwiO1xuXHRcdHZhciBzZWxmID0gdGhpcztcblx0XHQvL3dlIGhhdmUgYSBkZWxheSBzbyB3ZSBkb24ndCBjbG9zZSBhZnRlciBjbGlja1xuXHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0dmFyIGxpc3RlbmVyID0gKGUpID0+IHtcblx0XHRcdFx0c2VsZi5jbG9zZSgpO1xuXHRcdFx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGxpc3RlbmVyKTtcblx0XHRcdH07XG5cdFx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbGlzdGVuZXIpO1xuXHRcdH0sIDMwMCk7XG5cdH1cblx0Y2xvc2UoKXtcblx0XHR2YXIgZHJhd2VyIDogYW55ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbWRsLWxheW91dF9fZHJhd2VyJylbMF07XG5cdFx0ZHJhd2VyLnN0eWxlWyd0cmFuc2Zvcm0nXSA9IG51bGw7XG5cdFx0ZHJhd2VyLnN0eWxlWyctd2Via2l0LXRyYW5zZm9ybSddID0gbnVsbDtcblx0XHRkcmF3ZXIuc3R5bGVbJy1tb3otdHJhbnNmb3JtJ10gPSBudWxsO1xuXHR9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=