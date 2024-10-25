(self.webpackChunkexamly_student = self.webpackChunkexamly_student || []).push([[179], {
    2069: (G, $, i) => {
        "use strict";
        i.d($, {
            S: () => g
        });
        var n = i(5e3)
            , e = i(5383)
            , x = i(7465)
            , C = i(9534)
            , O = i(532)
            , D = i(8545)
            , M = i(2401)
            , I = i(9808);
        function N(S, c) {
            if (1 & S) {
                const o = n.EpF();
                n.TgZ(0, "div")(1, "app-button", 5),
                    n.NdJ("but", function () {
                        return n.CHM(o),
                            n.oxw().navigateDailog()
                    }),
                    n.qZA()()
            }
            if (2 & S) {
                const o = n.oxw();
                n.xp6(1),
                    n.Q6J("btnProperties", o.joinBtn)("classNames", "btn-styles primary-btn-color save-next-width")
            }
        }
        const T = function (S) {
            return {
                color: S
            }
        };
        function w(S, c) {
            if (1 & S) {
                const o = n.EpF();
                n.TgZ(0, "div", 8)(1, "div", 9),
                    n.NdJ("click", function () {
                        return n.CHM(o),
                            n.oxw().closeDailog(2)
                    }),
                    n.qZA(),
                    n.TgZ(2, "div", 10),
                    n._uU(3, "Restoration is Inprogress please don't close the Project"),
                    n.qZA(),
                    n.TgZ(4, "div", 11)(5, "span", 12),
                    n._uU(6, " \u2666 "),
                    n.qZA(),
                    n._uU(7, " Code Restoration - "),
                    n.TgZ(8, "span", 12),
                    n._uU(9),
                    n.qZA()(),
                    n.TgZ(10, "div", 13)(11, "span", 12),
                    n._uU(12, " \u2666 "),
                    n.qZA(),
                    n._uU(13, " Database Restoration - "),
                    n.TgZ(14, "span", 12),
                    n._uU(15),
                    n.qZA()()()
            }
            if (2 & S) {
                const o = n.oxw();
                n.xp6(5),
                    n.Q6J("ngStyle", n.VKq(6, T, o.pdData && o.pdData.code_backup ? "var(--eighteen)" : "var(--darkgreen)")),
                    n.xp6(3),
                    n.Q6J("ngStyle", n.VKq(8, T, o.pdData && o.pdData.code_backup ? "var(--eighteen)" : "var(--darkgreen)")),
                    n.xp6(1),
                    n.hij(" ", o.pdData.code_backup ? "Inprogress" : "Completed", " "),
                    n.xp6(2),
                    n.Q6J("ngStyle", n.VKq(10, T, o.pdData && o.pdData.db_backup ? "var(--eighteen)" : "var(--darkgreen)")),
                    n.xp6(3),
                    n.Q6J("ngStyle", n.VKq(12, T, o.pdData && o.pdData.db_backup ? "var(--eighteen)" : "var(--darkgreen)")),
                    n.xp6(1),
                    n.hij(" ", o.pdData.db_backup ? "Inprogress" : "Completed", " ")
            }
        }
        let g = (() => {
            class S {
                constructor(o, t, s, a) {
                    this.socketService = o,
                        this.globalService = t,
                        this.publishtypesService = s,
                        this.router = a,
                        this.data = "",
                        this.dataChange = new n.vpe,
                        this.showResDailog = !1,
                        this.userConnected = !1,
                        this.viewDialog = !1,
                        this.display_msg = "",
                        this.redirectURL = [],
                        this.origin = "",
                        this.liveSessionID = "",
                        this.moduleID = "",
                        this.callState = 0,
                        this.joinBtn = {
                            multipleBtn: !0,
                            btnName: "Join"
                        },
                        this.cancelBtn = {
                            multipleBtn: !0,
                            btnName: "Cancel"
                        },
                        this.dialogStyle = {
                            width: "30%",
                            top: "5%",
                            "border-radius": "10px"
                        },
                        this.headerStyle = {
                            display: "none"
                        }
                }
                socketHandler() {
                    this.socketService.messageRecieved.subscribe(o => {
                        o && o.action && "live-calssroom-reminder" === o.action && this.showDailog(o.data)
                    }
                    )
                }
                showDailog(o) {
                    if (o && !o.isEnded) {
                        let t = window.location.href
                            , s = `${t.split("/")[0]}//${t.split("/")[2]}`
                            , a = this.publishtypesService.getPublishTypeDetailsByType(o.course_type || "Course").params;
                        this.display_msg = o.display_msg,
                            this.redirectURL = {
                                origin: s,
                                c_id: o.c_id,
                                Type: a
                            },
                            this.liveSessionID = o.ls_id,
                            this.moduleID = o.moduleID,
                            this.viewDialog = !0,
                            this.callState = o.state
                    }
                }
                connectToSocket() {
                    this.userConnected || (this.userData = JSON.parse(localStorage.getItem("token")),
                        this.userData.school_id && this.userData.user_id && (this.socketService.connect(this.userData.school_id, this.userData.user_id),
                            this.socketHandler(),
                            this.userConnected = !0,
                            setTimeout(() => {
                                this.globalService.checkMyMeetingReminder().subscribe(o => { }
                                )
                            }
                                , 3e3)))
                }
                showRestorationDailog() {
                    this.pdData = this.pdRestoreStatusData && this.pdRestoreStatusData.data,
                        this.showResDailog = !!(this.pdRestoreStatusData && this.pdRestoreStatusData.visible && this.showResPopup)
                }
                ngOnChanges(o) {
                    for (let t in o)
                        "data" === t && !this.userConnected && this.connectToSocket(),
                            ("pdRestoreStatusData" === t || "showResPopup" === t) && this.showRestorationDailog()
                }
                closeDailog(o) {
                    2 == o ? this.showResDailog = !1 : (this.viewDialog = !1,
                        this.display_msg = "",
                        this.redirectURL = "")
                }
                navigateDailog() {
                    this.viewDialog = !1,
                        window.location.href = `${this.redirectURL.origin}/mycourses/details?id=${this.redirectURL.c_id}&type=${this.redirectURL.Type}\n                    &Ls_id=${this.liveSessionID}&popUp=true`
                }
            }
            return S.\u0275fac = function (o) {
                return new (o || S)(n.Y36(e.$), n.Y36(x.U), n.Y36(C.J), n.Y36(O.F0))
            }
                ,
                S.\u0275cmp = n.Xpm({
                    type: S,
                    selectors: [["app-banner"]],
                    inputs: {
                        data: "data",
                        pdRestoreStatusData: "pdRestoreStatusData",
                        showResPopup: "showResPopup"
                    },
                    outputs: {
                        dataChange: "dataChange"
                    },
                    features: [n.TTD],
                    decls: 9,
                    vars: 8,
                    consts: [["id", "liveSessionDialogID"], [3, "visible", "header", "screenSize", "visibleChange"], [1, "t-text-big", "t-font-medium", "t-text-neutral-1", "t-py-15", "lg:t-py-20", "t-max-h-[calc(100vh-100px)]", "t-overflow-auto", "t-px-16", "lg:t-px-30"], [1, "t-mx-auto", "sm:t-mx-0", "t-flex", "t-justify-center", "sm:t-justify-end", "t-max-w-[320px]", "sm:t-max-w-none", "t-pt-16", "t-pb-32", "sm:t-py-20", "sm:t-px-16", "lg:t-px-30"], [1, "t-flex", "t-justify-between", "t-gap-10"], [3, "btnProperties", "classNames", "but"], [4, "ngIf"], ["class", "resPopupDiv t-z-[1000] t-fixed t-right-0 t-top-[11%] t-my-0 t-m-auto t-w-[34%] t-bg-white t-h-auto t-rounded-xl t-mr-[6%] ", 4, "ngIf"], [1, "resPopupDiv", "t-z-[1000]", "t-fixed", "t-right-0", "t-top-[11%]", "t-my-0", "t-m-auto", "t-w-[34%]", "t-bg-white", "t-h-auto", "t-rounded-xl", "t-mr-[6%]"], [1, "crossMark", 3, "click"], [1, "resHeader", "t-text-large", "t-font-bold", "t-text-error-2", "t-mt-0", "t-mx-[3%]", "t-mb-[1%]", "t-shadow-[0_4px_24px_0_#0000000F]"], [1, "display-txt"], [3, "ngStyle"], [1, "display-txt", 2, "margin-bottom", "20px"]],
                    template: function (o, t) {
                        1 & o && (n.TgZ(0, "div", 0)(1, "app-dialog-sidebar", 1),
                            n.NdJ("visibleChange", function (a) {
                                return t.viewDialog = a
                            })("visibleChange", function () {
                                return t.closeDailog(1)
                            }),
                            n.TgZ(2, "div", 2),
                            n._uU(3),
                            n.qZA(),
                            n.TgZ(4, "div", 3)(5, "div", 4)(6, "app-button", 5),
                            n.NdJ("but", function () {
                                return t.closeDailog(1)
                            }),
                            n.qZA(),
                            n.YNc(7, N, 2, 2, "div", 6),
                            n.qZA()()(),
                            n.YNc(8, w, 16, 14, "div", 7),
                            n.qZA()),
                            2 & o && (n.xp6(1),
                                n.Q6J("visible", t.viewDialog)("header", "Live Session")("screenSize", "850px"),
                                n.xp6(2),
                                n.hij(" ", t.display_msg, " "),
                                n.xp6(3),
                                n.Q6J("btnProperties", t.cancelBtn)("classNames", "btn-styles outlined-btn-color cancel-width"),
                                n.xp6(1),
                                n.Q6J("ngIf", 2 == t.callState),
                                n.xp6(1),
                                n.Q6J("ngIf", t.showResDailog))
                    },
                    directives: [D.c, M.r, I.O5, I.PC],
                    encapsulation: 2
                }),
                S
        }
        )()
    }
    ,
    8620: (G, $, i) => {
        "use strict";
        i.d($, {
            s: () => D
        });
        var n = i(9808)
            , e = i(345)
            , x = i(6979)
            , C = i(9749)
            , O = i(5e3);
        let D = (() => {
            class M {
            }
            return M.\u0275fac = function (N) {
                return new (N || M)
            }
                ,
                M.\u0275mod = O.oAB({
                    type: M
                }),
                M.\u0275inj = O.cJS({
                    imports: [[n.ez, e.S, x.h, C.P]]
                }),
                M
        }
        )()
    }
    ,
    2401: (G, $, i) => {
        "use strict";
        i.d($, {
            r: () => o
        });
        var n = i(5e3)
            , e = i(9808)
            , x = i(5123);
        const C = ["button"]
            , O = function (t) {
                return {
                    "t-opacity-0": t
                }
            };
        function D(t, s) {
            if (1 & t && (n.TgZ(0, "div", 8)(1, "span", 9),
                n._uU(2),
                n.qZA()()),
                2 & t) {
                const a = n.oxw(2);
                n.xp6(1),
                    n.Q6J("ngClass", n.VKq(2, O, a.loading)),
                    n.xp6(1),
                    n.Oqu(a.btnProperties.btnName)
            }
        }
        function M(t, s) {
            if (1 & t && n._UZ(0, "div", 10),
                2 & t) {
                const a = n.oxw(2);
                n.Q6J("innerHtml", a.btnProperties.showIcon, n.oJD)
            }
        }
        function I(t, s) {
            1 & t && (n.TgZ(0, "div", 11),
                n._UZ(1, "app-loader", 12),
                n.qZA())
        }
        const N = function (t, s, a, r, p, d, u, v, y, f, E, R, A) {
            return {
                "margin-left": t,
                padding: s,
                color: a,
                "font-size": r,
                background: p,
                border: d,
                "border-bottom": u,
                "border-top": v,
                "border-right": y,
                "border-left": f,
                width: E,
                "font-weight": R,
                "pointer-events": A
            }
        };
        function T(t, s) {
            if (1 & t) {
                const a = n.EpF();
                n.TgZ(0, "button", 2, 3),
                    n.NdJ("keyup.enter", function () {
                        n.CHM(a);
                        const p = n.oxw();
                        return p.emitCall(p.btnProperties.btnName)
                    })("click", function () {
                        n.CHM(a);
                        const p = n.oxw();
                        return p.emitCall(p.btnProperties.btnName)
                    }),
                    n.TgZ(2, "div", 4),
                    n.YNc(3, D, 3, 4, "div", 5),
                    n.YNc(4, M, 1, 1, "div", 6),
                    n.qZA(),
                    n.YNc(5, I, 2, 0, "div", 7),
                    n.qZA()
            }
            if (2 & t) {
                const a = n.oxw();
                n.s9C("id", a.id ? a.id : ""),
                    n.s9C("tabindex", a.tabindex ? a.tabindex : "0"),
                    n.Q6J("ngStyle", n.rFY(8, N, [a.btnProperties.marginleft, a.padding, a.btnProperties && a.btnProperties.fontColor ? a.btnProperties.fontColor : a.fontColor, a.fontSize, a.btnProperties && a.btnProperties.background ? a.btnProperties.background : a.background, a.btnProperties && a.btnProperties.border ? a.btnProperties.border : "", a.btnProperties && a.btnProperties.borderBottom ? a.btnProperties.borderBottom : "", a.btnProperties && a.btnProperties.borderTop ? a.btnProperties.borderTop : "", a.btnProperties && a.btnProperties.borderRight ? a.btnProperties.borderRight : "", a.btnProperties && a.btnProperties.borderLeft ? a.btnProperties.borderLeft : "", a.btnProperties && a.btnProperties.width ? a.btnProperties.width : "", a.btnProperties && a.btnProperties.fontWeight ? a.btnProperties.fontWeight : "", a.loading ? "none" : ""]))("ngClass", a.setClasses())("disabled", a.disable),
                    n.xp6(3),
                    n.Q6J("ngIf", a.btnProperties && a.btnProperties.btnName),
                    n.xp6(1),
                    n.Q6J("ngIf", a.icons && a.btnProperties && a.btnProperties.showIcon),
                    n.xp6(1),
                    n.Q6J("ngIf", a.loading)
            }
        }
        const w = function (t) {
            return {
                "t-w-0 t-h-0 t-block t-overflow-hidden": t
            }
        };
        function g(t, s) {
            if (1 & t && (n.TgZ(0, "span", 9),
                n._uU(1),
                n.qZA()),
                2 & t) {
                const a = n.oxw(2);
                n.Q6J("ngClass", n.VKq(2, w, a.loading)),
                    n.xp6(1),
                    n.Oqu(a.btnProperties.btnName)
            }
        }
        const S = function (t, s) {
            return {
                "btn-loading t-w-40 t-p-0 !t-rounded-[50%]": t,
                "t-h-40": s
            }
        };
        function c(t, s) {
            if (1 & t) {
                const a = n.EpF();
                n.TgZ(0, "button", 13, 3),
                    n.NdJ("keyup.enter", function () {
                        n.CHM(a);
                        const p = n.oxw();
                        return p.emitCall(p.btnProperties.btnName)
                    })("click", function () {
                        n.CHM(a);
                        const p = n.oxw();
                        return p.emitCall(p.btnProperties.btnName)
                    }),
                    n.YNc(2, g, 2, 4, "span", 14),
                    n.qZA()
            }
            if (2 & t) {
                const a = n.oxw();
                n.s9C("id", a.id ? a.id : ""),
                    n.s9C("tabindex", a.tabindex ? a.tabindex : "0"),
                    n.Q6J("ngClass", a.setClasses())("disabled", a.disable)("ngClass", n.WLB(6, S, a.loading, !a.loading)),
                    n.xp6(2),
                    n.Q6J("ngIf", a.btnProperties && a.btnProperties.btnName)
            }
        }
        let o = (() => {
            class t {
                constructor(a) {
                    this.renderer = a,
                        this.but = new n.vpe,
                        this.btnProperties = "",
                        this.padding = "",
                        this.mobile = "",
                        this.background = "",
                        this.fontColor = "",
                        this.border = "",
                        this.bty = {
                            "font-size": "12px"
                        }
                }
                ngOnChanges(a) {
                    for (let r in a)
                        "loading" === r && this.button && this.loadingHandle()
                }
                loadingHandle() {
                    this.renderer.setStyle(this.button.nativeElement, "cursor", this.loading ? "not-allowed" : "pointer")
                }
                emitCall(a) {
                    (!this.loading || !this.disable) && this.but.emit({
                        valid: !0,
                        type: a
                    })
                }
                setClasses() {
                    return (this.icons ? "butIcon" : "") + " " + (this.disable ? "disabled" : "") + " " + (this.classNames ? this.classNames : "submitBtn formSubmit")
                }
            }
            return t.\u0275fac = function (a) {
                return new (a || t)(n.Y36(n.Qsj))
            }
                ,
                t.\u0275cmp = n.Xpm({
                    type: t,
                    selectors: [["app-button"]],
                    viewQuery: function (a, r) {
                        if (1 & a && n.Gf(C, 7),
                            2 & a) {
                            let p;
                            n.iGM(p = n.CRH()) && (r.button = p.first)
                        }
                    },
                    inputs: {
                        disable: "disable",
                        loading: "loading",
                        btnProperties: "btnProperties",
                        padding: "padding",
                        mobile: "mobile",
                        icons: "icons",
                        fontSize: "fontSize",
                        background: "background",
                        fontColor: "fontColor",
                        border: "border",
                        classNames: "classNames",
                        id: "id",
                        tabindex: "tabindex",
                        authBtn: "authBtn"
                    },
                    outputs: {
                        but: "but"
                    },
                    features: [n.TTD],
                    decls: 2,
                    vars: 2,
                    consts: [["class", "t-relative", 3, "id", "ngStyle", "tabindex", "ngClass", "disabled", "keyup.enter", "click", 4, "ngIf"], ["class", "t-block t-w-full t-rounded-4 t-outline-none t-border-none t-m-auto t-bg-primary t-text-white t-relative t-font-medium t-transition-[all_0.2s_ease-in-out]", 3, "id", "tabindex", "ngClass", "disabled", "keyup.enter", "click", 4, "ngIf"], [1, "t-relative", 3, "id", "ngStyle", "tabindex", "ngClass", "disabled", "keyup.enter", "click"], ["button", ""], [1, "container", "jcc", "btn-align"], ["class", "t-whitespace-nowrap", 4, "ngIf"], ["class", "iconPos", 3, "innerHtml", 4, "ngIf"], ["class", "loader-cont", 4, "ngIf"], [1, "t-whitespace-nowrap"], [3, "ngClass"], [1, "iconPos", 3, "innerHtml"], [1, "loader-cont"], ["type", "type5"], [1, "t-block", "t-w-full", "t-rounded-4", "t-outline-none", "t-border-none", "t-m-auto", "t-bg-primary", "t-text-white", "t-relative", "t-font-medium", "t-transition-[all_0.2s_ease-in-out]", 3, "id", "tabindex", "ngClass", "disabled", "keyup.enter", "click"], [3, "ngClass", 4, "ngIf"]],
                    template: function (a, r) {
                        1 & a && (n.YNc(0, T, 6, 22, "button", 0),
                            n.YNc(1, c, 3, 9, "button", 1)),
                            2 & a && (n.Q6J("ngIf", !r.authBtn),
                                n.xp6(1),
                                n.Q6J("ngIf", r.authBtn))
                    },
                    directives: [e.O5, e.PC, e.mk, x.R],
                    styles: ["@media screen and (max-width: 768px){.ui.grid>.column:not(.row){padding-top:0;padding-bottom:0}.title{padding-left:10px}.ui.grid>.column:not(.row),.ui.grid>.row>.column{padding-left:0;padding-right:0}.not-hide{display:block}.sidebar{width:60%;display:none}.panel-item .item-content{display:revert}i{cursor:pointer}.list-card{padding:0}.SidebarContent{width:100%!important}.list-styles .list-header .ai-logo{height:3.5rem}.list-styles .list-header .close-icon{cursor:pointer}}@media screen and (max-width: 1024px){.modals.dimmer .ui.scrolling.modal{margin:0;background:#FFFFFF}.ui.fullscreen.modal{margin:0;position:absolute;inset:0;width:100%!important;border-radius:0}.ui.fullscreen.modal .notification-modal{border:none}}@media only screen and (min-width: 512px) and (max-width: 768px){.sidebar{width:50%}.modals.dimmer .ui.c.modal{margin:0;background:#FFFFFF}}@media only screen and (min-width: 768px) and (max-width: 1200px){.not-hide{display:block}.sidebar{width:20rem;display:none}.title{padding-left:10px}.icon-split{display:flex}.resp-modal-view{width:50%!important}.list-styles .list-header{display:flex;justify-content:space-between;align-items:center;padding:1rem 2rem 2rem}.list-styles .list-header .ai-logo{height:3.5rem}.list-styles .list-header .close-icon{cursor:pointer}}@media (min-width: 1200px){.close-icon{display:none}}.submitBtn{font-weight:500;height:40px;font-size:16px;border-radius:6px;position:relative}.formSubmit{padding:10px 14px;width:100%;font-size:14px;background:#3456FF;color:var(--white);border:none;cursor:pointer}.bfWeight:before{font-weight:800}.buynow-cart{display:flex!important;width:108px!important;justify-content:center!important}.disabled{cursor:not-allowed!important;opacity:.7}.iconPos{margin-left:5px;height:10px;width:10px;margin-top:1px}button:focus-visible{outline:2px solid var(--seven)}.jcc{justify-content:center}.preview-btn{color:#fff!important;padding:10px 30px!important}.full-width-btn{width:100%}.mb15{margin-bottom:15px}.h50{display:flex;height:50px!important;align-items:center!important;justify-content:center!important;padding:12px 0!important}@media screen and (min-device-width: 641px) and (max-device-width: 1024px){.btnprop{font-size:13px}}@media screen and (max-device-width: 992px){.formSubmit{font-size:12px}}.loader-cont{position:absolute;inset:0;justify-content:center;align-items:center;display:flex;z-index:10}.loader{width:18px;height:18px}.btn-container{display:flex;justify-content:center}.btn-styles{font-size:var(--font-size-medium)!important;background:#3456FF!important;color:#fff!important;border:none!important;padding:0 8px!important;border-radius:4px!important;font-weight:500!important;font-family:inherit!important;text-transform:capitalize!important;cursor:pointer;white-space:nowrap;height:40px}.btn-styles.login{padding:12px!important;position:relative}.btn-styles img{width:16px;height:16px}.marg-right{margin-right:10px!important}.html-css-js-btn{background:transparent;border:none;outline:none;color:#f7f7f7;padding:0 15px;font-size:16px}.html-css-clear-btn{color:#666!important;border:1px solid #666666!important;background:inherit!important}.default-btn-color{background:#3456FF!important}.success-btn-color,.completed-btn-color{background:#39B54A!important}.failure-btn-color{background:#E90F0F!important}.active-btn-color{background:#FFC300!important}.retake-btn-color{background:#022277!important}.resume-btn-color{background:#FFAD3A!important}.pause-test-btn-color{background:#FFC300!important}.primary-btn-color{background:#3456FF!important}.optin-btn{font-size:14px!important}.secondary-btn-color{background:#8D60C8!important}.outlined-btn-color{background:inherit!important;color:#666!important;border:1px solid #AAAAAA!important}.delete-btn{border:1px solid #AAAAAA!important;border-radius:6px;height:40px;font-size:14px;font-weight:500}.clear-btn-color{border:1px solid #AAAAAA!important;background:inherit!important;color:#666!important}.skip-btn{border:none!important;background:inherit!important;color:#666!important}.openide-btn-color{border:1px solid #3456FF!important;background:inherit!important;color:#3456ff!important}.openide-outline-btn-color{border:1px solid #ffffff!important;background:inherit!important;color:#fff!important}.allow-width{width:130px}.cancel-width,.save-next-width{width:140px}.btn-width2{min-width:140px;max-width:150px}.btn-width3{min-width:140px;max-width:220px}.clear-icon{min-width:3.3rem!important}.prev-next-btn-color{background:#3456FF!important;min-width:2.6rem}.editor-btn-color{color:#fff!important;font-weight:400!important;font-size:1rem!important;padding:5px!important;background:#373737!important}.editor-secondary-btn-color{color:#666!important;border:1px solid #666666!important;background:inherit!important}.disabled-btn-color{background:#E7E7E7!important;pointer-events:none;cursor:not-allowed!important;color:#666}.info-btn-primary{background-color:#0094440d!important;color:#009444!important}.info-btn-secondary{background-color:#f809091a!important;color:#f8090999!important}.expand{min-width:6.25rem}.overlay-clear-btn-color{background:#FFFFFF!important;color:#060d1a!important}@media (min-width: 320px){.btn-styles{padding:10px 12px!important;box-sizing:border-box}.html-css-js-btn{padding:10px 12px!important;box-sizing:border-box;font-size:12px}}@media (max-width: 1024px){.html-css-js-btn{padding:10px!important;font-size:12px}}@media (max-width: 768px){.html-css-js-btn{padding:5px!important}}@media (min-width: 1024px){.btn-styles{height:40px;display:flex;align-items:center;justify-content:center}.icon-btn-btn-color{min-width:none}.prev-icon{margin-right:15px}.next-icon{margin-left:15px}.editor-btn-color{font-size:var(--font-size-default)!important}.optin-btn{font-size:18px!important;height:2.93rem!important}}@media (min-width: 1025px){.tab{height:55px;min-width:50px;display:flex;align-items:center;font-weight:400;justify-content:center;font-size:var(--font-size-medium);cursor:pointer;font-family:inherit;margin-right:10px}}@media (min-width: 640px){.html-css-js-btn{padding:0 5px}.cancel-width{width:120px}.save-next-width{width:160px}}\n"],
                    encapsulation: 2
                }),
                t
        }
        )()
    }
    ,
    6979: (G, $, i) => {
        "use strict";
        i.d($, {
            h: () => C
        });
        var n = i(9808)
            , e = i(9653)
            , x = i(5e3);
        let C = (() => {
            class O {
            }
            return O.\u0275fac = function (M) {
                return new (M || O)
            }
                ,
                O.\u0275mod = x.oAB({
                    type: O
                }),
                O.\u0275inj = x.cJS({
                    imports: [[n.ez, e.q]]
                }),
                O
        }
        )()
    }
    ,
    6125: (G, $, i) => {
        "use strict";
        i.d($, {
            k: () => R
        });
        var n = i(5e3)
            , e = i(9808);
        const x = ["topOne"];
        function C(A, B) {
            if (1 & A) {
                const b = n.EpF();
                n.TgZ(0, "div", 10),
                    n.NdJ("click", function () {
                        n.CHM(b);
                        const F = n.oxw().$implicit;
                        return n.oxw(2).remove(F.value)
                    }),
                    n.qZA()
            }
        }
        const O = function (A, B, b) {
            return {
                background: A,
                color: B,
                width: b
            }
        }
            , D = function (A, B) {
                return {
                    changedisp: A,
                    chanewidth: B
                }
            }
            , M = function (A) {
                return {
                    color: A
                }
            }
            , I = function (A, B) {
                return {
                    font10: A,
                    cp: B
                }
            };
        function N(A, B) {
            if (1 & A) {
                const b = n.EpF();
                n.TgZ(0, "div", 7)(1, "div", 8),
                    n.NdJ("click", function () {
                        const K = n.CHM(b).$implicit;
                        return n.oxw(2).returnSelectedChips(K)
                    }),
                    n._uU(2),
                    n.qZA(),
                    n.YNc(3, C, 1, 0, "div", 9),
                    n.qZA()
            }
            if (2 & A) {
                const b = B.$implicit
                    , U = B.index
                    , F = n.oxw(2);
                n.Q6J("ngStyle", n.kEZ(6, O, b && b.check ? F.backgroundcolor : F.normalBg, F.color, F.chipswidth ? F.chipswidth : ""))("ngClass", n.WLB(10, D, U >= F.viewAllLength && F.properties && F.properties.buttonview && F.properties.buttonview.required, !1 === F.properties.buttonview.required)),
                    n.xp6(1),
                    n.Q6J("ngStyle", n.VKq(13, M, !F.normalBg || b && b.check ? "" : F.color))("ngClass", n.WLB(15, I, "10" === F.fontSize, F.returnChips)),
                    n.xp6(1),
                    n.hij(" ", b.label, " "),
                    n.xp6(1),
                    n.Q6J("ngIf", F.closable)
            }
        }
        const T = function (A) {
            return {
                overchange: A
            }
        };
        function w(A, B) {
            if (1 & A) {
                const b = n.EpF();
                n.TgZ(0, "div", 11)(1, "div", 12),
                    n.NdJ("click", function (F) {
                        return n.CHM(b),
                            n.oxw(2).btnEmit(F, "ViewAll")
                    }),
                    n._uU(2, "View All"),
                    n.qZA()()
            }
            if (2 & A) {
                const b = n.oxw(2);
                n.Q6J("ngClass", n.VKq(1, T, b.options))
            }
        }
        function g(A, B) {
            1 & A && (n.TgZ(0, "div", 13),
                n._UZ(1, "i", 14),
                n.qZA())
        }
        const S = function (A) {
            return {
                "padd-side": A
            }
        }
            , c = function (A) {
                return {
                    overf: A
                }
            };
        function o(A, B) {
            if (1 & A && (n.TgZ(0, "div", 1)(1, "div", 2, 3),
                n.YNc(3, N, 4, 18, "div", 4),
                n.YNc(4, w, 3, 3, "div", 5),
                n.qZA(),
                n.YNc(5, g, 2, 0, "div", 6),
                n.qZA()),
                2 & A) {
                const b = n.oxw();
                n.Q6J("ngClass", n.VKq(5, S, b.padding)),
                    n.xp6(1),
                    n.Q6J("ngClass", n.VKq(7, c, b.properties && b.properties.buttonview && !1 === b.properties.buttonview.required)),
                    n.xp6(2),
                    n.Q6J("ngForOf", b.options),
                    n.xp6(1),
                    n.Q6J("ngIf", b.options.length >= b.viewAllLength && b.properties && b.properties.buttonview && b.properties.buttonview.required),
                    n.xp6(1),
                    n.Q6J("ngIf", b.rightArrow)
            }
        }
        function t(A, B) {
            if (1 & A) {
                const b = n.EpF();
                n.TgZ(0, "div", 16),
                    n.NdJ("click", function () {
                        n.CHM(b);
                        const F = n.oxw().$implicit;
                        return n.oxw(2).remove(F.value)
                    }),
                    n.qZA()
            }
        }
        function s(A, B) {
            if (1 & A) {
                const b = n.EpF();
                n.TgZ(0, "div", 7)(1, "div", 8),
                    n.NdJ("click", function () {
                        const K = n.CHM(b).$implicit;
                        return n.oxw(2).returnSelectedChips(K)
                    }),
                    n._uU(2),
                    n.qZA(),
                    n.YNc(3, t, 1, 0, "div", 15),
                    n.qZA()
            }
            if (2 & A) {
                const b = B.$implicit
                    , U = B.index
                    , F = n.oxw(2);
                n.Q6J("ngStyle", n.kEZ(6, O, b && b.check ? F.backgroundcolor : F.normalBg, F.color, F.chipswidth ? F.chipswidth : ""))("ngClass", n.WLB(10, D, U >= 4 && F.properties && F.properties.buttonview && F.properties.buttonview.required, !1 === F.properties.buttonview.required)),
                    n.xp6(1),
                    n.Q6J("ngStyle", n.VKq(13, M, !F.normalBg || b && b.check ? "" : F.color))("ngClass", n.WLB(15, I, "10" === F.fontSize, F.returnChips)),
                    n.xp6(1),
                    n.hij(" ", b.label, " "),
                    n.xp6(1),
                    n.Q6J("ngIf", F.closable)
            }
        }
        function a(A, B) {
            if (1 & A) {
                const b = n.EpF();
                n.TgZ(0, "div", 12),
                    n.NdJ("click", function (F) {
                        return n.CHM(b),
                            n.oxw(3).btnEmit(F, "ViewAll")
                    }),
                    n._uU(1, "View All"),
                    n.qZA()
            }
        }
        function r(A, B) {
            if (1 & A && (n.TgZ(0, "div", 11),
                n.YNc(1, a, 2, 0, "div", 17),
                n.qZA()),
                2 & A) {
                const b = n.oxw(2);
                n.Q6J("ngClass", n.VKq(2, T, b.options)),
                    n.xp6(1),
                    n.Q6J("ngIf", b.closable)
            }
        }
        function p(A, B) {
            1 & A && (n.TgZ(0, "div", 13),
                n._UZ(1, "i", 14),
                n.qZA())
        }
        function d(A, B) {
            if (1 & A && (n.TgZ(0, "div", 1)(1, "div", 2, 3),
                n.YNc(3, s, 4, 18, "div", 4),
                n.YNc(4, r, 2, 4, "div", 5),
                n.qZA(),
                n.YNc(5, p, 2, 0, "div", 6),
                n.qZA()),
                2 & A) {
                const b = n.oxw();
                n.Q6J("ngClass", n.VKq(5, S, b.padding)),
                    n.xp6(1),
                    n.Q6J("ngClass", n.VKq(7, c, !1 === b.properties.buttonview.required)),
                    n.xp6(2),
                    n.Q6J("ngForOf", b.options),
                    n.xp6(1),
                    n.Q6J("ngIf", b.options.length >= 3 && b.closable && b.properties && b.properties.buttonview && b.properties.buttonview.required),
                    n.xp6(1),
                    n.Q6J("ngIf", b.rightArrow)
            }
        }
        function u(A, B) {
            if (1 & A) {
                const b = n.EpF();
                n.TgZ(0, "div", 16),
                    n.NdJ("click", function () {
                        n.CHM(b);
                        const F = n.oxw().$implicit;
                        return n.oxw(2).remove(F.value)
                    }),
                    n.qZA()
            }
        }
        function v(A, B) {
            if (1 & A) {
                const b = n.EpF();
                n.TgZ(0, "div", 7)(1, "div", 8),
                    n.NdJ("click", function () {
                        const K = n.CHM(b).$implicit;
                        return n.oxw(2).returnSelectedChips(K)
                    }),
                    n._uU(2),
                    n.qZA(),
                    n.YNc(3, u, 1, 0, "div", 15),
                    n.qZA()
            }
            if (2 & A) {
                const b = B.$implicit
                    , U = B.index
                    , F = n.oxw(2);
                n.Q6J("ngStyle", n.kEZ(6, O, b && b.check ? F.backgroundcolor : F.normalBg, F.color, F.chipswidth ? F.chipswidth : ""))("ngClass", n.WLB(10, D, U >= 31 && F.properties && F.properties.buttonview && F.properties.buttonview.required, !1 === F.properties.buttonview.required)),
                    n.xp6(1),
                    n.Q6J("ngStyle", n.VKq(13, M, !F.normalBg || b && b.check ? "" : F.color))("ngClass", n.WLB(15, I, "10" === F.fontSize, F.returnChips)),
                    n.xp6(1),
                    n.hij(" ", b.label, " "),
                    n.xp6(1),
                    n.Q6J("ngIf", F.closable)
            }
        }
        function y(A, B) {
            if (1 & A) {
                const b = n.EpF();
                n.TgZ(0, "div", 11)(1, "div", 12),
                    n.NdJ("click", function (F) {
                        return n.CHM(b),
                            n.oxw(2).btnEmit(F, "ViewAll")
                    }),
                    n._uU(2, "View All"),
                    n.qZA()()
            }
            if (2 & A) {
                const b = n.oxw(2);
                n.Q6J("ngClass", n.VKq(1, T, b.options))
            }
        }
        function f(A, B) {
            1 & A && (n.TgZ(0, "div", 13),
                n._UZ(1, "i", 14),
                n.qZA())
        }
        function E(A, B) {
            if (1 & A && (n.TgZ(0, "div", 1)(1, "div", 2, 3),
                n.YNc(3, v, 4, 18, "div", 4),
                n.YNc(4, y, 3, 3, "div", 5),
                n.qZA(),
                n.YNc(5, f, 2, 0, "div", 6),
                n.qZA()),
                2 & A) {
                const b = n.oxw();
                n.Q6J("ngClass", n.VKq(5, S, b.padding)),
                    n.xp6(1),
                    n.Q6J("ngClass", n.VKq(7, c, !1 === b.properties.buttonview.required)),
                    n.xp6(2),
                    n.Q6J("ngForOf", b.options),
                    n.xp6(1),
                    n.Q6J("ngIf", b.options.length >= 31 && b.properties && b.properties.buttonview && b.properties.buttonview.required),
                    n.xp6(1),
                    n.Q6J("ngIf", b.rightArrow)
            }
        }
        let R = (() => {
            class A {
                constructor() {
                    this.emitChips = new n.vpe,
                        this.removeOption = new n.vpe,
                        this.selecChips = new n.vpe,
                        this.chipswidth = ""
                }
                getScreenSize(b) {
                    window.innerWidth > 1440 ? (this.bigscreen = !0,
                        this.mobile = !1,
                        this.screenWidth = window.innerWidth) : window.innerWidth > 768 ? (this.mobile = !1,
                            this.screenWidth = window.innerWidth) : (this.mobile = !0,
                                this.screenWidth = window.innerWidth)
                }
                ngOnInit() {
                    window.innerWidth > 1440 ? (this.bigscreen = !0,
                        this.mobile = !1,
                        this.screenWidth = document.documentElement.clientWidth) : document.documentElement.clientWidth > 768 ? (this.screenWidth = document.documentElement.clientWidth,
                            this.mobile = !1) : (this.screenWidth = document.documentElement.clientWidth,
                                this.mobile = !0)
                }
                btnEmit(b, U) {
                    this.emitChips.emit(U)
                }
                remove(b) {
                    this.removeOption.emit(b)
                }
                returnSelectedChips(b) {
                    this.returnChips && this.selecChips.emit(b)
                }
            }
            return A.\u0275fac = function (b) {
                return new (b || A)
            }
                ,
                A.\u0275cmp = n.Xpm({
                    type: A,
                    selectors: [["app-chips"]],
                    viewQuery: function (b, U) {
                        if (1 & b && n.Gf(x, 5),
                            2 & b) {
                            let F;
                            n.iGM(F = n.CRH()) && (U.topOne = F.first)
                        }
                    },
                    hostBindings: function (b, U) {
                        1 & b && n.NdJ("resize", function (K) {
                            return U.getScreenSize(K)
                        }, !1, n.Jf7)
                    },
                    inputs: {
                        closable: "closable",
                        options: "options",
                        class: "class",
                        backgroundcolor: "backgroundcolor",
                        color: "color",
                        properties: "properties",
                        padding: "padding",
                        fontSize: "fontSize",
                        returnChips: "returnChips",
                        normalBg: "normalBg",
                        viewAllLength: "viewAllLength",
                        chipswidth: "chipswidth"
                    },
                    outputs: {
                        emitChips: "emitChips",
                        removeOption: "removeOption",
                        selecChips: "selecChips"
                    },
                    decls: 3,
                    vars: 3,
                    consts: [["class", "pos", 3, "ngClass", 4, "ngIf"], [1, "pos", 3, "ngClass"], [1, "top1", "container", 3, "ngClass"], ["topOne", ""], ["class", "chips container", 3, "ngStyle", "ngClass", 4, "ngFor", "ngForOf"], [3, "ngClass", 4, "ngIf"], ["class", "pos1 container", 4, "ngIf"], [1, "chips", "container", 3, "ngStyle", "ngClass"], [1, "course-name", 3, "ngStyle", "ngClass", "click"], ["class", "cross icon icon-close-1 container", 3, "click", 4, "ngIf"], [1, "cross", "icon", "icon-close-1", "container", 3, "click"], [3, "ngClass"], [1, "viewone", 3, "click"], [1, "pos1", "container"], ["aria-hidden", "true", 1, "icon", "icon-arrow-back"], ["class", "cross icon icon-close-1", 3, "click", 4, "ngIf"], [1, "cross", "icon", "icon-close-1", 3, "click"], ["class", "viewone", 3, "click", 4, "ngIf"]],
                    template: function (b, U) {
                        1 & b && (n.YNc(0, o, 6, 9, "div", 0),
                            n.YNc(1, d, 6, 9, "div", 0),
                            n.YNc(2, E, 6, 9, "div", 0)),
                            2 & b && (n.Q6J("ngIf", !U.mobile && !U.bigscreen),
                                n.xp6(1),
                                n.Q6J("ngIf", U.mobile && !U.bigscreen),
                                n.xp6(1),
                                n.Q6J("ngIf", U.bigscreen && !U.mobile))
                    },
                    directives: [e.O5, e.mk, e.sg, e.PC],
                    styles: [".course-name[_ngcontent-%COMP%]{color:#fff;overflow:hidden;font-size:14px}.chips[_ngcontent-%COMP%]{justify-content:space-between;align-items:center;white-space:nowrap;padding:0 12px;border-radius:22px;margin-right:10px;height:24px;margin-top:10px}.changedisp[_ngcontent-%COMP%]{display:none}.overf[_ngcontent-%COMP%]{max-height:300px}.cross[_ngcontent-%COMP%]{cursor:pointer;margin-left:12px;position:relative;top:1px;color:#fff;font-size:10px}.pos[_ngcontent-%COMP%]{position:relative;height:100%}.chanewidth[_ngcontent-%COMP%]{width:auto}.top1[_ngcontent-%COMP%]{height:100%;flex-wrap:wrap;padding-bottom:20px}.pos1[_ngcontent-%COMP%]{position:absolute;align-items:center;justify-content:flex-start;right:-20px;top:18px;width:56px;height:43px;border-radius:50px;background:rgba(74,74,74,.49);color:var(--fifteen);filter:blur(2px)}.padd-side[_ngcontent-%COMP%]{padding-left:8px}.disp[_ngcontent-%COMP%]{display:none}.overchange[_ngcontent-%COMP%]{width:103px;height:24px;border-radius:4px;border:solid 1px var(--thirtythree);position:relative;top:10px;left:10px}.viewone[_ngcontent-%COMP%]{text-align:center;position:relative;top:3px;color:var(--thirtythree)}.back[_ngcontent-%COMP%]{background:red!important}.font10[_ngcontent-%COMP%]{font-size:10px}.viewone[_ngcontent-%COMP%], .cp[_ngcontent-%COMP%]{cursor:pointer}@media screen and (min-width: 993px) and (max-width: 1200px){.padd-side[_ngcontent-%COMP%]{padding:0 15px}}@media screen and (min-width: 769px) and (max-width: 992px){.padd-side[_ngcontent-%COMP%]{padding:0 15px}}@media screen and (min-width: 481px) and (max-width: 768px){.padd-side[_ngcontent-%COMP%]{padding:0 20px}.chips[_ngcontent-%COMP%]{justify-content:space-between;align-items:center;white-space:nowrap;padding:0 12px;border-radius:22px;margin-right:10px;height:24px;margin-top:10px}}@media screen and (max-width: 480px){.padd-side[_ngcontent-%COMP%]{padding:0 10px;overflow:hidden}.chips[_ngcontent-%COMP%]{height:25px}.top1[_ngcontent-%COMP%]{flex-wrap:wrap;padding-bottom:20px;overflow:auto}.overchange[_ngcontent-%COMP%]{top:10px}}"]
                }),
                A
        }
        )()
    }
    ,
    2807: (G, $, i) => {
        "use strict";
        i.d($, {
            G: () => x
        });
        var n = i(9808)
            , e = i(5e3);
        let x = (() => {
            class C {
            }
            return C.\u0275fac = function (D) {
                return new (D || C)
            }
                ,
                C.\u0275mod = e.oAB({
                    type: C
                }),
                C.\u0275inj = e.cJS({
                    imports: [[n.ez]]
                }),
                C
        }
        )()
    }
    ,
    8545: (G, $, i) => {
        "use strict";
        i.d($, {
            c: () => N
        });
        var n = i(5e3)
            , e = i(2973)
            , x = i(9808);
        function C(T, w) {
            if (1 & T && (n.TgZ(0, "span", 8),
                n._uU(1),
                n.qZA()),
                2 & T) {
                const g = n.oxw(2);
                n.xp6(1),
                    n.hij(" ", g.header, " ")
            }
        }
        function O(T, w) {
            if (1 & T) {
                const g = n.EpF();
                n.TgZ(0, "div", 9)(1, "img", 10),
                    n.NdJ("click", function () {
                        return n.CHM(g),
                            n.oxw(2).close()
                    }),
                    n.qZA()()
            }
            if (2 & T) {
                const g = n.oxw(2);
                n.xp6(1),
                    n.s9C("src", g.filterClose, n.LSH)
            }
        }
        const D = function (T, w, g, S, c, o, t, s, a, r, p, d, u) {
            return {
                "sm:!t-w-[41.25rem]": T,
                "sm:!t-w-[48.125rem]": w,
                "sm:!t-w-[37rem]": g,
                "sm:!t-w-[70%]": S,
                "lg:!t-w-[808px]": c,
                "lg:!t-w-[447px]": o,
                "lg:!t-w-[685px]": t,
                "lg:!t-w-[850px]": s,
                "lg:!t-w-[950px]": a,
                "lg:!t-w-[80%]": r,
                "lg:!t-w-[70%]": p,
                "lg:!t-w-[560px]": d,
                "lg:!t-w-[57%]": u
            }
        };
        function M(T, w) {
            if (1 & T) {
                const g = n.EpF();
                n.TgZ(0, "div", 1),
                    n.NdJ("click", function (c) {
                        return n.CHM(g),
                            n.oxw().wholeclick(c)
                    }),
                    n.TgZ(1, "div", 2)(2, "div", 3),
                    n.YNc(3, C, 2, 1, "span", 4),
                    n.YNc(4, O, 2, 1, "div", 5),
                    n.qZA(),
                    n._UZ(5, "div", 6),
                    n.TgZ(6, "div", 7),
                    n.Hsn(7),
                    n.qZA()()()
            }
            if (2 & T) {
                const g = n.oxw();
                n.xp6(1),
                    n.Q6J("ngClass", n.rFY(3, D, ["41.25" === g.screenSize, "48.125" === g.screenSize, "37" === g.screenSize, "70%" === g.screenSize, "808px" === g.screenSize, "447px" === g.screenSize, "685px" === g.screenSize, "850px" === g.screenSize, "950px" === g.screenSize, "leaderboardWidth" === g.screenSize, "70%" === g.screenSize, "560" === g.screenSize, "marketContent" === g.type])),
                    n.xp6(2),
                    n.Q6J("ngIf", g.header),
                    n.xp6(1),
                    n.Q6J("ngIf", g.isClose)
            }
        }
        const I = ["*"];
        let N = (() => {
            class T {
                constructor() {
                    this.submitDialog = new n.vpe,
                        this.visibleChange = new n.vpe,
                        this.outSideClick = new n.vpe,
                        this.filterClose = e.z6$,
                        this.isClose = !1 !== this.isClose
                }
                close() {
                    this.visible = !1,
                        this.visibleChange.emit(this.visible)
                }
                wholeclick(g) {
                    this.outSideClick.emit(g)
                }
                emitSubmit(g) {
                    this.submitDialog.emit(g)
                }
                emitEmails() {
                    this.submitDialog.emit(this.sharedEmails)
                }
            }
            return T.\u0275fac = function (g) {
                return new (g || T)
            }
                ,
                T.\u0275cmp = n.Xpm({
                    type: T,
                    selectors: [["app-dialog-sidebar"]],
                    inputs: {
                        header: "header",
                        visible: "visible",
                        isClose: "isClose",
                        screenSize: "screenSize",
                        type: "type"
                    },
                    outputs: {
                        submitDialog: "submitDialog",
                        visibleChange: "visibleChange",
                        outSideClick: "outSideClick"
                    },
                    ngContentSelectors: I,
                    decls: 1,
                    vars: 1,
                    consts: [["class", "t-bg-black/40 t-z-20 t-w-full t-h-full t-fixed t-top-0 t-left-0 t-opacity-100 t-visible t-transition-[all_0.5s]", 3, "click", 4, "ngIf"], [1, "t-bg-black/40", "t-z-20", "t-w-full", "t-h-full", "t-fixed", "t-top-0", "t-left-0", "t-opacity-100", "t-visible", "t-transition-[all_0.5s]", 3, "click"], [1, "t-fixed", "t-bottom-0", "t-bg-white", "t-rounded-t-2xl", "t-w-[100vw]", "t-h-max", "sm:t-w-auto", "sm:t-top-[50%]", "sm:t-left-[50%]", "sm:t-translate-x-[-50%]", "sm:t-translate-y-[-50%]", "sm:t-rounded-2xl", 3, "ngClass"], [1, "t-flex", "t-justify-between", "t-w-full", "t-px-16", "t-pb-16", "lg:t-px-30", "t-pt-26", "lg:t-pt-30", "lg:t-pb-26"], ["class", "t-font-bold t-text-black t-capitalize t-text-big lg:t-text-large", 4, "ngIf"], ["class", "t-flex t-items-center", 4, "ngIf"], [1, "t-w-[calc(100%-32px)]", "lg:t-w-[calc(100%-60px)]", "t-mx-auto", "t-h-2", "t-bg-neutral-4"], [1, "t-h-auto"], [1, "t-font-bold", "t-text-black", "t-capitalize", "t-text-big", "lg:t-text-large"], [1, "t-flex", "t-items-center"], ["alt", "close", 1, "t-w-12", "t-h-12", "t-cursor-pointer", "sm:t-w-16", "sm:t-h-16", 3, "src", "click"]],
                    template: function (g, S) {
                        1 & g && (n.F$t(),
                            n.YNc(0, M, 8, 17, "div", 0)),
                            2 & g && n.Q6J("ngIf", S.visible)
                    },
                    directives: [x.O5, x.mk],
                    encapsulation: 2
                }),
                T
        }
        )()
    }
    ,
    9749: (G, $, i) => {
        "use strict";
        i.d($, {
            P: () => x
        });
        var n = i(9808)
            , e = i(5e3);
        let x = (() => {
            class C {
            }
            return C.\u0275fac = function (D) {
                return new (D || C)
            }
                ,
                C.\u0275mod = e.oAB({
                    type: C
                }),
                C.\u0275inj = e.cJS({
                    imports: [[n.ez]]
                }),
                C
        }
        )()
    }
    ,
    345: (G, $, i) => {
        "use strict";
        i.d($, {
            S: () => I
        });
        var n = i(9808)
            , e = i(6979)
            , x = i(8864)
            , C = i(7798)
            , O = i(2807)
            , D = i(3075)
            , M = i(5e3);
        let I = (() => {
            class N {
            }
            return N.\u0275fac = function (w) {
                return new (w || N)
            }
                ,
                N.\u0275mod = M.oAB({
                    type: N
                }),
                N.\u0275inj = M.cJS({
                    imports: [[n.ez, O.G, e.h, x.n, C.U, D.u5]]
                }),
                N
        }
        )()
    }
    ,
    7798: (G, $, i) => {
        "use strict";
        i.d($, {
            U: () => c
        });
        var n = i(3075)
            , e = i(9808)
            , x = i(2181)
            , C = i(6979)
            , O = i(3135)
            , D = i(1424)
            , M = i(1208)
            , I = i(9603)
            , N = i(4036)
            , T = i(5652)
            , w = i(6476)
            , g = i(9653)
            , S = i(5e3);
        let c = (() => {
            class o {
            }
            return o.\u0275fac = function (s) {
                return new (s || o)
            }
                ,
                o.\u0275mod = S.oAB({
                    type: o
                }),
                o.\u0275inj = S.cJS({
                    imports: [[e.ez, n.u5, n.UX, x.l, C.h, O.xC, D.j, M.nD, I.cc, N.kW, T._8, w.V, g.q]]
                }),
                o
        }
        )()
    }
    ,
    6873: (G, $, i) => {
        "use strict";
        i.d($, {
            D: () => C
        });
        var n = i(9808)
            , e = i(97)
            , x = i(5e3);
        let C = (() => {
            class O {
            }
            return O.\u0275fac = function (M) {
                return new (M || O)
            }
                ,
                O.\u0275mod = x.oAB({
                    type: O
                }),
                O.\u0275inj = x.cJS({
                    imports: [[n.ez, e.$]]
                }),
                O
        }
        )()
    }
    ,
    2181: (G, $, i) => {
        "use strict";
        i.d($, {
            l: () => x
        });
        var n = i(9808)
            , e = i(5e3);
        let x = (() => {
            class C {
            }
            return C.\u0275fac = function (D) {
                return new (D || C)
            }
                ,
                C.\u0275mod = e.oAB({
                    type: C
                }),
                C.\u0275inj = e.cJS({
                    imports: [[n.ez]]
                }),
                C
        }
        )()
    }
    ,
    5123: (G, $, i) => {
        "use strict";
        i.d($, {
            R: () => w
        });
        var n = i(2340)
            , e = i(5e3)
            , x = i(9808);
        const C = ["loader"];
        function O(g, S) {
            1 & g && e._UZ(0, "div", 5)
        }
        function D(g, S) {
            1 & g && (e.TgZ(0, "div", 6)(1, "div", 7, 8),
                e._UZ(3, "i", 9),
                e.qZA()())
        }
        function M(g, S) {
            if (1 & g && (e.TgZ(0, "div", 10)(1, "div", 11),
                e._UZ(2, "i", 12),
                e.qZA()()),
                2 & g) {
                const c = e.oxw();
                e.xp6(2),
                    e.Q6J("ngStyle", c.loaderStyle)
            }
        }
        function I(g, S) {
            1 & g && (e.TgZ(0, "div", 13)(1, "div", 7, 8),
                e._UZ(3, "i", 9),
                e.qZA()())
        }
        function N(g, S) {
            if (1 & g && (e.TgZ(0, "div", 10)(1, "div", 11),
                e._UZ(2, "i", 14),
                e.qZA()()),
                2 & g) {
                const c = e.oxw();
                e.xp6(2),
                    e.Q6J("ngStyle", c.loaderStyle)
            }
        }
        function T(g, S) {
            1 & g && (e.TgZ(0, "div", 15)(1, "div", 7, 8),
                e._UZ(3, "i", 9),
                e.qZA()())
        }
        let w = (() => {
            class g {
                ngOnInit() {
                    this.loader2 = n.N.s3Objectstudentassets + "assets/common-images/spinner.gif"
                }
            }
            return g.\u0275fac = function (c) {
                return new (c || g)
            }
                ,
                g.\u0275cmp = e.Xpm({
                    type: g,
                    selectors: [["app-loader"]],
                    viewQuery: function (c, o) {
                        if (1 & c && e.Gf(C, 5),
                            2 & c) {
                            let t;
                            e.iGM(t = e.CRH()) && (o.loader = t.first)
                        }
                    },
                    inputs: {
                        type: "type",
                        loaderStyle: "loaderStyle"
                    },
                    decls: 6,
                    vars: 6,
                    consts: [["class", "loader", 4, "ngIf"], ["class", "load-main", 4, "ngIf"], ["class", "spinload", 4, "ngIf"], ["class", "load-main-overlay", 4, "ngIf"], ["class", "ra-load-main", 4, "ngIf"], [1, "loader"], [1, "load-main"], [1, "loader", "loadpos"], ["loader", ""], ["aria-hidden", "true", 1, "icon-load-c"], [1, "spinload"], [1, "animate"], ["aria-hidden", "true", 1, "icon-load--c", "type3", 3, "ngStyle"], [1, "load-main-overlay"], ["aria-hidden", "true", 1, "icon-load--c", "t-text-white", "t-text-big", 3, "ngStyle"], [1, "ra-load-main"]],
                    template: function (c, o) {
                        1 & c && (e.YNc(0, O, 1, 0, "div", 0),
                            e.YNc(1, D, 4, 0, "div", 1),
                            e.YNc(2, M, 3, 1, "div", 2),
                            e.YNc(3, I, 4, 0, "div", 3),
                            e.YNc(4, N, 3, 1, "div", 2),
                            e.YNc(5, T, 4, 0, "div", 4)),
                            2 & c && (e.Q6J("ngIf", "type1" === o.type),
                                e.xp6(1),
                                e.Q6J("ngIf", "type2" === o.type),
                                e.xp6(1),
                                e.Q6J("ngIf", "type3" === o.type),
                                e.xp6(1),
                                e.Q6J("ngIf", "type4" === o.type),
                                e.xp6(1),
                                e.Q6J("ngIf", "type5" === o.type),
                                e.xp6(1),
                                e.Q6J("ngIf", "type6" === o.type))
                    },
                    directives: [x.O5, x.PC],
                    styles: [".load-main[_ngcontent-%COMP%]{background-color:#000c;width:100%;height:100vh;position:fixed;top:0;left:0;z-index:10;opacity:.5;visibility:visible;transition:all .5s}.ra-load-main[_ngcontent-%COMP%]{background-color:#000c;width:100%;height:100vh;position:fixed;top:0;left:0;z-index:200;opacity:.5;visibility:visible;transition:all .5s}.load-main-overlay[_ngcontent-%COMP%]{background-color:#000c;width:100%;height:100vh;position:fixed;top:0;left:0;z-index:1200;opacity:.5;visibility:visible;transition:all .5s}.loader[_ngcontent-%COMP%], .loader[_ngcontent-%COMP%]:after{border-radius:50%;width:50px;height:50px}.loader[_ngcontent-%COMP%]{margin:-35px auto -35px -33px;font-size:4px;position:fixed;text-indent:-9999em;border-top:1.1em solid var(--thirtyfour);border-right:1.1em solid var(--thirtyfour);border-bottom:1.1em solid var(--thirtyfour);border-left:1.1em solid var(--white);transform:translateZ(0);animation:load8 1.1s infinite linear}.loadpos[_ngcontent-%COMP%]{margin:unset;top:50%;left:50%}.type3[_ngcontent-%COMP%]{color:var(--inputB);font-size:18px}.animate[_ngcontent-%COMP%]{animation:load8 1.1s infinite linear;display:flex;justify-content:center;align-items:center}@keyframes load8{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.spinload[_ngcontent-%COMP%]{height:100%;width:100%}@media screen and (min-device-width: 0px) and (max-device-width: 768px){.loadpos[_ngcontent-%COMP%]{left:45%}}"]
                }),
                g
        }
        )()
    }
    ,
    9653: (G, $, i) => {
        "use strict";
        i.d($, {
            q: () => x
        });
        var n = i(9808)
            , e = i(5e3);
        let x = (() => {
            class C {
            }
            return C.\u0275fac = function (D) {
                return new (D || C)
            }
                ,
                C.\u0275mod = e.oAB({
                    type: C
                }),
                C.\u0275inj = e.cJS({
                    imports: [[n.ez]]
                }),
                C
        }
        )()
    }
    ,
    2501: (G, $, i) => {
        "use strict";
        i.d($, {
            N: () => g
        });
        var n = i(5e3)
            , e = i(2973)
            , x = i(532)
            , C = i(7465)
            , O = i(9808)
            , D = i(3075)
            , M = i(6125);
        function I(S, c) {
            if (1 & S) {
                const o = n.EpF();
                n.TgZ(0, "div", 6)(1, "div")(2, "app-chips", 8),
                    n.NdJ("removeOption", function (s) {
                        return n.CHM(o),
                            n.oxw().removeOption(s)
                    })("selecChips", function (s) {
                        return n.CHM(o),
                            n.oxw().sendSelectedChips(s)
                    }),
                    n.qZA()()()
            }
            if (2 & S) {
                const o = n.oxw();
                n.xp6(2),
                    n.Q6J("returnChips", !0)("padding", !0)("options", o.fvalues)("closable", !1)("properties", o.fprop)
            }
        }
        const N = function (S, c) {
            return {
                height: S,
                width: c
            }
        }
            , T = function (S, c) {
                return {
                    "t-border-neutral-2/50": S,
                    "t-border-white": c
                }
            }
            , w = function (S, c) {
                return {
                    "t-bg-accent-3": S,
                    "t-bg-white": c
                }
            };
        let g = (() => {
            class S {
                constructor(o, t) {
                    this.router = o,
                        this.globalService = t,
                        this.searchValue = "",
                        this.showBar = !1,
                        this.searchIcon = e.RL9,
                        this.emitSearch = new n.vpe,
                        this.emitChip = new n.vpe,
                        this.router.events.subscribe(s => {
                            s instanceof x.m2 && (this.searchValue = "")
                        }
                        )
                }
                onClick(o) {
                    const t = document.querySelector(".baroutlet");
                    t && !t.contains(o.target) && (this.showBar = !1)
                }
                getSearch() {
                    if (this.showBar = !1,
                        "header" === this.type)
                        this.globalService.search.next({
                            path: window.location.pathname,
                            value: this.searchValue,
                            search: this.searchValue,
                            chips: ""
                        });
                    else {
                        const o = this.fvalues.find(t => !!t.check);
                        this.emitSearch.emit({
                            search: this.searchValue,
                            chips: o
                        })
                    }
                }
                sendSelectedChips(o) {
                    this.showBar = !1,
                        this.emitChip.emit({
                            search: this.searchValue,
                            chips: o
                        })
                }
            }
            return S.\u0275fac = function (o) {
                return new (o || S)(n.Y36(x.F0), n.Y36(C.U))
            }
                ,
                S.\u0275cmp = n.Xpm({
                    type: S,
                    selectors: [["app-search-bar"]],
                    hostBindings: function (o, t) {
                        1 & o && n.NdJ("click", function (a) {
                            return t.onClick(a)
                        }, !1, n.evT)
                    },
                    inputs: {
                        fvalues: "fvalues",
                        fprop: "fprop",
                        radius: "radius",
                        background: "background",
                        borderColor: "borderColor",
                        type: "type",
                        height: "height",
                        width: "width"
                    },
                    outputs: {
                        emitSearch: "emitSearch",
                        emitChip: "emitChip"
                    },
                    decls: 8,
                    vars: 19,
                    consts: [[1, "", 3, "ngStyle"], [1, "t-h-full", "t-w-full"], [1, "t-flex", "t-h-full", "t-w-full", "t-rounded-md", "t-border", "t-overflow-hidden", 3, "ngClass"], [1, "t-h-full", "t-flex", "t-items-center", "t-px-16", 3, "ngClass"], ["alt", "search-icon", 1, "t-w-20", "t-h-20", 3, "src"], ["id", "mycsearch", "placeholder", "Search", 1, "t-h-full", "t-w-full", "t-text-medium", "lg:t-text-big", "t-rounded-md", 3, "ngClass", "ngModel", "keydown.enter", "ngModelChange"], [1, ""], ["class", "", 4, "ngIf"], ["normalBg", "var(--six)", "backgroundcolor", "var(--iconBlue)", "fontSize", "10", "color", "var(--fourtyone)", 3, "returnChips", "padding", "options", "closable", "properties", "removeOption", "selecChips"]],
                    template: function (o, t) {
                        1 & o && (n.TgZ(0, "div", 0)(1, "div", 1)(2, "label", 2)(3, "div", 3),
                            n._UZ(4, "img", 4),
                            n.qZA(),
                            n.TgZ(5, "input", 5),
                            n.NdJ("keydown.enter", function () {
                                return t.getSearch()
                            })("ngModelChange", function (a) {
                                return t.searchValue = a
                            }),
                            n.qZA()()(),
                            n.TgZ(6, "div", 6),
                            n.YNc(7, I, 3, 5, "div", 7),
                            n.qZA()()),
                            2 & o && (n.Q6J("ngStyle", n.WLB(7, N, t.height ? t.height : "100%", t.width ? t.width : "100%")),
                                n.xp6(2),
                                n.Q6J("ngClass", n.WLB(10, T, "neutral2" === t.borderColor, "white" === t.borderColor)),
                                n.xp6(1),
                                n.Q6J("ngClass", n.WLB(13, w, "accent3" === t.background, "white" === t.background)),
                                n.xp6(1),
                                n.Q6J("src", t.searchIcon, n.LSH),
                                n.xp6(1),
                                n.Q6J("ngClass", n.WLB(16, w, "accent3" === t.background, "white" === t.background))("ngModel", t.searchValue),
                                n.xp6(2),
                                n.Q6J("ngIf", t.showBar))
                    },
                    directives: [O.PC, O.mk, D.Fj, D.JJ, D.On, O.O5, M.k],
                    styles: [".searchInput[_ngcontent-%COMP%]{padding-left:30px;line-height:2;height:35px;font-size:15px;border:none;border:1px solid var(--twentyeight);border-radius:4px;width:90%}.searchInput[_ngcontent-%COMP%]::-moz-placeholder{color:var(--twentyeight)}.searchInput[_ngcontent-%COMP%]::placeholder{color:var(--twentyeight)}.searchbararea[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{position:absolute;padding:8px 0 0 9px;cursor:pointer;color:var(--fifteen)}.icon-search-1[_ngcontent-%COMP%]:before{top:1px;position:relative}.bararea[_ngcontent-%COMP%]{position:relative;width:calc(100% + 25px);z-index:1}.downbar[_ngcontent-%COMP%]{position:absolute;background:var(--three);padding:10px;width:100%}@media screen and (max-device-width: 1024px){.searchInput[_ngcontent-%COMP%]{width:80%}}@media screen and (max-device-width: 480px){.searchbararea[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:90%}}"]
                }),
                S
        }
        )()
    }
    ,
    4538: (G, $, i) => {
        "use strict";
        i.d($, {
            B: () => O
        });
        var n = i(9808)
            , e = i(3075)
            , x = i(2807)
            , C = i(5e3);
        let O = (() => {
            class D {
            }
            return D.\u0275fac = function (I) {
                return new (I || D)
            }
                ,
                D.\u0275mod = C.oAB({
                    type: D
                }),
                D.\u0275inj = C.cJS({
                    imports: [[n.ez, e.u5, x.G]]
                }),
                D
        }
        )()
    }
    ,
    8864: (G, $, i) => {
        "use strict";
        i.d($, {
            n: () => I
        });
        var n = i(9808)
            , e = i(3075)
            , x = i(4036)
            , C = i(6526)
            , O = i(4119)
            , D = i(1208)
            , M = i(5e3);
        let I = (() => {
            class N {
            }
            return N.\u0275fac = function (w) {
                return new (w || N)
            }
                ,
                N.\u0275mod = M.oAB({
                    type: N
                }),
                N.\u0275inj = M.cJS({
                    imports: [[n.ez, e.u5, x.kW, C.q4, O.z, D.nD]]
                }),
                N
        }
        )()
    }
    ,
    5227: (G, $, i) => {
        "use strict";
        i.d($, {
            H: () => w
        });
        var n = i(520)
            , e = i(2340)
            , x = i(1135)
            , C = i(4128)
            , O = i(9646)
            , D = i(262)
            , M = i(2973)
            , I = i(5e3)
            , N = i(4120)
            , T = i(7465);
        let w = (() => {
            class g {
                constructor(c, o, t) {
                    this.httpClient = c,
                        this.loginservice = o,
                        this.globalService = t,
                        this.api = e.N.HOST.link,
                        this.pdfApi = e.N.HOST.PDF_VALIDATOR,
                        this.COUNTRYFLAG = M.W1l,
                        this.fValue = {},
                        this.schoolCode = JSON.parse(localStorage.getItem("school_details")) && JSON.parse(localStorage.getItem("school_details")).school_code ? JSON.parse(localStorage.getItem("school_details")).school_code : "",
                        this.school_Id = JSON.parse(localStorage.getItem("school_details")) && JSON.parse(localStorage.getItem("school_details")).school_id ? JSON.parse(localStorage.getItem("school_details")).school_id : "",
                        this.userData = JSON.parse(localStorage.getItem("token")),
                        this.noRedirect = new x.X({}),
                        this.loader = new x.X(!1),
                        this.isRollNoMandatory = new x.X(!1),
                        this.vStatus = new x.X({}),
                        this.branchOrder = [],
                        this.customFieldsValue = [],
                        this.basicFields = [],
                        this.degreeValue = [],
                        this.formData = JSON.parse(localStorage.getItem("formData")),
                        this.isFilled = {},
                        this.activeBranch = 1,
                        this.acadDetails = !1,
                        this.personalData = !1,
                        this.customData = !!(JSON.parse(localStorage.getItem("customFieldsValue")) && JSON.parse(localStorage.getItem("customFieldsValue")).length > 0),
                        this.pers = !1,
                        this.isRedirected = !1,
                        this.nextAddData = [],
                        this.showPersonal = !1,
                        this.showAcademic = !1,
                        this.showAdditional = !1,
                        this.countryList = [{
                            label: "Afghanistan",
                            flag: `${this.COUNTRYFLAG}/AF.svg`,
                            code: "AF",
                            value: "+93"
                        }, {
                            label: "\xc5land Islands",
                            flag: `${this.COUNTRYFLAG}/AX.svg`,
                            code: "AX",
                            value: "+358"
                        }, {
                            label: "Albania",
                            flag: `${this.COUNTRYFLAG}/AL.svg`,
                            code: "AL",
                            value: "+355"
                        }, {
                            label: "Algeria",
                            flag: `${this.COUNTRYFLAG}/DZ.svg`,
                            code: "DZ",
                            value: "+213"
                        }, {
                            label: "American Samoa",
                            flag: `${this.COUNTRYFLAG}/AS.svg`,
                            code: "AS",
                            value: "+1684"
                        }, {
                            label: "Andorra",
                            flag: `${this.COUNTRYFLAG}/AD.svg`,
                            code: "AD",
                            value: "+376"
                        }, {
                            label: "Angola",
                            flag: `${this.COUNTRYFLAG}/AO.svg`,
                            code: "AO",
                            value: "+244"
                        }, {
                            label: "Anguilla",
                            flag: `${this.COUNTRYFLAG}/AI.svg`,
                            code: "AI",
                            value: "+1264"
                        }, {
                            label: "Antarctica",
                            flag: `${this.COUNTRYFLAG}/AQ.svg`,
                            code: "AQ",
                            value: "+672"
                        }, {
                            label: "Antigua and Barbuda",
                            flag: `${this.COUNTRYFLAG}/AG.svg`,
                            code: "AG",
                            value: "+1268"
                        }, {
                            label: "Argentina",
                            flag: `${this.COUNTRYFLAG}/AR.svg`,
                            code: "AR",
                            value: "+54"
                        }, {
                            label: "Armenia",
                            flag: `${this.COUNTRYFLAG}/AM.svg`,
                            code: "AM",
                            value: "+374"
                        }, {
                            label: "Aruba",
                            flag: `${this.COUNTRYFLAG}/AW.svg`,
                            code: "AW",
                            value: "+297"
                        }, {
                            label: "Australia",
                            flag: `${this.COUNTRYFLAG}/AU.svg`,
                            code: "AU",
                            value: "+61"
                        }, {
                            label: "Austria",
                            flag: `${this.COUNTRYFLAG}/AT.svg`,
                            code: "AT",
                            value: "+43"
                        }, {
                            label: "Azerbaijan",
                            flag: `${this.COUNTRYFLAG}/AZ.svg`,
                            code: "AZ",
                            value: "+994"
                        }, {
                            label: "Bahamas",
                            flag: `${this.COUNTRYFLAG}/BS.svg`,
                            code: "BS",
                            value: "+1242"
                        }, {
                            label: "Bahrain",
                            flag: `${this.COUNTRYFLAG}/BH.svg`,
                            code: "BH",
                            value: "+973"
                        }, {
                            label: "Bangladesh",
                            flag: `${this.COUNTRYFLAG}/BD.svg`,
                            code: "BD",
                            value: "+880"
                        }, {
                            label: "Barbados",
                            flag: `${this.COUNTRYFLAG}/BB.svg`,
                            code: "BB",
                            value: "+1246"
                        }, {
                            label: "Belarus",
                            flag: `${this.COUNTRYFLAG}/BY.svg`,
                            code: "BY",
                            value: "+375"
                        }, {
                            label: "Belgium",
                            flag: `${this.COUNTRYFLAG}/BE.svg`,
                            code: "BE",
                            value: "+32"
                        }, {
                            label: "Belize",
                            flag: `${this.COUNTRYFLAG}/BZ.svg`,
                            code: "BZ",
                            value: "+501"
                        }, {
                            label: "Benin",
                            flag: `${this.COUNTRYFLAG}/BJ.svg`,
                            code: "BJ",
                            value: "+229"
                        }, {
                            label: "Bermuda",
                            flag: `${this.COUNTRYFLAG}/BM.svg`,
                            code: "BM",
                            value: "+1441"
                        }, {
                            label: "Bhutan",
                            flag: `${this.COUNTRYFLAG}/BT.svg`,
                            code: "BT",
                            value: "+975"
                        }, {
                            label: "Bolivia, Plurinational State of bolivia",
                            flag: `${this.COUNTRYFLAG}/BO.svg`,
                            code: "BO",
                            value: "+591"
                        }, {
                            label: "Bosnia and Herzegovina",
                            flag: `${this.COUNTRYFLAG}/BA.svg`,
                            code: "BA",
                            value: "+387"
                        }, {
                            label: "Botswana",
                            flag: `${this.COUNTRYFLAG}/BW.svg`,
                            code: "BW",
                            value: "+267"
                        }, {
                            label: "Bouvet Island",
                            flag: `${this.COUNTRYFLAG}/BV.svg`,
                            code: "BV",
                            value: "+47"
                        }, {
                            label: "Brazil",
                            flag: `${this.COUNTRYFLAG}/BR.svg`,
                            code: "BR",
                            value: "+55"
                        }, {
                            label: "British Indian Ocean Territory",
                            flag: `${this.COUNTRYFLAG}/IO.svg`,
                            code: "IO",
                            value: "+246"
                        }, {
                            label: "Brunei Darussalam",
                            flag: `${this.COUNTRYFLAG}/BN.svg`,
                            code: "BN",
                            value: "+673"
                        }, {
                            label: "Bulgaria",
                            flag: `${this.COUNTRYFLAG}/BG.svg`,
                            code: "BG",
                            value: "+359"
                        }, {
                            label: "Burkina Faso",
                            flag: `${this.COUNTRYFLAG}/BF.svg`,
                            code: "BF",
                            value: "+226"
                        }, {
                            label: "Burundi",
                            flag: `${this.COUNTRYFLAG}/BI.svg`,
                            code: "BI",
                            value: "+257"
                        }, {
                            label: "Cambodia",
                            flag: `${this.COUNTRYFLAG}/KH.svg`,
                            code: "KH",
                            value: "+855"
                        }, {
                            label: "Cameroon",
                            flag: `${this.COUNTRYFLAG}/CM.svg`,
                            code: "CM",
                            value: "+237"
                        }, {
                            label: "Canada",
                            flag: `${this.COUNTRYFLAG}/CA.svg`,
                            code: "CA",
                            value: "+1"
                        }, {
                            label: "Cape Verde",
                            flag: `${this.COUNTRYFLAG}/CV.svg`,
                            code: "CV",
                            value: "+238"
                        }, {
                            label: "Cayman Islands",
                            flag: `${this.COUNTRYFLAG}/KY.svg`,
                            code: "KY",
                            value: "+345"
                        }, {
                            label: "Central African Republic",
                            flag: `${this.COUNTRYFLAG}/CF.svg`,
                            code: "CF",
                            value: "+236"
                        }, {
                            label: "Chad",
                            flag: `${this.COUNTRYFLAG}/TD.svg`,
                            code: "TD",
                            value: "+235"
                        }, {
                            label: "Chile",
                            flag: `${this.COUNTRYFLAG}/CL.svg`,
                            code: "CL",
                            value: "+56"
                        }, {
                            label: "China",
                            flag: `${this.COUNTRYFLAG}/CN.svg`,
                            code: "CN",
                            value: "+86"
                        }, {
                            label: "Christmas Island",
                            flag: `${this.COUNTRYFLAG}/CX.svg`,
                            code: "CX",
                            value: "+61"
                        }, {
                            label: "Cocos (Keeling) Islands",
                            flag: `${this.COUNTRYFLAG}/CC.svg`,
                            code: "CC",
                            value: "+61"
                        }, {
                            label: "Colombia",
                            flag: `${this.COUNTRYFLAG}/CO.svg`,
                            code: "CO",
                            value: "+57"
                        }, {
                            label: "Comoros",
                            flag: `${this.COUNTRYFLAG}/AF.svg`,
                            code: "KM",
                            value: "+269"
                        }, {
                            label: "Congo",
                            flag: `${this.COUNTRYFLAG}/CG.svg`,
                            code: "CG",
                            value: "+242"
                        }, {
                            label: "Congo, The Democratic Republic of the Congo",
                            flag: `${this.COUNTRYFLAG}/CD.svg`,
                            code: "CD",
                            value: "+243"
                        }, {
                            label: "Cook Islands",
                            flag: `${this.COUNTRYFLAG}/CK.svg`,
                            code: "CK",
                            value: "+682"
                        }, {
                            label: "Costa Rica",
                            flag: `${this.COUNTRYFLAG}/CR.svg`,
                            code: "CR",
                            value: "+506"
                        }, {
                            label: "Cote d'Ivoire",
                            flag: `${this.COUNTRYFLAG}/CI.svg`,
                            code: "CI",
                            value: "+225"
                        }, {
                            label: "Croatia",
                            flag: `${this.COUNTRYFLAG}/HR.svg`,
                            code: "HR",
                            value: "+385"
                        }, {
                            label: "Cuba",
                            flag: `${this.COUNTRYFLAG}/CU.svg`,
                            code: "CU",
                            value: "+53"
                        }, {
                            label: "Cyprus",
                            flag: `${this.COUNTRYFLAG}/CY.svg`,
                            code: "CY",
                            value: "+357"
                        }, {
                            label: "Czech Republic",
                            flag: `${this.COUNTRYFLAG}/CZ.svg`,
                            code: "CZ",
                            value: "+420"
                        }, {
                            label: "Denmark",
                            flag: `${this.COUNTRYFLAG}/DK.svg`,
                            code: "DK",
                            value: "+45"
                        }, {
                            label: "Djibouti",
                            flag: `${this.COUNTRYFLAG}/DJ.svg`,
                            code: "DJ",
                            value: "+253"
                        }, {
                            label: "Dominica",
                            flag: `${this.COUNTRYFLAG}/DM.svg`,
                            code: "DM",
                            value: "+1767"
                        }, {
                            label: "Dominican Republic",
                            flag: `${this.COUNTRYFLAG}/DO.svg`,
                            code: "DO",
                            value: "+1849"
                        }, {
                            label: "Ecuador",
                            flag: `${this.COUNTRYFLAG}/EC.svg`,
                            code: "EC",
                            value: "+593"
                        }, {
                            label: "Egypt",
                            flag: `${this.COUNTRYFLAG}/EG.svg`,
                            code: "EG",
                            value: "+20"
                        }, {
                            label: "El Salvador",
                            flag: `${this.COUNTRYFLAG}/SV.svg`,
                            code: "SV",
                            value: "+503"
                        }, {
                            label: "Equatorial Guinea",
                            flag: `${this.COUNTRYFLAG}/GQ.svg`,
                            code: "GQ",
                            value: "+240"
                        }, {
                            label: "Eritrea",
                            flag: `${this.COUNTRYFLAG}/EQ.svg`,
                            code: "ER",
                            value: "+291"
                        }, {
                            label: "Estonia",
                            flag: `${this.COUNTRYFLAG}/EE.svg`,
                            code: "EE",
                            value: "+372"
                        }, {
                            label: "Ethiopia",
                            flag: `${this.COUNTRYFLAG}/ET.svg`,
                            code: "ET",
                            value: "+251"
                        }, {
                            label: "Falkland Islands (Malvinas)",
                            flag: `${this.COUNTRYFLAG}/FK.svg`,
                            code: "FK",
                            value: "+500"
                        }, {
                            label: "Faroe Islands",
                            flag: `${this.COUNTRYFLAG}/FO.svg`,
                            code: "FO",
                            value: "+298"
                        }, {
                            label: "Fiji",
                            flag: `${this.COUNTRYFLAG}/FJ.svg`,
                            code: "FJ",
                            value: "+679"
                        }, {
                            label: "Finland",
                            flag: `${this.COUNTRYFLAG}/FI.svg`,
                            code: "FI",
                            value: "+358"
                        }, {
                            label: "France",
                            flag: `${this.COUNTRYFLAG}/FR.svg`,
                            code: "FR",
                            value: "+33"
                        }, {
                            label: "French Guiana",
                            flag: `${this.COUNTRYFLAG}/GF.svg`,
                            code: "GF",
                            value: "+594"
                        }, {
                            label: "French Polynesia",
                            flag: `${this.COUNTRYFLAG}/PF.svg`,
                            code: "PF",
                            value: "+689"
                        }, {
                            label: "French Southern Territories",
                            flag: `${this.COUNTRYFLAG}/TF.svg`,
                            code: "TF",
                            value: "+262"
                        }, {
                            label: "Gabon",
                            flag: `${this.COUNTRYFLAG}/GA.svg`,
                            code: "GA",
                            value: "+241"
                        }, {
                            label: "Gambia",
                            flag: `${this.COUNTRYFLAG}/GM.svg`,
                            code: "GM",
                            value: "+220"
                        }, {
                            label: "Georgia",
                            flag: `${this.COUNTRYFLAG}/GE.svg`,
                            code: "GE",
                            value: "+995"
                        }, {
                            label: "Germany",
                            flag: `${this.COUNTRYFLAG}/DE.svg`,
                            code: "DE",
                            value: "+49"
                        }, {
                            label: "Ghana",
                            flag: `${this.COUNTRYFLAG}/GH.svg`,
                            code: "GH",
                            value: "+233"
                        }, {
                            label: "Gibraltar",
                            flag: `${this.COUNTRYFLAG}/GI.svg`,
                            code: "GI",
                            value: "+350"
                        }, {
                            label: "Greece",
                            flag: `${this.COUNTRYFLAG}/GR.svg`,
                            code: "GR",
                            value: "+30"
                        }, {
                            label: "Greenland",
                            flag: `${this.COUNTRYFLAG}/GL.svg`,
                            code: "GL",
                            value: "+299"
                        }, {
                            label: "Grenada",
                            flag: `${this.COUNTRYFLAG}/GD.svg`,
                            code: "GD",
                            value: "+1473"
                        }, {
                            label: "Guadeloupe",
                            flag: `${this.COUNTRYFLAG}/GP.svg`,
                            code: "GP",
                            value: "+590"
                        }, {
                            label: "Guam",
                            flag: `${this.COUNTRYFLAG}/GU.svg`,
                            code: "GU",
                            value: "+1671"
                        }, {
                            label: "Guatemala",
                            flag: `${this.COUNTRYFLAG}/GT.svg`,
                            code: "GT",
                            value: "+502"
                        }, {
                            label: "Guernsey",
                            flag: `${this.COUNTRYFLAG}/GG.svg`,
                            code: "GG",
                            value: "+44"
                        }, {
                            label: "Guinea",
                            flag: `${this.COUNTRYFLAG}/GN.svg`,
                            code: "GN",
                            value: "+224"
                        }, {
                            label: "Guinea-Bissau",
                            flag: `${this.COUNTRYFLAG}/GW.svg`,
                            code: "GW",
                            value: "+245"
                        }, {
                            label: "Guyana",
                            flag: `${this.COUNTRYFLAG}/GY.svg`,
                            code: "GY",
                            value: "+592"
                        }, {
                            label: "Haiti",
                            flag: `${this.COUNTRYFLAG}/HT.svg`,
                            code: "HT",
                            value: "+509"
                        }, {
                            label: "Heard Island and Mcdonald Islands",
                            flag: `${this.COUNTRYFLAG}/HM.svg`,
                            code: "HM",
                            value: "+672"
                        }, {
                            label: "Holy See (Vatican City State)",
                            flag: `${this.COUNTRYFLAG}/VA.svg`,
                            code: "VA",
                            value: "+379"
                        }, {
                            label: "Honduras",
                            flag: `${this.COUNTRYFLAG}/HN.svg`,
                            code: "HN",
                            value: "+504"
                        }, {
                            label: "Hong Kong",
                            flag: `${this.COUNTRYFLAG}/HK.svg`,
                            code: "HK",
                            value: "+852"
                        }, {
                            label: "Hungary",
                            flag: `${this.COUNTRYFLAG}/HU.svg`,
                            code: "HU",
                            value: "+36"
                        }, {
                            label: "Iceland",
                            flag: `${this.COUNTRYFLAG}/IS.svg`,
                            code: "IS",
                            value: "+354"
                        }, {
                            label: "India",
                            flag: `${this.COUNTRYFLAG}/IN.svg`,
                            code: "IN",
                            value: "+91"
                        }, {
                            label: "Indonesia",
                            flag: `${this.COUNTRYFLAG}/ID.svg`,
                            code: "ID",
                            value: "+62"
                        }, {
                            label: "Iran, Islamic Republic of Persian Gulf",
                            flag: `${this.COUNTRYFLAG}/IR.svg`,
                            code: "IR",
                            value: "+98"
                        }, {
                            label: "Iraq",
                            flag: `${this.COUNTRYFLAG}/IQ.svg`,
                            code: "IQ",
                            value: "+964"
                        }, {
                            label: "Ireland",
                            flag: `${this.COUNTRYFLAG}/IE.svg`,
                            code: "IE",
                            value: "+353"
                        }, {
                            label: "Isle of Man",
                            flag: `${this.COUNTRYFLAG}/IM.svg`,
                            code: "IM",
                            value: "+44"
                        }, {
                            label: "Israel",
                            flag: `${this.COUNTRYFLAG}/IL.svg`,
                            code: "IL",
                            value: "+972"
                        }, {
                            label: "Italy",
                            flag: `${this.COUNTRYFLAG}/IT.svg`,
                            code: "IT",
                            value: "+39"
                        }, {
                            label: "Jamaica",
                            flag: `${this.COUNTRYFLAG}/JM.svg`,
                            code: "JM",
                            value: "+1876"
                        }, {
                            label: "Japan",
                            flag: `${this.COUNTRYFLAG}/JP.svg`,
                            code: "JP",
                            value: "+81"
                        }, {
                            label: "Jersey",
                            flag: `${this.COUNTRYFLAG}/JE.svg`,
                            code: "JE",
                            value: "+44"
                        }, {
                            label: "Jordan",
                            flag: `${this.COUNTRYFLAG}/JO.svg`,
                            code: "JO",
                            value: "+962"
                        }, {
                            label: "Kazakhstan",
                            flag: `${this.COUNTRYFLAG}/KZ.svg`,
                            code: "KZ",
                            value: "+7"
                        }, {
                            label: "Kenya",
                            flag: `${this.COUNTRYFLAG}/KE.svg`,
                            code: "KE",
                            value: "+254"
                        }, {
                            label: "Kiribati",
                            flag: `${this.COUNTRYFLAG}/KI.svg`,
                            code: "KI",
                            value: "+686"
                        }, {
                            label: "Korea, Democratic People's Republic of Korea",
                            flag: `${this.COUNTRYFLAG}/KP.svg`,
                            code: "KP",
                            value: "+850"
                        }, {
                            label: "Korea, Republic of South Korea",
                            flag: `${this.COUNTRYFLAG}/KR.svg`,
                            code: "KR",
                            value: "+82"
                        }, {
                            label: "Kosovo",
                            flag: `${this.COUNTRYFLAG}/XK.svg`,
                            code: "XK",
                            value: "+383"
                        }, {
                            label: "Kuwait",
                            flag: `${this.COUNTRYFLAG}/KW.svg`,
                            code: "KW",
                            value: "+965"
                        }, {
                            label: "Kyrgyzstan",
                            flag: `${this.COUNTRYFLAG}/KG.svg`,
                            code: "KG",
                            value: "+996"
                        }, {
                            label: "Laos",
                            flag: `${this.COUNTRYFLAG}/LA.svg`,
                            code: "LA",
                            value: "+856"
                        }, {
                            label: "Latvia",
                            flag: `${this.COUNTRYFLAG}/LV.svg`,
                            code: "LV",
                            value: "+371"
                        }, {
                            label: "Lebanon",
                            flag: `${this.COUNTRYFLAG}/LB.svg`,
                            code: "LB",
                            value: "+961"
                        }, {
                            label: "Lesotho",
                            flag: `${this.COUNTRYFLAG}/LS.svg`,
                            code: "LS",
                            value: "+266"
                        }, {
                            label: "Liberia",
                            flag: `${this.COUNTRYFLAG}/LR.svg`,
                            code: "LR",
                            value: "+231"
                        }, {
                            label: "Libyan Arab Jamahiriya",
                            flag: `${this.COUNTRYFLAG}/LY.svg`,
                            code: "LY",
                            value: "+218"
                        }, {
                            label: "Liechtenstein",
                            flag: `${this.COUNTRYFLAG}/LI.svg`,
                            code: "LI",
                            value: "+423"
                        }, {
                            label: "Lithuania",
                            flag: `${this.COUNTRYFLAG}/LT.svg`,
                            code: "LT",
                            value: "+370"
                        }, {
                            label: "Luxembourg",
                            flag: `${this.COUNTRYFLAG}/LU.svg`,
                            code: "LU",
                            value: "+352"
                        }, {
                            label: "Macao",
                            flag: `${this.COUNTRYFLAG}/MO.svg`,
                            code: "MO",
                            value: "+853"
                        }, {
                            label: "Macedonia",
                            flag: `${this.COUNTRYFLAG}/MK.svg`,
                            code: "MK",
                            value: "+389"
                        }, {
                            label: "Madagascar",
                            flag: `${this.COUNTRYFLAG}/MG.svg`,
                            code: "MG",
                            value: "+261"
                        }, {
                            label: "Malawi",
                            flag: `${this.COUNTRYFLAG}/MW.svg`,
                            code: "MW",
                            value: "+265"
                        }, {
                            label: "Malaysia",
                            flag: `${this.COUNTRYFLAG}/MY.svg`,
                            code: "MY",
                            value: "+60"
                        }, {
                            label: "Maldives",
                            flag: `${this.COUNTRYFLAG}/MV.svg`,
                            code: "MV",
                            value: "+960"
                        }, {
                            label: "Mali",
                            flag: `${this.COUNTRYFLAG}/ML.svg`,
                            code: "ML",
                            value: "+223"
                        }, {
                            label: "Malta",
                            flag: `${this.COUNTRYFLAG}/MT.svg`,
                            code: "MT",
                            value: "+356"
                        }, {
                            label: "Marshall Islands",
                            flag: `${this.COUNTRYFLAG}/MH.svg`,
                            code: "MH",
                            value: "+692"
                        }, {
                            label: "Martinique",
                            flag: `${this.COUNTRYFLAG}/MQ.svg`,
                            code: "MQ",
                            value: "+596"
                        }, {
                            label: "Mauritania",
                            flag: `${this.COUNTRYFLAG}/MR.svg`,
                            code: "MR",
                            value: "+222"
                        }, {
                            label: "Mauritius",
                            flag: `${this.COUNTRYFLAG}/MU.svg`,
                            code: "MU",
                            value: "+230"
                        }, {
                            label: "Mayotte",
                            flag: `${this.COUNTRYFLAG}/YT.svg`,
                            code: "YT",
                            value: "+262"
                        }, {
                            label: "Mexico",
                            flag: `${this.COUNTRYFLAG}/MX.svg`,
                            code: "MX",
                            value: "+52"
                        }, {
                            label: "Micronesia, Federated States of Micronesia",
                            flag: `${this.COUNTRYFLAG}/FM.svg`,
                            code: "FM",
                            value: "+691"
                        }, {
                            label: "Moldova",
                            flag: `${this.COUNTRYFLAG}/MD.svg`,
                            code: "MD",
                            value: "+373"
                        }, {
                            label: "Monaco",
                            flag: `${this.COUNTRYFLAG}/MC.svg`,
                            code: "MC",
                            value: "+377"
                        }, {
                            label: "Mongolia",
                            flag: `${this.COUNTRYFLAG}/MN.svg`,
                            code: "MN",
                            value: "+976"
                        }, {
                            label: "Montenegro",
                            flag: `${this.COUNTRYFLAG}/ME.svg`,
                            code: "ME",
                            value: "+382"
                        }, {
                            label: "Montserrat",
                            flag: `${this.COUNTRYFLAG}/MS.svg`,
                            code: "MS",
                            value: "+1664"
                        }, {
                            label: "Morocco",
                            flag: `${this.COUNTRYFLAG}/MA.svg`,
                            code: "MA",
                            value: "+212"
                        }, {
                            label: "Mozambique",
                            flag: `${this.COUNTRYFLAG}/MZ.svg`,
                            code: "MZ",
                            value: "+258"
                        }, {
                            label: "Myanmar",
                            flag: `${this.COUNTRYFLAG}/MM.svg`,
                            code: "MM",
                            value: "+95"
                        }, {
                            label: "Namibia",
                            flag: `${this.COUNTRYFLAG}/NA.svg`,
                            code: "NA",
                            value: "+264"
                        }, {
                            label: "Nauru",
                            flag: `${this.COUNTRYFLAG}/NR.svg`,
                            code: "NR",
                            value: "+674"
                        }, {
                            label: "Nepal",
                            flag: `${this.COUNTRYFLAG}/NP.svg`,
                            code: "NP",
                            value: "+977"
                        }, {
                            label: "Netherlands",
                            flag: `${this.COUNTRYFLAG}/NL.svg`,
                            code: "NL",
                            value: "+31"
                        }, {
                            label: "Netherlands Antilles",
                            flag: `${this.COUNTRYFLAG}/NL.svg`,
                            code: "AN",
                            value: "+599"
                        }, {
                            label: "New Caledonia",
                            flag: `${this.COUNTRYFLAG}/NC.svg`,
                            code: "NC",
                            value: "+687"
                        }, {
                            label: "New Zealand",
                            flag: `${this.COUNTRYFLAG}/NZ.svg`,
                            code: "NZ",
                            value: "+64"
                        }, {
                            label: "Nicaragua",
                            flag: `${this.COUNTRYFLAG}/NI.svg`,
                            code: "NI",
                            value: "+505"
                        }, {
                            label: "Niger",
                            flag: `${this.COUNTRYFLAG}/NE.svg`,
                            code: "NE",
                            value: "+227"
                        }, {
                            label: "Nigeria",
                            flag: `${this.COUNTRYFLAG}/NG.svg`,
                            code: "NG",
                            value: "+234"
                        }, {
                            label: "Niue",
                            flag: `${this.COUNTRYFLAG}/NU.svg`,
                            code: "NU",
                            value: "+683"
                        }, {
                            label: "Norfolk Island",
                            flag: `${this.COUNTRYFLAG}/NF.svg`,
                            code: "NF",
                            value: "+672"
                        }, {
                            label: "Northern Mariana Islands",
                            flag: `${this.COUNTRYFLAG}/MP.svg`,
                            code: "MP",
                            value: "+1670"
                        }, {
                            label: "Norway",
                            flag: `${this.COUNTRYFLAG}/NO.svg`,
                            code: "NO",
                            value: "+47"
                        }, {
                            label: "Oman",
                            flag: `${this.COUNTRYFLAG}/OM.svg`,
                            code: "OM",
                            value: "+968"
                        }, {
                            label: "Pakistan",
                            flag: `${this.COUNTRYFLAG}/PK.svg`,
                            code: "PK",
                            value: "+92"
                        }, {
                            label: "Palau",
                            flag: `${this.COUNTRYFLAG}/PW.svg`,
                            code: "PW",
                            value: "+680"
                        }, {
                            label: "Palestinian Territory, Occupied",
                            flag: `${this.COUNTRYFLAG}/PS.svg`,
                            code: "PS",
                            value: "+970"
                        }, {
                            label: "Panama",
                            flag: `${this.COUNTRYFLAG}/PA.svg`,
                            code: "PA",
                            value: "+507"
                        }, {
                            label: "Papua New Guinea",
                            flag: `${this.COUNTRYFLAG}/PG.svg`,
                            code: "PG",
                            value: "+675"
                        }, {
                            label: "Paraguay",
                            flag: `${this.COUNTRYFLAG}/PY.svg`,
                            code: "PY",
                            value: "+595"
                        }, {
                            label: "Peru",
                            flag: `${this.COUNTRYFLAG}/PE.svg`,
                            code: "PE",
                            value: "+51"
                        }, {
                            label: "Philippines",
                            flag: `${this.COUNTRYFLAG}/PH.svg`,
                            code: "PH",
                            value: "+63"
                        }, {
                            label: "Pitcairn",
                            flag: `${this.COUNTRYFLAG}/PN.svg`,
                            code: "PN",
                            value: "+64"
                        }, {
                            label: "Poland",
                            flag: `${this.COUNTRYFLAG}/PL.svg`,
                            code: "PL",
                            value: "+48"
                        }, {
                            label: "Portugal",
                            flag: `${this.COUNTRYFLAG}/PT.svg`,
                            code: "PT",
                            value: "+351"
                        }, {
                            label: "Puerto Rico",
                            flag: `${this.COUNTRYFLAG}/PR.svg`,
                            code: "PR",
                            value: "+1939"
                        }, {
                            label: "Qatar",
                            flag: `${this.COUNTRYFLAG}/QA.svg`,
                            code: "QA",
                            value: "+974"
                        }, {
                            label: "Romania",
                            flag: `${this.COUNTRYFLAG}/RO.svg`,
                            code: "RO",
                            value: "+40"
                        }, {
                            label: "Russia",
                            flag: `${this.COUNTRYFLAG}/RU.svg`,
                            code: "RU",
                            value: "+7"
                        }, {
                            label: "Rwanda",
                            flag: `${this.COUNTRYFLAG}/RW.svg`,
                            code: "RW",
                            value: "+250"
                        }, {
                            label: "Reunion",
                            flag: `${this.COUNTRYFLAG}/RE.svg`,
                            code: "RE",
                            value: "+262"
                        }, {
                            label: "Saint Barthelemy",
                            flag: `${this.COUNTRYFLAG}/BL.svg`,
                            code: "BL",
                            value: "+590"
                        }, {
                            label: "Saint Helena, Ascension and Tristan Da Cunha",
                            flag: `${this.COUNTRYFLAG}/SH.svg`,
                            code: "SH",
                            value: "+290"
                        }, {
                            label: "Saint Kitts and Nevis",
                            flag: `${this.COUNTRYFLAG}/KN.svg`,
                            code: "KN",
                            value: "+1869"
                        }, {
                            label: "Saint Lucia",
                            flag: `${this.COUNTRYFLAG}/LC.svg`,
                            code: "LC",
                            value: "+1758"
                        }, {
                            label: "Saint Martin",
                            flag: `${this.COUNTRYFLAG}/MF.svg`,
                            code: "MF",
                            value: "+590"
                        }, {
                            label: "Saint Pierre and Miquelon",
                            flag: `${this.COUNTRYFLAG}/PM.svg`,
                            code: "PM",
                            value: "+508"
                        }, {
                            label: "Saint Vincent and the Grenadines",
                            flag: `${this.COUNTRYFLAG}/VC.svg`,
                            code: "VC",
                            value: "+1784"
                        }, {
                            label: "Samoa",
                            flag: `${this.COUNTRYFLAG}/WS.svg`,
                            code: "WS",
                            value: "+685"
                        }, {
                            label: "San Marino",
                            flag: `${this.COUNTRYFLAG}/SM.svg`,
                            code: "SM",
                            value: "+378"
                        }, {
                            label: "Sao Tome and Principe",
                            flag: `${this.COUNTRYFLAG}/ST.svg`,
                            code: "ST",
                            value: "+239"
                        }, {
                            label: "Saudi Arabia",
                            flag: `${this.COUNTRYFLAG}/SA.svg`,
                            code: "SA",
                            value: "+966"
                        }, {
                            label: "Senegal",
                            flag: `${this.COUNTRYFLAG}/SN.svg`,
                            code: "SN",
                            value: "+221"
                        }, {
                            label: "Serbia",
                            flag: `${this.COUNTRYFLAG}/RS.svg`,
                            code: "RS",
                            value: "+381"
                        }, {
                            label: "Seychelles",
                            flag: `${this.COUNTRYFLAG}/SC.svg`,
                            code: "SC",
                            value: "+248"
                        }, {
                            label: "Sierra Leone",
                            flag: `${this.COUNTRYFLAG}/SL.svg`,
                            code: "SL",
                            value: "+232"
                        }, {
                            label: "Singapore",
                            flag: `${this.COUNTRYFLAG}/SG.svg`,
                            code: "SG",
                            value: "+65"
                        }, {
                            label: "Slovakia",
                            flag: `${this.COUNTRYFLAG}/SK.svg`,
                            code: "SK",
                            value: "+421"
                        }, {
                            label: "Slovenia",
                            flag: `${this.COUNTRYFLAG}/SI.svg`,
                            code: "SI",
                            value: "+386"
                        }, {
                            label: "Solomon Islands",
                            flag: `${this.COUNTRYFLAG}/SB.svg`,
                            code: "SB",
                            value: "+677"
                        }, {
                            label: "Somalia",
                            flag: `${this.COUNTRYFLAG}/SO.svg`,
                            code: "SO",
                            value: "+252"
                        }, {
                            label: "South Africa",
                            flag: `${this.COUNTRYFLAG}/ZA.svg`,
                            code: "ZA",
                            value: "+27"
                        }, {
                            label: "South Sudan",
                            flag: `${this.COUNTRYFLAG}/SS.svg`,
                            code: "SS",
                            value: "+211"
                        }, {
                            label: "South Georgia and the South Sandwich Islands",
                            flag: `${this.COUNTRYFLAG}/GS.svg`,
                            code: "GS",
                            value: "+500"
                        }, {
                            label: "Spain",
                            flag: `${this.COUNTRYFLAG}/ES.svg`,
                            code: "ES",
                            value: "+34"
                        }, {
                            label: "Sri Lanka",
                            flag: `${this.COUNTRYFLAG}/LK.svg`,
                            code: "LK",
                            value: "+94"
                        }, {
                            label: "Sudan",
                            flag: `${this.COUNTRYFLAG}/SD.svg`,
                            code: "SD",
                            value: "+249"
                        }, {
                            label: "Surilabel",
                            flag: `${this.COUNTRYFLAG}/SR.svg`,
                            code: "SR",
                            value: "+597"
                        }, {
                            label: "Svalbard and Jan Mayen",
                            flag: `${this.COUNTRYFLAG}/SJ.svg`,
                            code: "SJ",
                            value: "+47"
                        }, {
                            label: "Eswatini",
                            flag: `${this.COUNTRYFLAG}/SZ.svg`,
                            code: "SZ",
                            value: "+268"
                        }, {
                            label: "Sweden",
                            flag: `${this.COUNTRYFLAG}/SE.svg`,
                            code: "SE",
                            value: "+46"
                        }, {
                            label: "Switzerland",
                            flag: `${this.COUNTRYFLAG}/CH.svg`,
                            code: "CH",
                            value: "+41"
                        }, {
                            label: "Syrian Arab Republic",
                            flag: `${this.COUNTRYFLAG}/SY.svg`,
                            code: "SY",
                            value: "+963"
                        }, {
                            label: "Taiwan",
                            flag: `${this.COUNTRYFLAG}/TW.svg`,
                            code: "TW",
                            value: "+886"
                        }, {
                            label: "Tajikistan",
                            flag: `${this.COUNTRYFLAG}/TJ.svg`,
                            code: "TJ",
                            value: "+992"
                        }, {
                            label: "Tanzania, United Republic of Tanzania",
                            flag: `${this.COUNTRYFLAG}/TZ.svg`,
                            code: "TZ",
                            value: "+255"
                        }, {
                            label: "Thailand",
                            flag: `${this.COUNTRYFLAG}/TH.svg`,
                            code: "TH",
                            value: "+66"
                        }, {
                            label: "Timor-Leste",
                            flag: `${this.COUNTRYFLAG}/TL.svg`,
                            code: "TL",
                            value: "+670"
                        }, {
                            label: "Togo",
                            flag: `${this.COUNTRYFLAG}/TG.svg`,
                            code: "TG",
                            value: "+228"
                        }, {
                            label: "Tokelau",
                            flag: `${this.COUNTRYFLAG}/TK.svg`,
                            code: "TK",
                            value: "+690"
                        }, {
                            label: "Tonga",
                            flag: `${this.COUNTRYFLAG}/TO.svg`,
                            code: "TO",
                            value: "+676"
                        }, {
                            label: "Trinidad and Tobago",
                            flag: `${this.COUNTRYFLAG}/TT.svg`,
                            code: "TT",
                            value: "+1868"
                        }, {
                            label: "Tunisia",
                            flag: `${this.COUNTRYFLAG}/TN.svg`,
                            code: "TN",
                            value: "+216"
                        }, {
                            label: "Turkey",
                            flag: `${this.COUNTRYFLAG}/TR.svg`,
                            code: "TR",
                            value: "+90"
                        }, {
                            label: "Turkmenistan",
                            flag: `${this.COUNTRYFLAG}/TM.svg`,
                            code: "TM",
                            value: "+993"
                        }, {
                            label: "Turks and Caicos Islands",
                            flag: `${this.COUNTRYFLAG}/TC.svg`,
                            code: "TC",
                            value: "+1649"
                        }, {
                            label: "Tuvalu",
                            flag: `${this.COUNTRYFLAG}/TV.svg`,
                            code: "TV",
                            value: "+688"
                        }, {
                            label: "Uganda",
                            flag: `${this.COUNTRYFLAG}/UG.svg`,
                            code: "UG",
                            value: "+256"
                        }, {
                            label: "Ukraine",
                            flag: `${this.COUNTRYFLAG}/UA.svg`,
                            code: "UA",
                            value: "+380"
                        }, {
                            label: "United Arab Emirates",
                            flag: `${this.COUNTRYFLAG}/AE.svg`,
                            code: "AE",
                            value: "+971"
                        }, {
                            label: "United Kingdom",
                            flag: `${this.COUNTRYFLAG}/GB.svg`,
                            code: "GB",
                            value: "+44"
                        }, {
                            label: "United States",
                            flag: `${this.COUNTRYFLAG}/US.svg`,
                            code: "US",
                            value: "+1"
                        }, {
                            label: "Uruguay",
                            flag: `${this.COUNTRYFLAG}/UY.svg`,
                            code: "UY",
                            value: "+598"
                        }, {
                            label: "Uzbekistan",
                            flag: `${this.COUNTRYFLAG}/UZ.svg`,
                            code: "UZ",
                            value: "+998"
                        }, {
                            label: "Vanuatu",
                            flag: `${this.COUNTRYFLAG}/VU.svg`,
                            code: "VU",
                            value: "+678"
                        }, {
                            label: "Venezuela, Bolivarian Republic of Venezuela",
                            flag: `${this.COUNTRYFLAG}/VE.svg`,
                            code: "VE",
                            value: "+58"
                        }, {
                            label: "Vietnam",
                            flag: `${this.COUNTRYFLAG}/VN.svg`,
                            code: "VN",
                            value: "+84"
                        }, {
                            label: "Virgin Islands, British",
                            flag: `${this.COUNTRYFLAG}/VG.svg`,
                            code: "VG",
                            value: "+1284"
                        }, {
                            label: "Virgin Islands, U.S.",
                            flag: `${this.COUNTRYFLAG}/VI.svg`,
                            code: "VI",
                            value: "+1340"
                        }, {
                            label: "Wallis and Futuna",
                            flag: `${this.COUNTRYFLAG}/WF.svg`,
                            code: "WF",
                            value: "+681"
                        }, {
                            label: "Yemen",
                            flag: `${this.COUNTRYFLAG}/YE.svg`,
                            code: "YE",
                            value: "+967"
                        }, {
                            label: "Zambia",
                            flag: `${this.COUNTRYFLAG}/ZA.svg`,
                            code: "ZM",
                            value: "+260"
                        }, {
                            label: "Zimbabwe",
                            flag: `${this.COUNTRYFLAG}/ZW.svg`,
                            code: "ZW",
                            value: "+263"
                        }],
                        this.schoolDetails = JSON.parse(localStorage.getItem("school_details")),
                        this.manualChange = new x.X([]),
                        this.currentStatus = this.manualChange.asObservable()
                }
                options() {
                    return {
                        headers: new n.WM({
                            "Content-Type": "application/json",
                            Authorization: this.userData.token
                        })
                    }
                }
                options2() {
                    return {
                        headers: new n.WM({
                            Authorization: this.userData.token
                        })
                    }
                }
                getcountryList() {
                    return this.countryList
                }
                customFieldsWithBranchnSchool(c, o, t) {
                    return this.httpClient.get(this.api + "/branch/" + o + "/school/" + this.getSclId() + "/studentcustomfields", this.loginservice.options(c))
                }
                getAllCustomFields(c, o, t) {
                    const s = [];
                    return o.map(a => {
                        s.push(this.customFieldsWithBranchnSchool(c, a.branch_id, t))
                    }
                    ),
                        (0,
                            C.D)(s)
                }
                getGenericMandatoryFields(c) {
                    return this.userData = c,
                        this.httpClient.get(this.api + "/users/getprofile?s_id=" + c.student_ppa_profiles[0].s_profile_id + "&school_id=" + this.getSclId(), this.loginservice.options(this.userData))
                }
                getSclId() {
                    return JSON.parse(localStorage.getItem("school_details")) && JSON.parse(localStorage.getItem("school_details")).school_id ? JSON.parse(localStorage.getItem("school_details")).school_id : ""
                }
                formatDob(c) {
                    return c && c.length > 10 ? c.substring(0, 10) : c
                }
                getFormValues(c, o) {
                    if (0 !== Object.entries(this.fValue).length && this.fValue.constructor === Object || this.formData.constructor === Object) {
                        let t;
                        (this.fValue.name || this.formData.name) && (t = this.fValue.name ? this.fValue.name : this.formData.name,
                            t = t.split("$"));
                        for (const s of c)
                            if ("firstname" !== s.name && "lastname" !== s.name || !t) {
                                if ("profile_pic" === s)
                                    return this.fValue[s] ? this.fValue[s] : this.formData[s];
                                if ("country_code" === s)
                                    return this.fValue[s] ? this.fValue[s] : this.formData && this.formData.phone_number ? this.formData.phone_number.code : "";
                                "dob" === s.name ? (s.value = this.formatDob(this.fValue[s.name] ? this.fValue[s.name] : this.formData[s.name]),
                                    s.disabled = !(!this.formData[s.name] || "" == this.formData[s.name])) : "phone" === s.name ? (s.value = this.fValue[s.name] ? this.fValue[s.name] : this.formData[s.name],
                                        s.disabled = !!(this.formData[s.name] && this.formData && this.formData.phone_number && "" !== this.formData[s.name])) : o ? "current_backlogs" === s.name ? (s.value = this.fValue[s.name] || 0 === this.fValue[s.name] ? this.fValue[s.name] : this.formData.student_ppa_profiles[0][s.name] || 0 === this.formData.student_ppa_profiles[0][s.name] ? this.formData.student_ppa_profiles[0][s.name] : "",
                                            s.disabled = !(!this.formData.student_ppa_profiles[0][s.name] && 0 !== this.formData.student_ppa_profiles[0][s.name] || "" === this.formData.student_ppa_profiles[0][s.name])) : "backlog_history" === s.name || "interested_for_placement" === s.name ? (s.value = !0 === this.fValue[s.name] || !1 === this.fValue[s.name] ? this.fValue[s.name] : this.formData.student_ppa_profiles[0][s.name],
                                                s.disabled = !![!0, !1].includes(this.formData.student_ppa_profiles[0][s.name])) : (s.value = this.fValue[s.name] ? this.fValue[s.name] : this.formData.student_ppa_profiles[0][s.name],
                                                    s.disabled = !!this.formData.student_ppa_profiles[0][s.name]) : (s.value = this.fValue[s.name] ? this.fValue[s.name] : this.formData[s.name],
                                                        s.disabled = !(!this.formData[s.name] || "" == this.formData[s.name]))
                            } else {
                                s.value = "firstname" === s.name ? t[0] : t[1];
                                const a = this.formData.name ? this.formData.name.split("$") : "";
                                "firstname" === s.name && (s.disabled = !(!a || !a[0] || "" === a[0])),
                                    "lastname" === s.name && (s.disabled = !(!a || !a[1] || "" === a[1]))
                            }
                    }
                }
                setDegreeValue(c) {
                    this.formData = JSON.parse(localStorage.getItem("formData"));
                    const o = [];
                    if (this.degreeValue.length)
                        for (let s = 0; s < c.length; s++) {
                            const a = "is_" + c[s].key.replace("_marks", "") + "_percentage";
                            for (let r = 0; r < this.degreeValue.length; r++)
                                if (c[s].value === this.degreeValue[r].degree) {
                                    const p = {
                                        degree: c[s].value,
                                        detail_type: null,
                                        marks: this.degreeValue[r].marks ? this.degreeValue[r].marks : this.formData.student_ppa_profiles[0][c[s].key],
                                        label: c[s].value,
                                        disabled: !!this.formData.student_ppa_profiles[0][c[s].key],
                                        not: !!this.degreeValue[r].not,
                                        mandatory: this.degreeValue[r].mandatory,
                                        error: !1
                                    };
                                    p.detail_type = !p.marks && 0 !== p.marks || "NA" === p.marks ? null : this.degreeValue[r].detail_type ? this.degreeValue[r].detail_type : this.formData.student_ppa_profiles[0][a],
                                        o.push(p)
                                } else if (this.formData.student_ppa_profiles[0][c[s].key]) {
                                    const p = {
                                        degree: c[s].value,
                                        detail_type: null,
                                        marks: this.formData.student_ppa_profiles[0][c[s].key],
                                        label: c[s].value,
                                        disabled: !!this.formData.student_ppa_profiles[0][c[s].key],
                                        not: !!this.degreeValue[r].not,
                                        mandatory: this.degreeValue[r].mandatory,
                                        error: !1
                                    };
                                    p.detail_type = !p.marks && 0 !== p.marks || "NA" === p.marks ? null : this.formData.student_ppa_profiles[0][a],
                                        o.push(p)
                                }
                        }
                    else
                        for (const s of c) {
                            const a = "is_" + s.key.replace("_marks", "") + "_percentage";
                            this.fValue[s.key] = this.formData.student_ppa_profiles[0][s.key],
                                this.fValue[a] = this.formData.student_ppa_profiles[0][a];
                            const r = {
                                degree: s.value,
                                detail_type: null,
                                marks: this.formData.student_ppa_profiles[0][s.key],
                                label: s.value,
                                disabled: !!this.formData.student_ppa_profiles[0][s.key],
                                not: !1
                            };
                            r.detail_type = !r.marks && 0 !== r.marks || "NA" === r.marks ? null : this.formData.student_ppa_profiles[0][a],
                                o.push(r)
                        }
                    this.degreeValue = void 0;
                    const t = o.filter((s, a, r) => r.findIndex(p => p.degree === s.degree) === a);
                    this.degreeValue = [...t]
                }
                setDegreeValueOnNext(c) {
                    this.degreeValue = void 0,
                        this.degreeValue = c
                }
                getStudentPermissionList(c) {
                    return this.httpClient.get(this.api + "/student/permissionlist", this.loginservice.options(c))
                }
                blockSideNavRedirection() {
                    this.globalService.blockRedirection(),
                        this.noRedirect.next({
                            status: !0
                        })
                }
                allowSideNavRedirection() {
                    localStorage.removeItem("noRedirect"),
                        this.noRedirect.next({
                            status: !1
                        })
                }
                unfilledBasicFilled(c) {
                    const o = JSON.parse(localStorage.getItem("basicFiels"))
                        , t = o.find(f => "First Name" === f.label)
                        , s = o.find(f => "Last Name" === f.label)
                        , a = o.find(f => "Phone No" === f.label)
                        , r = o.find(f => "Gender" === f.label)
                        , p = o.find(f => "dob" === f.label)
                        , d = o.find(f => "Profile Picture" === f.label)
                        , u = JSON.parse(localStorage.getItem("ppaData"));
                    let v = null
                        , y = null;
                    if (c && null !== c.name) {
                        const f = c.name.split("$");
                        f && f.length && f[0] && (v = f[0]),
                            f && f.length && f[1] && (y = f[1])
                    }
                    return u.verification_status >= 2 ? !!(t.value && null === v || s.value && null === y || p.value && null === c.dob || p.value && !c.dob || r.value && !c.gender || a.value && (null === c.phone_number || null === c.phone) || d.value && (!c.profile_pic || "https://s3.amazonaws.com/exams-media-stage/assets/common-images/profile-default.jpg" === c.profile_pic)) : !!(t.hide && null === v || s.hide && null === y || p.hide && null === c.dob || p.hide && !c.dob || r.hide && !c.gender || a.hide && (null === c.phone_number || null === c.phone) || d.hide && (!c.profile_pic || "https://s3.amazonaws.com/exams-media-stage/assets/common-images/profile-default.jpg" === c.profile_pic))
                }
                checkRedirect(c, o, t, s, a) {
                    const p = JSON.parse(localStorage.getItem("ppaData")).submit_status;
                    this.resetVariable(),
                        this.formData = s,
                        this.basicFields = c.school_student_custom_fields.basic_info_field,
                        this.schoolFields = c.school_student_custom_fields.custom_fields;
                    const d = o
                        , u = s.student_custom_fields;
                    return localStorage.setItem("basicFiels", JSON.stringify(c.school_student_custom_fields.basic_info_field)),
                        this.unfilledBasicFilled(c) && 0 === p ? (this.personalData = !0,
                            this.acadDetails = this.checkAcad(c, "check", a),
                            this.isFilled.acad = !this.acadDetails,
                            d && d.length > 0 && void 0 !== o[0] ? this.getCustomArray(u, d, t).subscribe(v => {
                                const y = v.dataToFIll && v.dataToFIll.length && v.dataToFIll.find(f => f.length);
                                if ((v && v.isCustom || this.showAcademic) && y)
                                    return v && v.mandatoryUnfilled || (this.isFilled.add = !0),
                                        this.showAdditional = !0,
                                        localStorage.setItem("customFieldsValue", JSON.stringify(v.dataToFIll)),
                                        this.customData = !0,
                                        this.blockSideNavRedirection(),
                                        (0,
                                            O.of)("personal");
                                this.customData = !1
                            }
                            ) : this.customData = !1,
                            this.pers = !0,
                            this.blockSideNavRedirection(),
                            (0,
                                O.of)("personal")) : this.checkAcad(c, void 0, a) && 0 === p ? (this.isFilled.per = !0,
                                    this.acadDetails = !0,
                                    d && d.length > 0 && void 0 !== o[0] ? this.getCustomArray(u, d, t).subscribe(v => {
                                        const y = v.dataToFIll && v.dataToFIll.length && v.dataToFIll.find(f => f.length);
                                        if (v && v.isCustom && y)
                                            return v.mandatoryUnfilled || (this.isFilled.add = !0),
                                                this.showAdditional = !0,
                                                localStorage.setItem("customFieldsValue", JSON.stringify(v.dataToFIll)),
                                                this.customData = !0,
                                                this.blockSideNavRedirection(),
                                                (0,
                                                    O.of)("acad");
                                        this.customData = !1
                                    }
                                    ) : this.customData = !1,
                                    this.blockSideNavRedirection(),
                                    (0,
                                        O.of)("acad")) : (this.isFilled.per = !0,
                                            this.isFilled.acad = !0,
                                            this.getCustomArray(u, d, t).subscribe(v => {
                                                const y = v.dataToFIll && v.dataToFIll.length && v.dataToFIll.find(E => E.length)
                                                    , f = JSON.parse(localStorage.getItem("ppaData"));
                                                return v.isCustom && this.showAcademic && this.checkAcad(c, "check", a) && y || v.mandatoryUnfilled || f.verification_status < 2 && v.isCustom ? (this.showAdditional = !0,
                                                    localStorage.setItem("customFieldsValue", JSON.stringify(v.dataToFIll)),
                                                    this.customData = !0,
                                                    (0,
                                                        O.of)(!0)) : (this.isFilled.add = !0,
                                                            this.customData = !1,
                                                            (0,
                                                                O.of)(!1))
                                            }
                                            ),
                                            !0 === this.customData ? (this.blockSideNavRedirection(),
                                                (0,
                                                    O.of)("custom")) : (this.isFilled.add = !0,
                                                        (0,
                                                            O.of)(!1)))
                }
                checkAcad(c, o, t) {
                    let a, s = c.school_student_custom_fields.basic_info_field;
                    const r = c.student_ppa_profiles[0];
                    if (!(c && c.student_ppa_profiles[0] && c.student_ppa_profiles[0].verification_status))
                        return "";
                    this.vStatus.next({
                        verification_status: c.student_ppa_profiles[0].verification_status
                    });
                    const d = t.purpose;
                    let u = !0;
                    const v = [];
                    let y;
                    if (y = "Placement Process App" === d && this.schoolDetails.admission_report_permission.success ? ["10th Percentage", "12th Percentage", "Diploma Percentage", "UG CGPA", "PG CGPA", "SSLC Board", "SSLC District", "SSLC State", "HSC Board", "HSC District", "HSC State", "Registration Number", "Roll No", "Year of Admission", "Backlogs History", "Current Backlogs", "Interested for Placement", "Work Experience"] : ["10th Percentage", "12th Percentage", "Diploma Percentage", "UG CGPA", "PG CGPA", "Registration Number", "Roll No", "Backlogs History", "Current Backlogs", "Interested for Placement", "Work Experience"],
                        a = c.school_student_custom_fields.basic_info_field.filter(f => !y.includes(f.label) && "Email ID" !== f.label),
                        this.showPersonal = !!a.find(f => !0 === f.hide),
                        s = c.school_student_custom_fields.basic_info_field.filter(f => y.includes(f.label)),
                        this.showAcademic = !!s.find(f => !0 === f.hide),
                        s.forEach(f => {
                            "10th Percentage" === f.label ? v.push(this.validate(r, "tenth_marks", f.value, f.hide)) : "12th Percentage" === f.label ? v.push(this.validate(r, "twelfth_marks", f.value, f.hide)) : "Diploma Percentage" === f.label ? v.push(this.validate(r, "diploma_marks", f.value, f.hide)) : "UG CGPA" === f.label ? v.push(this.validate(r, "ug_marks", f.value, f.hide)) : "PG CGPA" === f.label ? v.push(this.validate(r, "pg_marks", f.value, f.hide)) : "Registration Number" === f.label || "Roll No" === f.label ? v.push(this.validate(r, "roll_no", f.value, f.hide)) : "Backlogs History" === f.label ? v.push(this.validate(r, "backlog_history", f.value, f.hide, !0)) : "Current Backlogs" === f.label ? v.push(this.validate(r, "current_backlogs", f.value, f.hide, !1)) : "Interested for Placement" === f.label ? v.push(this.validate(r, "interested_for_placement", f.value, f.hide, !0)) : "Placement Process App" === d && this.schoolDetails.admission_report_permission.success && "SSLC Board" === f.label ? v.push(this.validate(r, "sslc_board", f.value, f.hide)) : "Placement Process App" === d && this.schoolDetails.admission_report_permission.success && "SSLC District" === f.label ? v.push(this.validate(r, "sslc_district", f.value, f.hide)) : "Placement Process App" === d && this.schoolDetails.admission_report_permission.success && "SSLC State" === f.label ? v.push(this.validate(r, "sslc_state", f.value, f.hide)) : "Placement Process App" === d && this.schoolDetails.admission_report_permission.success && "HSC Board" === f.label ? v.push(this.validate(r, "hsc_board", f.value, f.hide)) : "Placement Process App" === d && this.schoolDetails.admission_report_permission.success && "HSC District" === f.label ? v.push(this.validate(r, "hsc_district", f.value, f.hide)) : "Placement Process App" === d && this.schoolDetails.admission_report_permission.success && "HSC State" === f.label ? v.push(this.validate(r, "hsc_state", f.value, f.hide)) : "Placement Process App" === d && this.schoolDetails.admission_report_permission.success && "Year of Admission" === f.label ? v.push(this.validate(r, "year_of_admission", f.value, f.hide)) : "Work Experience" === f.label && v.push(this.validate(r, "work_experience", f.value, f.hide))
                        }
                        ),
                        "Recruitment" === d) {
                        let f = this.schoolDetails && this.schoolDetails.schools_metadata && this.schoolDetails.schools_metadata.enable_degree_list;
                        v.push(this.validate(r, "degree", f, !1)),
                            v.push(this.validate(r, "degree", f, !1)) && f && (this.showAcademic = !0)
                    }
                    return u = v.findIndex(f => !1 === f) > -1,
                        u
                }
                validate(c, o, t, s, a) {
                    const r = JSON.parse(localStorage.getItem("ppaData"));
                    return !((t || s && r.verification_status < 2) && (a ? !0 !== c[o] && !1 !== c[o] || "NA" === c[o] : !c[o] && 0 !== c[o] || "NA" === c[o]))
                }
                getCustomArray(c, o, t) {
                    const s = [];
                    let a = !1
                        , r = !1;
                    if (c) {
                        for (let d = 0; d < t.length; d++)
                            if (c.find(u => u.branch_id === t[d].branch_id)) {
                                for (let u = 0; u < c.length; u++)
                                    if (t[d].branch_id === c[u].branch_id)
                                        if (o[d] && o[d].length > 0) {
                                            for (let y = 0; y < o[d].length; y++)
                                                if (c[u] && -1 === c[u].fields.findIndex(f => f.cf_id === o[d][y].cf_id))
                                                    !o[d][y].hide && "dob" !== o[d][y].type && !o[d][y].archive && (s[d] ? s[d].push(o[d][y]) : s.push([o[d][y]]),
                                                        a = !0,
                                                        o[d][y].mandatory && (r = !0));
                                                else if (!o[d][y].hide && "dob" !== o[d][y].type && !o[d][y].archive)
                                                    if (o[d][y].mandatory) {
                                                        const f = c[u].fields.findIndex(E => E.cf_id === o[d][y].cf_id);
                                                        if (c[u].fields[f].answer && 0 === c[u].fields[f].answer.length || [!0, !1, void 0, "", null].includes(c[u].fields[f].answer) || "policy" === c[u].fields[f].type && c[u].fields[f].answer && new Date(c[u].fields[f].answer) < new Date(o[d][y].date_modified))
                                                            s[d] ? s[d].push(o[d][y]) : s.push([o[d][y]]),
                                                                a = !0,
                                                                r = !0;
                                                        else {
                                                            const E = o[d][y];
                                                            E.answer = c[u].fields[f].answer,
                                                                E.disable = !0,
                                                                s[d] ? s[d].push(E) : s.push([E]),
                                                                a = !0
                                                        }
                                                    } else {
                                                        const f = c[u].fields.findIndex(E => E.cf_id === o[d][y].cf_id);
                                                        if (c[u].fields[f].answer && 0 === c[u].fields[f].answer.length || [!0, !1, void 0, "", null].includes(c[u].fields[f].answer))
                                                            s[d] ? s[d].push(o[d][y]) : s.push([o[d][y]]);
                                                        else {
                                                            const E = o[d][y];
                                                            E.answer = c[u].fields[f].answer,
                                                                E.disable = !0,
                                                                s[d] ? s[d].push(E) : s.push([E]),
                                                                a = !0
                                                        }
                                                    }
                                            s[d] || (s[d] = [])
                                        } else
                                            s[d] || (s[d] = [])
                            } else if (o[d])
                                for (let u = 0; u < o[d].length - 1; u++)
                                    !o[d][u].hide && "dob" !== o[d][u].type && !o[d][u].archive && (s[d] ? s[d].push(o[d][u]) : s.push([o[d][u]]),
                                        a = !0,
                                        o[d][u].mandatory && (r = !0))
                    } else
                        for (let d = 0; d < t.length; d++)
                            if (o[d]) {
                                for (let u = 0; u < o[d].length - 1; u++)
                                    !o[d][u].hide && "dob" !== o[d][u].type && !o[d][u].archive && (s[d] ? s[d].push(o[d][u]) : s.push([o[d][u]]),
                                        a = !0,
                                        o[d][u].mandatory && (r = !0));
                                s[d] || (s[d] = [])
                            }
                    return (0,
                        O.of)({
                            dataToFIll: s,
                            isCustom: a,
                            mandatoryUnfilled: r
                        })
                }
                getAllBranchFields(...c) {
                    let o = []
                        , t = [];
                    for (const s of this.userData.school_branch_department_users)
                        t.push(this.customFieldsWithBranchnSchool(this.userData, s.branch_id, this.school_Id).subscribe(a => {
                            o.push(a.studentCustomFields.student_custom_fields.fields)
                        }
                        ));
                    return (0,
                        C.D)(t)
                }
                generateCustomFieldsForDB(c) {
                    const o = JSON.parse(localStorage.getItem("token"))
                        , t = JSON.parse(localStorage.getItem("formData"))
                        , s = o.school_branch_department_users.map(p => p.branch_id)
                        , a = t.student_custom_fields
                        , r = [];
                    return s.forEach((p, d) => {
                        const u = a ? a.find(R => R.branch_id === p) : null
                            , v = c ? c.find(R => R.branch_id.value === p) : null;
                        let y;
                        v && (y = {},
                            y.fields = v.fields,
                            y.branch_id = p);
                        const f = this.schoolFields.find(R => R.branch_id === p)
                            , E = {
                                branch_id: p,
                                fields: []
                            };
                        f && f.fields.length && f.fields.forEach(R => {
                            let A, B;
                            const b = R;
                            y && y.fields && y.fields.length && y.fields.find(U => U.cf_id === R.cf_id) ? B = y.fields.find("resume" === R.type ? U => U.type === R.type : U => U.cf_id === R.cf_id) : u && u.fields && u.fields.length && u.fields.find(U => U.cf_id === R.cf_id) && (A = u.fields.find("resume" === R.type ? U => U.type === R.type : U => U.cf_id === R.cf_id)),
                                B && ![!0, !1, void 0, null, ""].includes(B.answer) ? (b.answer = B.answer,
                                    E.fields.push(b)) : A && ![!0, !1, void 0, null, ""].includes(A.answer) && (b.answer = A.answer,
                                        E.fields.push(b))
                        }
                        ),
                            E && E.fields && E.fields.length && r.push(E)
                    }
                    ),
                        r
                }
                saveData(c) {
                    return this.httpClient.post(this.api + "/v2/users/update", c, this.options2())
                }
                uploadFile(c, o, t, s, a) {
                    return new Promise((r, p) => {
                        let d, u, v;
                        if (a && "pdf" === o) {
                            const f = this.branchOrder.length > 0 && this.branchOrder[this.activeBranch - 1] && this.branchOrder[this.activeBranch - 1].value ? this.branchOrder[this.activeBranch - 1].value : JSON.parse(localStorage.getItem("branches"))[this.activeBranch - 1].value;
                            u = t + this.school_Id + "/" + this.userData.email + "-" + f + "-" + this.userData.user_id + "-resume.pdf",
                                d = "application/pdf"
                        }
                        const y = {
                            file_name: u,
                            type: d,
                            Bucket_name: this.globalService.assets_bucket
                        };
                        this.loader.next(!0),
                            "pdf" === o ? this.globalService.pdfFileValidator(c).then(f => {
                                f.valid ? this.getSignedUrl(y).subscribe(E => {
                                    this.uploadUsingSignedUrl(E.data.url, c).subscribe(R => {
                                        this.loader.next(!1),
                                            R && 200 === R.status ? (v = e.N.s3Objectstudentassets + y.file_name,
                                                r(v)) : r(!1)
                                    }
                                        , R => {
                                            this.loader.next(!1)
                                        }
                                    )
                                }
                                    , E => {
                                        this.loader.next(!1)
                                    }
                                ) : (this.globalService.commonGrowl.next({
                                    severity: "error",
                                    summary: "Validation failed",
                                    detail: "The PDF is invalid or potentially malicious"
                                }),
                                    r(!1))
                            }
                            ) : this.getSignedUrl(y).subscribe(f => {
                                this.uploadUsingSignedUrl(f.data.url, c).subscribe(E => {
                                    this.loader.next(!1),
                                        E && 200 === E.status ? (v = e.N.s3Objectstudentassets + y.file_name,
                                            r(v)) : r(!1)
                                }
                                    , E => {
                                        this.loader.next(!1)
                                    }
                                )
                            }
                                , f => {
                                    this.loader.next(!1)
                                }
                            )
                    }
                    )
                }
                updateToken(c) {
                    const o = JSON.parse(localStorage.getItem("token"))
                        , t = JSON.parse(localStorage.getItem("ppaData"));
                    c && c.profile_pic && c.profile_pic !== e.N.s3Objectstudentassets + "assets/common-images/profile-default.jpg" && (o.profile_pic = c.profile_pic),
                        c && c.name && c.name.length && (o.name = c.name),
                        c && c.gender && (o.gender = c.gender),
                        c && c.dob && (o.dob = c.dob),
                        c && c.roll_no && (o.roll_no = c.roll_no,
                            t.roll_no = c.roll_no),
                        c && c.degree && (t.degree = c.degree,
                            o.student_ppa_profiles[0].degree = c.degree),
                        c && c.phone && c.country_code && (o.phone = c.phone,
                            o.phone_number = {
                                code: c.country_code,
                                number: c.phone
                            }),
                        c && c.sslc_board && (t.sslc_board = c.sslc_board,
                            o.student_ppa_profiles[0].sslc_board = c.sslc_board),
                        c && c.sslc_district && (t.sslc_district = c.sslc_district,
                            o.student_ppa_profiles[0].sslc_district = c.sslc_district),
                        c && c.sslc_state && (t.sslc_state = c.sslc_state,
                            o.student_ppa_profiles[0].sslc_state = c.sslc_state),
                        c && c.hsc_board && (t.hsc_board = c.hsc_board,
                            o.student_ppa_profiles[0].hsc_board = c.hsc_board),
                        c && c.hsc_district && (t.hsc_district = c.hsc_district,
                            o.student_ppa_profiles[0].hsc_district = c.hsc_district),
                        c && c.hsc_state && (t.hsc_state = c.hsc_state,
                            o.student_ppa_profiles[0].hsc_state = c.hsc_state),
                        c && c.year_of_admission && (t.year_of_admission = c.year_of_admission,
                            o.student_ppa_profiles[0].year_of_admission = c.year_of_admission),
                        localStorage.removeItem("ppaData"),
                        localStorage.setItem("ppaData", JSON.stringify(t)),
                        localStorage.removeItem("token"),
                        localStorage.setItem("token", JSON.stringify(o))
                }
                resetVariable() {
                    this.fValue = {},
                        this.branchOrder = [],
                        this.customFieldsValue = [],
                        this.basicFields = [],
                        this.degreeValue = [],
                        this.isFilled = {},
                        this.activeBranch = 1,
                        this.acadDetails = !1,
                        this.showAdditional = !1,
                        this.personalData = !1,
                        this.customData = !1,
                        this.nextAddData = []
                }
                fillAddData(c, o) {
                    this.nextAddData[c - 1] ? this.nextAddData[c - 1] = o : this.nextAddData.push(o)
                }
                getSignedUrl(c) {
                    return this.httpClient.post(this.api + "/getsignedurl", c, this.options())
                }
                getSignedUrlForAnyType(c) {
                    return this.httpClient.post(this.api + "/get_signedurl_all", c, this.options())
                }
                getTaSignedUrl(c) {
                    return this.httpClient.post(this.api + "/get_ta_signed_url", c, this.options())
                }
                uploadUsingSignedUrl(c, o) {
                    return this.httpClient.put(c, o, {
                        observe: "response"
                    })
                }
                uploadUsingSignedUrlWithOptions(c, o) {
                    return this.httpClient.put(c, o, {
                        observe: "response"
                    })
                }
                studentCustomFields(c, o) {
                    return this.httpClient.get(this.api + "/branch/" + c + "/studentcustomfields/" + o, this.loginservice.options(null))
                }
                schoolCustomFields(c, o) {
                    return this.httpClient.get(this.api + "/branch/" + c + "/school/" + o + "/studentcustomfields", this.loginservice.options(null)).pipe((0,
                        D.K)(this.loginservice.handleError.bind(this)))
                }
                publicProfileCustomFields(c) {
                    return this.httpClient.post(this.api + "/publicprofile/studentcustomfields", c, this.loginservice.options(null))
                }
                getPpaProfile(c) {
                    return this.httpClient.get(this.api + "/users/getprofile?s_id=" + c + "&school_id=" + this.getSclId(), this.loginservice.options(null))
                }
                updateRollNo(c) {
                    return this.httpClient.post(this.api + "/users/updaterollno", c, this.loginservice.options(null))
                }
                changesRequest(c) {
                    return this.httpClient.post(this.api + "/users/requestchanges", c, this.loginservice.options(null))
                }
                profilePublish(c) {
                    return this.httpClient.put(this.api + "/users/ppapublish", c, this.options())
                }
                changePassword(c, o) {
                    return this.httpClient.post(this.api + "/users/reset", c, this.loginservice.options(null))
                }
                generateOtp(c) {
                    return this.httpClient.post(this.api + "/users/generateOtp", c, this.loginservice.options(null))
                }
                sendOtp(c) {
                    return this.httpClient.post(this.api + "/users/sendOtp", c, this.loginservice.options(null))
                }
                verifyOtp(c) {
                    return this.httpClient.post(this.api + "/users/verifyOtp", c, this.loginservice.options(null))
                }
                validateOtp(c) {
                    return this.httpClient.post(this.api + "/users/validateOtp", c, this.loginservice.options(null))
                }
                reasonReject(c) {
                    return this.httpClient.post(this.api + "/users/reasonreject", c, this.loginservice.options(null))
                }
                changeEmailID(c) {
                    return c.school_code = this.schoolCode,
                        this.httpClient.post(this.api + "/users/resetEmailId", c, this.loginservice.options(null))
                }
                getEmailFromId(c) {
                    return this.httpClient.post(this.api + "/publicprofile/getPublicProfileEmail", c, this.loginservice.options(null))
                }
                isManuallyChanged(c) {
                    this.manualChange.next(c)
                }
                validatePdf(c) {
                    return this.httpClient.post(this.pdfApi, c)
                }
            }
            return g.\u0275fac = function (c) {
                return new (c || g)(I.LFG(n.eN), I.LFG(N.r), I.LFG(T.U))
            }
                ,
                g.\u0275prov = I.Yz7({
                    token: g,
                    factory: g.\u0275fac,
                    providedIn: "root"
                }),
                g
        }
        )()
    }
    ,
    6476: (G, $, i) => {
        "use strict";
        i.d($, {
            V: () => x
        });
        var n = i(9808)
            , e = i(5e3);
        let x = (() => {
            class C {
            }
            return C.\u0275fac = function (D) {
                return new (D || C)
            }
                ,
                C.\u0275mod = e.oAB({
                    type: C
                }),
                C.\u0275inj = e.cJS({
                    imports: [[n.ez]]
                }),
                C
        }
        )()
    }
    ,
    910: (G, $, i) => {
        "use strict";
        i.d($, {
            N: () => N
        });
        var n = i(2340)
            , e = i(1135)
            , x = i(262)
            , C = i(5e3)
            , O = i(520)
            , D = i(7465)
            , M = i(4120)
            , I = i(4640);
        let N = (() => {
            class T {
                constructor(g, S, c, o) {
                    this.http = g,
                        this.globalSerive = S,
                        this.loginService = c,
                        this.feedService = o,
                        this.api_url = n.N.HOST.link,
                        this.cartData = new e.X({}),
                        this.boughtListIds = [],
                        this.freeProduct = !1
                }
                storeLocal(g) {
                    let S = JSON.parse(localStorage.getItem("cart"));
                    S && S.length ? S.find(o => !!(o && o.id && g && g.list) && o.id === g.list.id) || (S.push(g.list),
                        this.globalSerive.cartTotalItems.next(S.length),
                        localStorage.removeItem("cart"),
                        localStorage.setItem("cart", JSON.stringify(S))) : (S = [],
                            S.push(g.list),
                            this.globalSerive.cartTotalItems.next(S.length),
                            localStorage.setItem("cart", JSON.stringify(S)))
                }
                updateCartlength() {
                    let g = [];
                    g = JSON.parse(localStorage.getItem("cart")),
                        this.globalSerive.cartTotalItems.next(g && g.length ? g.length : 0)
                }
                checkProductValidity(g) {
                    return this.http.post(this.api_url + "/products/v2/checkvalidity", g)
                }
                createOrder(g) {
                    return this.http.post(this.api_url + "/student/createpublicorder", g)
                }
                validateDiscount(g) {
                    return this.http.post(this.api_url + "/products/discounts/checkv2", g)
                }
                addCartItemToDB(g) {
                    return this.http.post(this.api_url + "/products/addcart", g, this.loginService.options(null))
                }
                removeCartItemFromDB(g) {
                    return this.http.post(this.api_url + "/products/removecart", g, this.loginService.options(null))
                }
                getUserCartList(g) {
                    return new Promise(() => {
                        const S = {
                            user_id: g.user_id
                        }
                            , c = JSON.parse(localStorage.getItem("school_details"));
                        this.getCartList(S, g).subscribe(o => {
                            if (o && o.success && o.data && o.data.length) {
                                const t = [];
                                let s = [];
                                o.data.forEach(r => {
                                    r.products && (s = [...r.products.entity_ids, ...s],
                                        s = [...new Set(s)])
                                }
                                );
                                const a = {
                                    c_id: s,
                                    school_code: c.school_code,
                                    googleToken: ""
                                };
                                this.globalSerive.getCaptchaToken("getCourseCount").then(r => {
                                    a.googleToken = r,
                                        this.feedService.getFeatureData(a).subscribe(p => {
                                            o.data && o.data.length ? (o.data.forEach(d => {
                                                if (d && d.products) {
                                                    const u = d.products;
                                                    u.entity_ids.forEach(v => {
                                                        (p.data ? p.data.filter(f => v === f.c_id) : []).forEach(f => {
                                                            u.practiceCount = u.practise_count + f.practise_count ? f.practise_count : 0,
                                                                u.assessmentCount = u.assessmentCount + f.test_count ? f.test_count : 0
                                                        }
                                                        )
                                                    }
                                                    ),
                                                        u.productName = u.title,
                                                        u.image || (u.image = n.N.s3Objectstudentassets + "assets/common-images/market/Course.png"),
                                                        u.reviewCount = u.review_count,
                                                        u.rating = u.ratings,
                                                        u.hoursContent = u.product_duration,
                                                        u.originalPrice = u.price ? u.price : 0,
                                                        u.compare_price = u.compare_price ? u.compare_price : 0,
                                                        t.push(u)
                                                }
                                            }
                                            ),
                                                localStorage.removeItem("cart"),
                                                localStorage.setItem("cart", JSON.stringify(t)),
                                                this.globalSerive.cartTotalItems.next(t.length)) : (localStorage.removeItem("cart"),
                                                    this.globalSerive.cartTotalItems.next(0))
                                        }
                                        )
                                }
                                )
                            }
                        }
                        )
                    }
                    )
                }
                getCartList(g, S) {
                    return this.http.post(this.api_url + "/products/cartlist", g, this.loginService.options(S))
                }
                boughtList(g) {
                    this.boughtListIds = g
                }
                setFreeProduct(g) {
                    this.freeProduct = g
                }
                setReview(g) {
                    return this.http.post(this.api_url + "/products/setreview", g, this.loginService.options(null)).pipe((0,
                        x.K)(this.loginService.handleError.bind(this)))
                }
            }
            return T.\u0275fac = function (g) {
                return new (g || T)(C.LFG(O.eN), C.LFG(D.U), C.LFG(M.r), C.LFG(I.e))
            }
                ,
                T.\u0275prov = C.Yz7({
                    token: T,
                    factory: T.\u0275fac,
                    providedIn: "root"
                }),
                T
        }
        )()
    }
    ,
    9014: (G, $, i) => {
        "use strict";
        i.d($, {
            a: () => w
        });
        var n = i(7582)
            , e = i(2340)
            , x = i(1135)
            , C = i(262)
            , O = i(5e3)
            , D = i(520)
            , M = i(532)
            , I = i(7465)
            , N = i(4120)
            , T = i(2511);
        let w = (() => {
            class g {
                constructor(c, o, t, s, a) {
                    this.http = c,
                        this.router = o,
                        this.globalService = t,
                        this.loginService = s,
                        this.testService = a,
                        this.chatLeftPanelEvents = new x.X({}),
                        this.newMessage = new x.X({}),
                        this.typingData = new x.X({}),
                        this.updateMessage = new x.X({}),
                        this.isOffline = new x.X(!1),
                        this.messageSource = new x.X(""),
                        this.api_url = e.N.HOST.link,
                        this.subscriptionList = [],
                        this.emoji = {
                            grinning: "\u{1f600}",
                            grin: "\u{1f601}",
                            joy: "\u{1f602}",
                            smiley: "\u{1f603}",
                            smile: "\u{1f604}",
                            sweat_smile: "\u{1f605}",
                            "face-with-tears-of-joy": "\u{1f602}",
                            laughing: "\u{1f606}",
                            satisfied: "\u{1f606}",
                            innocent: "\u{1f607}",
                            smiling_imp: "\u{1f608}",
                            wink: "\u{1f609}",
                            blush: "\u{1f60a}",
                            yum: "\u{1f60b}",
                            relieved: "\u{1f60c}",
                            heart_eyes: "\u{1f60d}",
                            sunglasses: "\u{1f60e}",
                            smirk: "\u{1f60f}",
                            neutral_face: "\u{1f610}",
                            expressionless: "\u{1f611}",
                            unamused: "\u{1f612}",
                            sweat: "\u{1f613}",
                            pensive: "\u{1f614}",
                            confused: "\u{1f615}",
                            confounded: "\u{1f616}",
                            kissing: "\u{1f617}",
                            kissing_heart: "\u{1f618}",
                            kissing_smiling_eyes: "\u{1f619}",
                            kissing_closed_eyes: "\u{1f61a}",
                            stuck_out_tongue: "\u{1f61b}",
                            stuck_out_tongue_winking_eye: "\u{1f61c}",
                            stuck_out_tongue_closed_eyes: "\u{1f61d}",
                            disappointed: "\u{1f61e}",
                            worried: "\u{1f61f}",
                            angry: "\u{1f620}",
                            rage: "\u{1f621}",
                            cry: "\u{1f622}",
                            persevere: "\u{1f623}",
                            triumph: "\u{1f624}",
                            disappointed_relieved: "\u{1f625}",
                            frowning: "\u{1f626}",
                            anguished: "\u{1f627}",
                            fearful: "\u{1f628}",
                            weary: "\u{1f629}",
                            sleepy: "\u{1f62a}",
                            tired_face: "\u{1f62b}",
                            grimacing: "\u{1f62c}",
                            sob: "\u{1f62d}",
                            open_mouth: "\u{1f62e}",
                            hushed: "\u{1f62f}",
                            cold_sweat: "\u{1f630}",
                            scream: "\u{1f631}",
                            astonished: "\u{1f632}",
                            flushed: "\u{1f633}",
                            sleeping: "\u{1f634}",
                            dizzy_face: "\u{1f635}",
                            no_mouth: "\u{1f636}",
                            mask: "\u{1f637}",
                            smile_cat: "\u{1f638}",
                            joy_cat: "\u{1f639}",
                            smiley_cat: "\u{1f63a}",
                            heart_eyes_cat: "\u{1f63b}",
                            smirk_cat: "\u{1f63c}",
                            kissing_cat: "\u{1f63d}",
                            pouting_cat: "\u{1f63e}",
                            crying_cat_face: "\u{1f63f}",
                            scream_cat: "\u{1f640}",
                            slightly_frowning_face: "\u{1f641}",
                            slightly_smiling_face: "\u{1f642}",
                            upside_down_face: "\u{1f643}",
                            face_with_rolling_eyes: "\u{1f644}",
                            100: "\u{1f4af}",
                            "woman-gesturing-no": "\u{1f645}\u200d\u2640\ufe0f",
                            no_good: "\u{1f645}\u200d\u2640\ufe0f",
                            "man-gesturing-no": "\u{1f645}\u200d\u2642\ufe0f",
                            "woman-gesturing-ok": "\u{1f646}\u200d\u2640\ufe0f",
                            ok_woman: "\u{1f646}\u200d\u2640\ufe0f",
                            "man-gesturing-ok": "\u{1f646}\u200d\u2642\ufe0f",
                            "woman-bowing": "\u{1f647}\u200d\u2640\ufe0f",
                            "man-bowing": "\u{1f647}\u200d\u2642\ufe0f",
                            bow: "\u{1f647}\u200d\u2642\ufe0f",
                            see_no_evil: "\u{1f648}",
                            hear_no_evil: "\u{1f649}",
                            speak_no_evil: "\u{1f64a}",
                            "woman-raising-hand": "\u{1f64b}\u200d\u2640\ufe0f",
                            raising_hand: "\u{1f64b}\u200d\u2640\ufe0f",
                            "man-raising-hand": "\u{1f64b}\u200d\u2642\ufe0f",
                            raised_hands: "\u{1f64c}",
                            "woman-frowning": "\u{1f64d}\u200d\u2640\ufe0f",
                            person_frowning: "\u{1f64d}\u200d\u2640\ufe0f",
                            "man-frowning": "\u{1f64d}\u200d\u2642\ufe0f",
                            "woman-pouting": "\u{1f64e}\u200d\u2640\ufe0f",
                            person_with_pouting_face: "\u{1f64e}\u200d\u2640\ufe0f",
                            "man-pouting": "\u{1f64e}\u200d\u2642\ufe0f",
                            pray: "\u{1f64f}",
                            rocket: "\u{1f680}",
                            helicopter: "\u{1f681}",
                            steam_locomotive: "\u{1f682}",
                            railway_car: "\u{1f683}",
                            bullettrain_side: "\u{1f684}",
                            bullettrain_front: "\u{1f685}",
                            train2: "\u{1f686}",
                            metro: "\u{1f687}",
                            light_rail: "\u{1f688}",
                            station: "\u{1f689}",
                            tram: "\u{1f68a}",
                            train: "\u{1f68b}",
                            bus: "\u{1f68c}",
                            oncoming_bus: "\u{1f68d}",
                            trolleybus: "\u{1f68e}",
                            busstop: "\u{1f68f}",
                            minibus: "\u{1f690}",
                            ambulance: "\u{1f691}",
                            fire_engine: "\u{1f692}",
                            police_car: "\u{1f693}",
                            oncoming_police_car: "\u{1f694}",
                            taxi: "\u{1f695}",
                            oncoming_taxi: "\u{1f696}",
                            car: "\u{1f697}",
                            red_car: "\u{1f697}",
                            oncoming_automobile: "\u{1f698}",
                            blue_car: "\u{1f699}",
                            truck: "\u{1f69a}",
                            articulated_lorry: "\u{1f69b}",
                            tractor: "\u{1f69c}",
                            monorail: "\u{1f69d}",
                            mountain_railway: "\u{1f69e}",
                            suspension_railway: "\u{1f69f}",
                            mountain_cableway: "\u{1f6a0}",
                            aerial_tramway: "\u{1f6a1}",
                            ship: "\u{1f6a2}",
                            "woman-rowing-boat": "\u{1f6a3}\u200d\u2640\ufe0f",
                            "man-rowing-boat": "\u{1f6a3}\u200d\u2642\ufe0f",
                            rowboat: "\u{1f6a3}\u200d\u2642\ufe0f",
                            speedboat: "\u{1f6a4}",
                            traffic_light: "\u{1f6a5}",
                            vertical_traffic_light: "\u{1f6a6}",
                            construction: "\u{1f6a7}",
                            rotating_light: "\u{1f6a8}",
                            triangular_flag_on_post: "\u{1f6a9}",
                            door: "\u{1f6aa}",
                            no_entry_sign: "\u{1f6ab}",
                            smoking: "\u{1f6ac}",
                            no_smoking: "\u{1f6ad}",
                            put_litter_in_its_place: "\u{1f6ae}",
                            do_not_litter: "\u{1f6af}",
                            potable_water: "\u{1f6b0}",
                            "non-potable_water": "\u{1f6b1}",
                            bike: "\u{1f6b2}",
                            no_bicycles: "\u{1f6b3}",
                            "woman-biking": "\u{1f6b4}\u200d\u2640\ufe0f",
                            "man-biking": "\u{1f6b4}\u200d\u2642\ufe0f",
                            bicyclist: "\u{1f6b4}\u200d\u2642\ufe0f",
                            "woman-mountain-biking": "\u{1f6b5}\u200d\u2640\ufe0f",
                            "man-mountain-biking": "\u{1f6b5}\u200d\u2642\ufe0f",
                            mountain_bicyclist: "\u{1f6b5}\u200d\u2642\ufe0f",
                            "woman-walking": "\u{1f6b6}\u200d\u2640\ufe0f",
                            "man-walking": "\u{1f6b6}\u200d\u2642\ufe0f",
                            walking: "\u{1f6b6}\u200d\u2642\ufe0f",
                            no_pedestrians: "\u{1f6b7}",
                            children_crossing: "\u{1f6b8}",
                            mens: "\u{1f6b9}",
                            womens: "\u{1f6ba}",
                            restroom: "\u{1f6bb}",
                            baby_symbol: "\u{1f6bc}",
                            toilet: "\u{1f6bd}",
                            wc: "\u{1f6be}",
                            shower: "\u{1f6bf}",
                            bath: "\u{1f6c0}",
                            bathtub: "\u{1f6c1}",
                            passport_control: "\u{1f6c2}",
                            customs: "\u{1f6c3}",
                            baggage_claim: "\u{1f6c4}",
                            left_luggage: "\u{1f6c5}",
                            couch_and_lamp: "\u{1f6cb}\ufe0f",
                            sleeping_accommodation: "\u{1f6cc}",
                            shopping_bags: "\u{1f6cd}\ufe0f",
                            bellhop_bell: "\u{1f6ce}\ufe0f",
                            bed: "\u{1f6cf}\ufe0f",
                            place_of_worship: "\u{1f6d0}",
                            octagonal_sign: "\u{1f6d1}",
                            shopping_trolley: "\u{1f6d2}",
                            hammer_and_wrench: "\u{1f6e0}\ufe0f",
                            shield: "\u{1f6e1}\ufe0f",
                            oil_drum: "\u{1f6e2}\ufe0f",
                            motorway: "\u{1f6e3}\ufe0f",
                            railway_track: "\u{1f6e4}\ufe0f",
                            motor_boat: "\u{1f6e5}\ufe0f",
                            small_airplane: "\u{1f6e9}\ufe0f",
                            airplane_departure: "\u{1f6eb}",
                            airplane_arriving: "\u{1f6ec}",
                            satellite: "\u{1f6f0}\ufe0f",
                            passenger_ship: "\u{1f6f3}\ufe0f",
                            scooter: "\u{1f6f4}",
                            motor_scooter: "\u{1f6f5}",
                            canoe: "\u{1f6f6}",
                            sled: "\u{1f6f7}",
                            flying_saucer: "\u{1f6f8}",
                            zipper_mouth_face: "\u{1f910}",
                            money_mouth_face: "\u{1f911}",
                            face_with_thermometer: "\u{1f912}",
                            nerd_face: "\u{1f913}",
                            thinking_face: "\u{1f914}",
                            face_with_head_bandage: "\u{1f915}",
                            robot_face: "\u{1f916}",
                            hugging_face: "\u{1f917}",
                            the_horns: "\u{1f918}",
                            sign_of_the_horns: "\u{1f918}",
                            call_me_hand: "\u{1f919}",
                            raised_back_of_hand: "\u{1f91a}",
                            "left-facing_fist": "\u{1f91b}",
                            "right-facing_fist": "\u{1f91c}",
                            handshake: "\u{1f91d}",
                            crossed_fingers: "\u{1f91e}",
                            hand_with_index_and_middle_fingers_crossed: "\u{1f91e}",
                            i_love_you_hand_sign: "\u{1f91f}",
                            face_with_cowboy_hat: "\u{1f920}",
                            clown_face: "\u{1f921}",
                            nauseated_face: "\u{1f922}",
                            rolling_on_the_floor_laughing: "\u{1f923}",
                            drooling_face: "\u{1f924}",
                            lying_face: "\u{1f925}",
                            "woman-facepalming": "\u{1f926}\u200d\u2640\ufe0f",
                            "man-facepalming": "\u{1f926}\u200d\u2642\ufe0f",
                            face_palm: "\u{1f926}",
                            sneezing_face: "\u{1f927}",
                            face_with_raised_eyebrow: "\u{1f928}",
                            face_with_one_eyebrow_raised: "\u{1f928}",
                            "star-struck": "\u{1f929}",
                            grinning_face_with_star_eyes: "\u{1f929}",
                            zany_face: "\u{1f92a}",
                            grinning_face_with_one_large_and_one_small_eye: "\u{1f92a}",
                            shushing_face: "\u{1f92b}",
                            face_with_finger_covering_closed_lips: "\u{1f92b}",
                            face_with_symbols_on_mouth: "\u{1f92c}",
                            serious_face_with_symbols_covering_mouth: "\u{1f92c}",
                            face_with_hand_over_mouth: "\u{1f92d}",
                            smiling_face_with_smiling_eyes_and_hand_covering_mouth: "\u{1f92d}",
                            face_vomiting: "\u{1f92e}",
                            face_with_open_mouth_vomiting: "\u{1f92e}",
                            exploding_head: "\u{1f92f}",
                            shocked_face_with_exploding_head: "\u{1f92f}",
                            pregnant_woman: "\u{1f930}",
                            "breast-feeding": "\u{1f931}",
                            palms_up_together: "\u{1f932}",
                            selfie: "\u{1f933}",
                            prince: "\u{1f934}",
                            man_in_tuxedo: "\u{1f935}",
                            mrs_claus: "\u{1f936}",
                            mother_christmas: "\u{1f936}",
                            "woman-shrugging": "\u{1f937}\u200d\u2640\ufe0f",
                            "man-shrugging": "\u{1f937}\u200d\u2642\ufe0f",
                            shrug: "\u{1f937}",
                            "woman-cartwheeling": "\u{1f938}\u200d\u2640\ufe0f",
                            "man-cartwheeling": "\u{1f938}\u200d\u2642\ufe0f",
                            person_doing_cartwheel: "\u{1f938}",
                            "woman-juggling": "\u{1f939}\u200d\u2640\ufe0f",
                            "man-juggling": "\u{1f939}\u200d\u2642\ufe0f",
                            juggling: "\u{1f939}",
                            fencer: "\u{1f93a}",
                            "woman-wrestling": "\u{1f93c}\u200d\u2640\ufe0f",
                            "man-wrestling": "\u{1f93c}\u200d\u2642\ufe0f",
                            wrestlers: "\u{1f93c}",
                            "woman-playing-water-polo": "\u{1f93d}\u200d\u2640\ufe0f",
                            "man-playing-water-polo": "\u{1f93d}\u200d\u2642\ufe0f",
                            water_polo: "\u{1f93d}",
                            "woman-playing-handball": "\u{1f93e}\u200d\u2640\ufe0f",
                            "man-playing-handball": "\u{1f93e}\u200d\u2642\ufe0f",
                            handball: "\u{1f93e}",
                            wilted_flower: "\u{1f940}",
                            drum_with_drumsticks: "\u{1f941}",
                            clinking_glasses: "\u{1f942}",
                            tumbler_glass: "\u{1f943}",
                            spoon: "\u{1f944}",
                            goal_net: "\u{1f945}",
                            first_place_medal: "\u{1f947}",
                            second_place_medal: "\u{1f948}",
                            third_place_medal: "\u{1f949}",
                            boxing_glove: "\u{1f94a}",
                            martial_arts_uniform: "\u{1f94b}",
                            curling_stone: "\u{1f94c}",
                            croissant: "\u{1f950}",
                            avocado: "\u{1f951}",
                            cucumber: "\u{1f952}",
                            bacon: "\u{1f953}",
                            potato: "\u{1f954}",
                            carrot: "\u{1f955}",
                            baguette_bread: "\u{1f956}",
                            green_salad: "\u{1f957}",
                            shallow_pan_of_food: "\u{1f958}",
                            stuffed_flatbread: "\u{1f959}",
                            egg: "\u{1f95a}",
                            glass_of_milk: "\u{1f95b}",
                            peanuts: "\u{1f95c}",
                            kiwifruit: "\u{1f95d}",
                            pancakes: "\u{1f95e}",
                            dumpling: "\u{1f95f}",
                            fortune_cookie: "\u{1f960}",
                            takeout_box: "\u{1f961}",
                            chopsticks: "\u{1f962}",
                            bowl_with_spoon: "\u{1f963}",
                            cup_with_straw: "\u{1f964}",
                            coconut: "\u{1f965}",
                            broccoli: "\u{1f966}",
                            pie: "\u{1f967}",
                            pretzel: "\u{1f968}",
                            cut_of_meat: "\u{1f969}",
                            sandwich: "\u{1f96a}",
                            canned_food: "\u{1f96b}",
                            crab: "\u{1f980}",
                            lion_face: "\u{1f981}",
                            scorpion: "\u{1f982}",
                            turkey: "\u{1f983}",
                            unicorn_face: "\u{1f984}",
                            eagle: "\u{1f985}",
                            duck: "\u{1f986}",
                            bat: "\u{1f987}",
                            shark: "\u{1f988}",
                            owl: "\u{1f989}",
                            fox_face: "\u{1f98a}",
                            butterfly: "\u{1f98b}",
                            deer: "\u{1f98c}",
                            gorilla: "\u{1f98d}",
                            lizard: "\u{1f98e}",
                            rhinoceros: "\u{1f98f}",
                            shrimp: "\u{1f990}",
                            squid: "\u{1f991}",
                            giraffe_face: "\u{1f992}",
                            zebra_face: "\u{1f993}",
                            hedgehog: "\u{1f994}",
                            sauropod: "\u{1f995}",
                            "t-rex": "\u{1f996}",
                            cricket: "\u{1f997}",
                            cheese_wedge: "\u{1f9c0}",
                            face_with_monocle: "\u{1f9d0}",
                            adult: "\u{1f9d1}",
                            child: "\u{1f9d2}",
                            older_adult: "\u{1f9d3}",
                            bearded_person: "\u{1f9d4}",
                            person_with_headscarf: "\u{1f9d5}",
                            woman_in_steamy_room: "\u{1f9d6}\u200d\u2640\ufe0f",
                            man_in_steamy_room: "\u{1f9d6}\u200d\u2642\ufe0f",
                            person_in_steamy_room: "\u{1f9d6}\u200d\u2642\ufe0f",
                            woman_climbing: "\u{1f9d7}\u200d\u2640\ufe0f",
                            person_climbing: "\u{1f9d7}\u200d\u2640\ufe0f",
                            man_climbing: "\u{1f9d7}\u200d\u2642\ufe0f",
                            woman_in_lotus_position: "\u{1f9d8}\u200d\u2640\ufe0f",
                            person_in_lotus_position: "\u{1f9d8}\u200d\u2640\ufe0f",
                            man_in_lotus_position: "\u{1f9d8}\u200d\u2642\ufe0f",
                            female_mage: "\u{1f9d9}\u200d\u2640\ufe0f",
                            mage: "\u{1f9d9}\u200d\u2640\ufe0f",
                            male_mage: "\u{1f9d9}\u200d\u2642\ufe0f",
                            female_fairy: "\u{1f9da}\u200d\u2640\ufe0f",
                            fairy: "\u{1f9da}\u200d\u2640\ufe0f",
                            male_fairy: "\u{1f9da}\u200d\u2642\ufe0f",
                            female_vampire: "\u{1f9db}\u200d\u2640\ufe0f",
                            vampire: "\u{1f9db}\u200d\u2640\ufe0f",
                            male_vampire: "\u{1f9db}\u200d\u2642\ufe0f",
                            mermaid: "\u{1f9dc}\u200d\u2640\ufe0f",
                            merman: "\u{1f9dc}\u200d\u2642\ufe0f",
                            merperson: "\u{1f9dc}\u200d\u2642\ufe0f",
                            female_elf: "\u{1f9dd}\u200d\u2640\ufe0f",
                            male_elf: "\u{1f9dd}\u200d\u2642\ufe0f",
                            elf: "\u{1f9dd}\u200d\u2642\ufe0f",
                            female_genie: "\u{1f9de}\u200d\u2640\ufe0f",
                            male_genie: "\u{1f9de}\u200d\u2642\ufe0f",
                            genie: "\u{1f9de}\u200d\u2642\ufe0f",
                            female_zombie: "\u{1f9df}\u200d\u2640\ufe0f",
                            male_zombie: "\u{1f9df}\u200d\u2642\ufe0f",
                            zombie: "\u{1f9df}\u200d\u2642\ufe0f",
                            brain: "\u{1f9e0}",
                            orange_heart: "\u{1f9e1}",
                            billed_cap: "\u{1f9e2}",
                            scarf: "\u{1f9e3}",
                            gloves: "\u{1f9e4}",
                            coat: "\u{1f9e5}",
                            socks: "\u{1f9e6}",
                            bangbang: "\u203c\ufe0f",
                            interrobang: "\u2049\ufe0f",
                            tm: "\u2122\ufe0f",
                            information_source: "\u2139\ufe0f",
                            left_right_arrow: "\u2194\ufe0f",
                            arrow_up_down: "\u2195\ufe0f",
                            arrow_upper_left: "\u2196\ufe0f",
                            arrow_upper_right: "\u2197\ufe0f",
                            arrow_lower_right: "\u2198\ufe0f",
                            arrow_lower_left: "\u2199\ufe0f",
                            leftwards_arrow_with_hook: "\u21a9\ufe0f",
                            arrow_right_hook: "\u21aa\ufe0f",
                            watch: "\u231a",
                            hourglass: "\u231b",
                            keyboard: "\u2328\ufe0f",
                            eject: "\u23cf\ufe0f",
                            fast_forward: "\u23e9",
                            rewind: "\u23ea",
                            arrow_double_up: "\u23eb",
                            arrow_double_down: "\u23ec",
                            black_right_pointing_double_triangle_with_vertical_bar: "\u23ed\ufe0f",
                            black_left_pointing_double_triangle_with_vertical_bar: "\u23ee\ufe0f",
                            black_right_pointing_triangle_with_double_vertical_bar: "\u23ef\ufe0f",
                            alarm_clock: "\u23f0",
                            stopwatch: "\u23f1\ufe0f",
                            timer_clock: "\u23f2\ufe0f",
                            hourglass_flowing_sand: "\u23f3",
                            double_vertical_bar: "\u23f8\ufe0f",
                            black_square_for_stop: "\u23f9\ufe0f",
                            black_circle_for_record: "\u23fa\ufe0f",
                            m: "\u24c2\ufe0f",
                            black_small_square: "\u25aa\ufe0f",
                            white_small_square: "\u25ab\ufe0f",
                            arrow_forward: "\u25b6\ufe0f",
                            arrow_backward: "\u25c0\ufe0f",
                            white_medium_square: "\u25fb\ufe0f",
                            black_medium_square: "\u25fc\ufe0f",
                            white_medium_small_square: "\u25fd",
                            black_medium_small_square: "\u25fe",
                            sunny: "\u2600\ufe0f",
                            cloud: "\u2601\ufe0f",
                            umbrella: "\u2602\ufe0f",
                            snowman: "\u2603\ufe0f",
                            comet: "\u2604\ufe0f",
                            phone: "\u260e\ufe0f",
                            telephone: "\u260e\ufe0f",
                            ballot_box_with_check: "\u2611\ufe0f",
                            shamrock: "\u2618\ufe0f",
                            point_up: "\u261d\ufe0f",
                            skull_and_crossbones: "\u2620\ufe0f",
                            radioactive_sign: "\u2622\ufe0f",
                            biohazard_sign: "\u2623\ufe0f",
                            orthodox_cross: "\u2626\ufe0f",
                            star_and_crescent: "\u262a\ufe0f",
                            peace_symbol: "\u262e\ufe0f",
                            yin_yang: "\u262f\ufe0f",
                            wheel_of_dharma: "\u2638\ufe0f",
                            white_frowning_face: "\u2639\ufe0f",
                            relaxed: "\u263a\ufe0f",
                            female_sign: "\u2640\ufe0f",
                            male_sign: "\u2642\ufe0f",
                            gemini: "\u264a",
                            cancer: "\u264b",
                            leo: "\u264c",
                            virgo: "\u264d",
                            libra: "\u264e",
                            scorpius: "\u264f",
                            spades: "\u2660\ufe0f",
                            clubs: "\u2663\ufe0f",
                            hearts: "\u2665\ufe0f",
                            diamonds: "\u2666\ufe0f",
                            hotsprings: "\u2668\ufe0f",
                            recycle: "\u267b\ufe0f",
                            wheelchair: "\u267f",
                            hammer_and_pick: "\u2692\ufe0f",
                            crossed_swords: "\u2694\ufe0f",
                            medical_symbol: "\u2695\ufe0f",
                            staff_of_aesculapius: "\u2695\ufe0f",
                            scales: "\u2696\ufe0f",
                            alembic: "\u2697\ufe0f",
                            gear: "\u2699\ufe0f",
                            atom_symbol: "\u269b\ufe0f",
                            fleur_de_lis: "\u269c\ufe0f",
                            warning: "\u26a0\ufe0f",
                            zap: "\u26a1",
                            white_circle: "\u26aa",
                            black_circle: "\u26ab",
                            coffin: "\u26b0\ufe0f",
                            funeral_urn: "\u26b1\ufe0f",
                            soccer: "\u26bd",
                            baseball: "\u26be",
                            snowman_without_snow: "\u26c4",
                            partly_sunny: "\u26c5",
                            thunder_cloud_and_rain: "\u26c8\ufe0f",
                            ophiuchus: "\u26ce",
                            pick: "\u26cf\ufe0f",
                            helmet_with_white_cross: "\u26d1\ufe0f",
                            chains: "\u26d3\ufe0f",
                            no_entry: "\u26d4",
                            shinto_shrine: "\u26e9\ufe0f",
                            church: "\u26ea",
                            mountain: "\u26f0\ufe0f",
                            umbrella_on_ground: "\u26f1\ufe0f",
                            fountain: "\u26f2",
                            golf: "\u26f3",
                            ferry: "\u26f4\ufe0f",
                            boat: "\u26f5",
                            sailboat: "\u26f5",
                            skier: "\u26f7\ufe0f",
                            ice_skate: "\u26f8\ufe0f",
                            "woman-bouncing-ball": "\u26f9\ufe0f\u200d\u2640\ufe0f",
                            "man-bouncing-ball": "\u26f9\ufe0f\u200d\u2642\ufe0f",
                            person_with_ball: "\u26f9\ufe0f\u200d\u2642\ufe0f",
                            tent: "\u26fa",
                            fuelpump: "\u26fd",
                            scissors: "\u2702\ufe0f",
                            airplane: "\u2708\ufe0f",
                            envelope: "\u2709\ufe0f",
                            fist: "\u270a",
                            hand: "\u270b",
                            raised_hand: "\u270b",
                            v: "\u270c\ufe0f",
                            writing_hand: "\u270d\ufe0f",
                            pencil2: "\u270f\ufe0f",
                            black_nib: "\u2712\ufe0f",
                            heavy_check_mark: "\u2714\ufe0f",
                            heavy_multiplication_x: "\u2716\ufe0f",
                            latin_cross: "\u271d\ufe0f",
                            star_of_david: "\u2721\ufe0f",
                            eight_spoked_asterisk: "\u2733\ufe0f",
                            eight_pointed_black_star: "\u2734\ufe0f",
                            snowflake: "\u2744\ufe0f",
                            sparkle: "\u2747\ufe0f",
                            x: "\u274c",
                            negative_squared_cross_mark: "\u274e",
                            heavy_heart_exclamation_mark_ornament: "\u2763\ufe0f",
                            heart: "\u2764\ufe0f",
                            arrow_right: "\u27a1\ufe0f",
                            curly_loop: "\u27b0",
                            loop: "\u27bf",
                            arrow_heading_up: "\u2934\ufe0f",
                            arrow_heading_down: "\u2935\ufe0f",
                            arrow_left: "\u2b05\ufe0f",
                            arrow_up: "\u2b06\ufe0f",
                            arrow_down: "\u2b07\ufe0f",
                            black_large_square: "\u2b1b",
                            white_large_square: "\u2b1c",
                            star: "\u2b50",
                            o: "\u2b55",
                            wavy_dash: "\u3030\ufe0f",
                            part_alternation_mark: "\u303d\ufe0f",
                            congratulations: "\u3297\ufe0f",
                            secret: "\u3299\ufe0f",
                            soap: "\u{1f9fc}",
                            virus: "\u{1f9a0}",
                            thumbsup_2: "\u{1f44d}\u{1f3fe}",
                            thumbsup_3: "\u{1f44d}\u{1f3fd}",
                            fist_1: "\u270a\u{1f3fe}",
                            fist_2: "\u270a\u{1f3ff}"
                        };
                    const r = JSON.parse(localStorage.getItem("school_details"));
                    r && r.schools_metadata && (this.sclMD = r.schools_metadata),
                        this.userData = JSON.parse(localStorage.getItem("token")),
                        this.logoutListener()
                }
                setUserData() {
                    this.userData = JSON.parse(localStorage.getItem("token"))
                }
                getPubNub() {
                    return new Promise((c, o) => (0,
                        n.mG)(this, void 0, void 0, function* () {
                            if (this.loginService.loginStatus() && this.checkIfEngagementAllowed())
                                if (this.pubNub)
                                    c(this.pubNub);
                                else {
                                    const t = {
                                        element: "script",
                                        url: "https://cdn.pubnub.com/sdk/javascript/pubnub.4.29.9.js",
                                        type: "text/javascript",
                                        rel: "",
                                        id: "pubnub"
                                    };
                                    yield this.globalService.loadScript(t.element, t.url, t.type, t.rel, t.id, t.child),
                                        this.getToken().subscribe(s => (0,
                                            n.mG)(this, void 0, void 0, function* () {
                                                const a = yield this.testService.getCryptoJS();
                                                if (s && s.success) {
                                                    const r = JSON.parse(a.AES.decrypt(s.token, this.userData.school_id + "_" + this.userData.user_id).toString(a.enc.Utf8));
                                                    r ? (this.pubNub = new PubNub({
                                                        publishKey: r.publishKey,
                                                        subscribeKey: r.subscribeKey,
                                                        uuid: this.userData.user_id + "_" + this.userData.school_id,
                                                        authKey: this.userData.user_id + "_" + this.userData.school_id,
                                                        keepAlive: !0,
                                                        autoNetworkDetection: !0
                                                    }),
                                                        yield this.addListeners(),
                                                        c(this.pubNub)) : c(!1)
                                                } else
                                                    window.location.pathname.includes("chat") && this.globalService.commonGrowl.next({
                                                        time: 3e3,
                                                        severity: "error",
                                                        summary: "Chat initialization failed!",
                                                        detail: "Kindly retry after some time"
                                                    }),
                                                        c(!1)
                                            }))
                                }
                            else
                                c(!1)
                        }))
                }
                addListeners() {
                    return new Promise((c, o) => {
                        this.pubNub.addListener({
                            message: t => {
                                if (this.currentChannel && this.currentChannel.channel_id === t.channel ? this.newMessage.next({
                                    action: "message",
                                    event: t
                                }) : this.chatLeftPanelEvents.next({
                                    action: "message",
                                    event: t
                                }),
                                    this.userData.user_id !== t.message.user_id) {
                                    let s = document.createElement("div");
                                    s.innerHTML = t.message.message,
                                        this.showNotification(t.message.channel_name, t.message.sender + ": " + s.innerText, t.message.profile_pic, "chat")
                                }
                            }
                            ,
                            presence: t => { }
                            ,
                            signal: t => {
                                this.typingData.next({
                                    channelName: t.channel,
                                    channelGroup: t.subscription,
                                    pubTT: t.timetoken,
                                    msg: t.message,
                                    publisher: t.publisher
                                })
                            }
                            ,
                            objects: t => {
                                t && t.message && "channel" === t.message.type && this.chatLeftPanelEvents.next({
                                    action: "channel",
                                    event: t
                                })
                            }
                            ,
                            messageAction: t => {
                                this.currentChannel && this.currentChannel.channel_id === t.channel && this.updateMessage.next({
                                    action: "updated",
                                    event: t
                                })
                            }
                            ,
                            file: t => {
                                this.currentChannel && this.currentChannel.channel_id === t.channel ? this.newMessage.next({
                                    action: "file",
                                    event: t
                                }) : this.chatLeftPanelEvents.next({
                                    action: "message",
                                    event: t
                                })
                            }
                            ,
                            status: t => { }
                            ,
                            membership: t => {
                                if (t && t.message && t.message.data && t.message.data.uuid && t.message.data.uuid.id === this.userData.user_id + "_" + this.userData.school_id) {
                                    if ("membership" === t.message.type && ("delete" === t.message.event || "set" === t.message.event) && (this.chatLeftPanelEvents.next({
                                        action: "member",
                                        type: t.message.event,
                                        event: t
                                    }),
                                        "delete" === t.message.event && this.subscriptionList && this.subscriptionList.includes(t.message.data.channel.id))) {
                                        const s = this.subscriptionList.findIndex(a => a === t.message.data.channel.id);
                                        this.subscriptionList.splice(s, 1),
                                            this.updateSubscription()
                                    }
                                    !1 === this.subscriptionList.includes(t.message.data.channel.id) && "delete" !== t.message.event && (this.subscriptionList.push(t.message.data.channel.id),
                                        this.updateSubscription())
                                }
                            }
                        }),
                            c(!0)
                    }
                    )
                }
                showNotification(c, o, t, s) {
                    const a = new Notification(c, {
                        body: o,
                        icon: t,
                        tag: s
                    });
                    a.onshow = () => {
                        setTimeout(() => {
                            a.close()
                        }
                            , 1e4)
                    }
                        ,
                        a.onclick = r => {
                            "/chat" !== window.location.pathname && "chat" === a.tag && this.router.navigateByUrl("chat")
                        }
                }
                getcompanyLogo(c) {
                    return this.http.get("https://autocomplete.clearbit.com/v1/companies/suggest?query=" + c)
                }
                getToken() {
                    return this.http.post(this.api_url + "/chat/token", {
                        user_id: this.userData.user_id
                    }, this.loginService.options(null)).pipe((0,
                        C.K)(this.loginService.handleError.bind(this)))
                }
                removeListeners() {
                    this.pubNub.removeListener(this.pubNubListener)
                }
                getChannelGroups() {
                    return this.http.post(this.api_url + "/getchannelgroups", {
                        user_id: this.userData.user_id
                    }, this.loginService.options(null)).pipe((0,
                        C.K)(this.loginService.handleError.bind(this)))
                }
                getMembersList(c) {
                    return this.http.post(this.api_url + "/channel/getmembers", c, this.loginService.options(null)).pipe((0,
                        C.K)(this.loginService.handleError.bind(this)))
                }
                addPubnubSub(c) {
                    this.pubNub && c && this.pubNub.subscribe({
                        channels: [c]
                    })
                }
                removePubnubSub(c) {
                    this.pubNub && c && this.pubNub.unsubscribe({
                        channels: [c]
                    })
                }
                logoutListener() {
                    this.globalService.logoutTrigger.subscribe(() => {
                        this.flushPubNub()
                    }
                    )
                }
                flushPubNub() {
                    this.pubNub && (this.pubNub.unsubscribeAll(),
                        this.pubNub = null)
                }
                getSubscriptionList(c) {
                    if (this.pubNub) {
                        const o = {
                            uuid: this.userData.user_id + "_" + this.userData.school_id,
                            include: {
                                channelFields: !0,
                                customFields: !0,
                                customChannelFields: !0
                            }
                        };
                        c && (o.page = {
                            next: c
                        }),
                            this.pubNub.objects.getMemberships(o).then(t => {
                                t && 200 === t.status && t.data && (t.data.forEach(s => {
                                    s.channel && s.channel.custom && s.channel.custom.channel_grp_id && !s.channel.custom.deletedAt && (this.subscriptionList.includes(s.channel.id) || this.subscriptionList.push(s.channel.id))
                                }
                                ),
                                    t.next && t.data.length >= 100 && t.next !== t.prev && this.getSubscriptionList(t.next)),
                                    this.updateSubscription()
                            }
                            )
                    }
                }
                updateSubscription() {
                    const c = {};
                    this.subscriptionList.includes(this.userData.user_id + "_" + this.userData.school_id) || this.subscriptionList.push(this.userData.user_id + "_" + this.userData.school_id),
                        this.subscriptionList && this.subscriptionList.length && (this.subscriptionList.length >= 100 ? (c.channelGroups = [this.userData.user_id + "_" + this.userData.school_id + "_group"],
                            this.pubNub.channelGroups.addChannels({
                                channels: this.subscriptionList,
                                channelGroup: this.userData.user_id + "_" + this.userData.school_id + "_group"
                            })) : c.channels = this.subscriptionList,
                            this.pubNub.subscribe(c))
                }
                onlineHandle() {
                    this.isOffline.next(!1)
                }
                offlineHandle() {
                    this.isOffline.next(!0)
                }
                detectOffline() {
                    window.ononline = this.onlineHandle.bind(this),
                        window.onoffline = this.offlineHandle.bind(this)
                }
                removeDetectOffline() {
                    this.isOffline.next(!1),
                        window.ononline = null,
                        window.onoffline = null
                }
                checkIfEngagementAllowed() {
                    return !!(this.sclMD && this.userData && (this.sclMD.allow_engagement || this.userData.enable_features.allow_manual_proctoring) && this.userData.enable_features && (this.userData.enable_features.allow_engagement || this.userData.enable_features.allow_manual_proctoring))
                }
                getMemberShips(c) {
                    return new Promise((o, t) => (0,
                        n.mG)(this, void 0, void 0, function* () {
                            if (this.pubNub) {
                                const s = {
                                    uuid: this.userData.user_id + "_" + this.userData.school_id,
                                    include: {
                                        channelFields: !0,
                                        customFields: !0,
                                        customChannelFields: !0
                                    }
                                };
                                c && (s.filter = c);
                                let r, a = {
                                    data: []
                                }, p = !1, d = !1;
                                const u = () => new Promise((v, y) => {
                                    r && (s.page = {
                                        next: r
                                    }),
                                        this.pubNub.objects.getMemberships(s).then(f => {
                                            f && f.data && 200 === f.status && (a.data = a.data.concat(f.data)),
                                                v(f)
                                        }
                                        ).catch(f => {
                                            y(f)
                                        }
                                        )
                                }
                                );
                                for (; !p;) {
                                    const v = yield u().catch(y => {
                                        t(y),
                                            d = !0
                                    }
                                    );
                                    if (v.next && v.data && v.data.length >= 100 && v.next !== v.prev ? r = v.next : p = !0,
                                        d)
                                        break
                                }
                                d || o(a)
                            } else
                                o(!1)
                        }))
                }
                getEmoji() {
                    return this.emoji
                }
                getUnreadMessageCount(c) {
                    return new Promise((o, t) => {
                        this.pubNub && this.pubNub.messageCounts(c).then(s => {
                            o(s)
                        }
                        ).catch(s => {
                            t(s)
                        }
                        )
                    }
                    )
                }
            }
            return g.\u0275fac = function (c) {
                return new (c || g)(O.LFG(D.eN), O.LFG(M.F0), O.LFG(I.U), O.LFG(N.r), O.LFG(T.q))
            }
                ,
                g.\u0275prov = O.Yz7({
                    token: g,
                    factory: g.\u0275fac,
                    providedIn: "root"
                }),
                g
        }
        )()
    }
    ,
    8575: (G, $, i) => {
        "use strict";
        i.d($, {
            w: () => I
        });
        var n = i(2340)
            , e = i(262)
            , x = i(1135)
            , C = i(5e3)
            , O = i(520)
            , D = i(4120)
            , M = i(7465);
        let I = (() => {
            class N {
                constructor(w, g, S) {
                    this.http = w,
                        this.loginservice = g,
                        this.globalService = S,
                        this.api = n.N.HOST.MS_drives,
                        this.backend_api_url = n.N.HOST.link,
                        this.responseSubject = new x.X(null),
                        this.attendance$ = this.responseSubject.asObservable(),
                        this.drivesNameFormat = {
                            drivesNamelist: [{
                                label: "Drives",
                                value: "drives",
                                singler: "Drive"
                            }, {
                                label: "Jobs",
                                value: "job",
                                singler: "Job"
                            }],
                            drivesOptinlist: [{
                                label: "Opt-In",
                                value: "optin",
                                doneState: "Opted-In"
                            }, {
                                label: "Apply",
                                value: "apply",
                                doneState: "Applied"
                            }],
                            drivesOptOutlist: [{
                                label: "Opt-Out",
                                value: "optout",
                                doneState: "Opted-Out"
                            }, {
                                label: "Decline",
                                value: "decline",
                                doneState: "Declined"
                            }],
                            drivesCategorylist: [{
                                label: "Drive Category ",
                                value: "drivecategory"
                            }, {
                                label: "Company Category",
                                value: "companycategaory"
                            }],
                            drivesOtherDetailslist: [{
                                label: "Drive other details",
                                value: "driveotherdetails"
                            }, {
                                label: "Change to Company / Job details",
                                value: "changetoCompanyjobdetails"
                            }],
                            drivesSalarylist: [{
                                label: "Salary",
                                value: "salary"
                            }, {
                                label: "CTC",
                                value: "ctc"
                            }]
                        },
                        this.notprovidedtext = "Not Provided";
                    const c = JSON.parse(localStorage.getItem("school_details"));
                    this.drivesNameFormatView = {
                        drivesNamelist: this.drivesNameFormat.drivesNamelist.find(o => c.schools_metadata.defaultdrivenameformat ? o.value === c.schools_metadata.defaultdrivenameformat : o.value === this.drivesNameFormat.drivesNamelist[0].value),
                        drivesOptinlist: this.drivesNameFormat.drivesOptinlist.find(o => c.schools_metadata.defaultdriveoptinformat ? o.value === c.schools_metadata.defaultdriveoptinformat : o.value === this.drivesNameFormat.drivesOptinlist[0].value),
                        drivesOptOutlist: this.drivesNameFormat.drivesOptOutlist.find(o => c.schools_metadata.defaultdriveoptoutformat ? o.value === c.schools_metadata.defaultdriveoptoutformat : o.value === this.drivesNameFormat.drivesOptOutlist[0].value),
                        drivesCategorylist: this.drivesNameFormat.drivesCategorylist.find(o => c.schools_metadata.defaultdrivecategoryformat ? o.value === c.schools_metadata.defaultdrivecategoryformat : o.value === this.drivesNameFormat.drivesCategorylist[0].value),
                        drivesOtherDetailslist: this.drivesNameFormat.drivesOtherDetailslist.find(o => c.schools_metadata.defaultdriveotherdetailsformat ? o.value === c.schools_metadata.defaultdriveotherdetailsformat : o.value === this.drivesNameFormat.drivesOtherDetailslist[0].value),
                        drivesSalarylist: this.drivesNameFormat.drivesSalarylist.find(o => c.schools_metadata.defaultdrivesalaryformat ? o.value === c.schools_metadata.defaultdrivesalaryformat : o.value === this.drivesNameFormat.drivesSalarylist[0].value)
                    }
                }
                getDriveList(w, g) {
                    return this.http.post(this.api + "/v2/student/" + g + "/drives/filter", w, this.loginservice.options(null)).pipe((0,
                        e.K)(this.loginservice.handleError.bind(this)))
                }
                getDriveDetails(w) {
                    return this.http.post(this.api + "/drive/student/drivedetails", w, this.loginservice.options(null)).pipe((0,
                        e.K)(this.loginservice.handleError.bind(this)))
                }
                getDriveStudentDetails(w) {
                    return this.http.post(this.api + "/drive/student/details", w, this.loginservice.options(null)).pipe((0,
                        e.K)(this.loginservice.handleError.bind(this)))
                }
                getDriveEligibility(w) {
                    return this.http.post(this.api + "/drive/historyppa", w, this.loginservice.options(null)).pipe((0,
                        e.K)(this.loginservice.handleError.bind(this)))
                }
                getAppliedhistoryppa(w) {
                    return this.http.post(this.api + "/drive/appliedhistoryppa", w, this.loginservice.options(null)).pipe((0,
                        e.K)(this.loginservice.handleError.bind(this)))
                }
                getAdditionalEligibility(w) {
                    return this.http.get(this.api + "/drive/eligibile/" + w, this.loginservice.options(null)).pipe((0,
                        e.K)(this.loginservice.handleError.bind(this)))
                }
                getFilters(w, g) {
                    return this.http.get(this.api + "/drive/" + w + "/" + g, this.loginservice.options(null)).pipe((0,
                        e.K)(this.loginservice.handleError.bind(this)))
                }
                getDriveBadges(w) {
                    return this.http.get(this.api + "/drive/getDriveDetailsForStudents/" + w, this.loginservice.options(null)).pipe((0,
                        e.K)(this.loginservice.handleError.bind(this)))
                }
                collegeApplyStudents(w) {
                    return this.http.post(this.api + "/drive/apply/student", w, this.loginservice.options(null)).pipe((0,
                        e.K)(this.loginservice.handleError.bind(this)))
                }
                setNotInterested(w) {
                    return this.http.post(this.api + "/drive/set/notInterested", w, this.loginservice.options(null)).pipe((0,
                        e.K)(this.loginservice.handleError.bind(this)))
                }
                uploadoffer(w) {
                    return this.http.post(this.api + "/add/offerletter", w, this.loginservice.options(null)).pipe((0,
                        e.K)(this.loginservice.handleError.bind(this)))
                }
                getSignedUrl(w) {
                    return this.http.post(this.backend_api_url + "/getsignedurl", w, this.loginservice.options(null)).pipe((0,
                        e.K)(this.loginservice.handleError.bind(this)))
                }
                uploadUsingSignedUrl(w, g) {
                    return this.http.put(w, g)
                }
                attendancesystem(w) {
                    return this.http.post(this.api + "/drive/attendancesystem", w, this.loginservice.options(null))
                }
                GetDrivestudentList(w) {
                    return this.http.post(this.api + "/drive/GetDrivestudentList", w, this.loginservice.options(null))
                }
                GetStudentdrivedetails(w) {
                    return this.http.post(this.api + "/drive/getstudentdrivedetails", w, this.loginservice.options(null))
                }
                updateStudentdrive(w) {
                    return this.http.post(this.api + "/drive/updatestudentdrivedetails", w, this.loginservice.options(null))
                }
                additionalDetailsStudents(w) {
                    return this.http.post(this.api + "/drives/driveStudentAdditionalDetails", w, this.loginservice.options(null))
                }
                driveWarning(w) {
                    return this.http.post(this.api + "/drive/driveWarning", w, this.loginservice.options(null)).pipe((0,
                        e.K)(this.loginservice.handleError.bind(this)))
                }
                getDriveStudentBranch(w) {
                    return this.http.post(this.api + "/drive/student_branch", w, this.loginservice.options(null)).pipe((0,
                        e.K)(this.loginservice.handleError.bind(this)))
                }
                addDriveStudentResume(w) {
                    return this.http.post(this.api + "/drive/addDriveStudentResume", w, this.loginservice.options(null)).pipe((0,
                        e.K)(this.loginservice.handleError.bind(this)))
                }
                studentResumePublicURL(w) {
                    return this.http.post(this.api + "/drive/studentResumePublicURL", w, this.loginservice.options(null)).pipe((0,
                        e.K)(this.loginservice.handleError.bind(this)))
                }
                updateResponse(w) {
                    this.responseSubject.next(w)
                }
            }
            return N.\u0275fac = function (w) {
                return new (w || N)(C.LFG(O.eN), C.LFG(D.r), C.LFG(M.U))
            }
                ,
                N.\u0275prov = C.Yz7({
                    token: N,
                    factory: N.\u0275fac,
                    providedIn: "root"
                }),
                N
        }
        )()
    }
    ,
    4640: (G, $, i) => {
        "use strict";
        i.d($, {
            e: () => M
        });
        var n = i(2340)
            , e = i(1135)
            , x = i(262)
            , C = i(5e3)
            , O = i(520)
            , D = i(4120);
        let M = (() => {
            class I {
                constructor(T, w) {
                    this.http = T,
                        this.loginService = w,
                        this.api = n.N.HOST.link,
                        this.setFeed = new e.X({}),
                        this.recentHashtag = new e.X([]),
                        this.defaultqbimage = n.N.s3Objectstudentassets + "assets/common-images/market/Content.jpg",
                        this.defaulttestimage = n.N.s3Objectstudentassets + "assets/common-images/market/QuestionBank.jpg",
                        this.defaultcbimage = n.N.s3Objectstudentassets + "assets/common-images/market/Test.jpg",
                        this.defaultcourseimage = n.N.s3Objectstudentassets + "assets/common-images/market/Course.png"
                }
                createTextLinks(T) {
                    return (T || "").replace(/([^\S]|^)(((https?\:\/\/)|(www\.))(\S+))/gi, (w, g, S) => {
                        let c = S;
                        return c.match("^https?://") || (c = "https://" + c),
                            g + '<a href="' + c + '" target="_blank">' + S + "</a>"
                    }
                    )
                }
                formatpost(T) {
                    return (T || "").replace(/\n/g, "<br>")
                }
                getFeeds(T) {
                    return this.http.post(this.api + "/activity/getPublicfeeds", T)
                }
                getFeatureCourse(T) {
                    return this.http.post(this.api + "/student/listproducts", T)
                }
                getBoughtList(T) {
                    return this.http.post(this.api + "/products/boughtlist", T, this.loginService.options(null)).pipe((0,
                        x.K)(this.loginService.handleError.bind(this)))
                }
                getFeatureData(T) {
                    return this.http.post(this.api + "/student/listproductscount", T)
                }
                getFeatureDataWithJWT(T) {
                    return this.http.post(this.api + "/student/v2/listproductscount", T, this.loginService.options(null))
                }
                getRecentHashtags(T) {
                    return this.http.post(this.api + "/student/getrecenthashtags", T)
                }
                addactivity(T) {
                    return this.http.post(this.api + "/activity/addactivity", T, this.loginService.options(null))
                }
                addReaction(T) {
                    return this.http.post(this.api + "/activity/addReaction", T, this.loginService.options(null))
                }
                shareactivity(T) {
                    return this.http.post(this.api + "/activity/shareactivity", T, this.loginService.options(null))
                }
                removereaction(T) {
                    return this.http.post(this.api + "/activity/removereaction", T, this.loginService.options(null))
                }
                removeactivity(T) {
                    return this.http.post(this.api + "/activity/removeactivity", T, this.loginService.options(null))
                }
            }
            return I.\u0275fac = function (T) {
                return new (T || I)(C.LFG(O.eN), C.LFG(D.r))
            }
                ,
                I.\u0275prov = C.Yz7({
                    token: I,
                    factory: I.\u0275fac,
                    providedIn: "root"
                }),
                I
        }
        )()
    }
    ,
    7465: (G, $, i) => {
        "use strict";
        i.d($, {
            U: () => g
        });
        var n = i(7582)
            , e = i(520)
            , x = i(1135)
            , C = i(7579)
            , O = i(4004)
            , D = i(262)
            , M = i(2843)
            , I = i(2340)
            , N = i(5650)
            , w = i(5e3);
        let g = (() => {
            class S {
                constructor(o) {
                    this.http = o,
                        this.commonGrowl = new x.X({}),
                        this.verifiedOtp = !1,
                        this.api = I.N.HOST.link,
                        this.pdfApi = I.N.HOST.PDF_VALIDATOR,
                        this.abcSchool = ["2dc2d7d3-f10f-4f51-ba1e-148f87cd94d0", "158608c5-6868-4850-8baf-f1da3d041bb2"],
                        this.timezones = [{
                            label: "(GMT -12:00) Eniwetok, Kwajalein",
                            value: "-12:00"
                        }, {
                            label: "(GMT -11:00) Midway Island, Samoa",
                            value: "-11:00"
                        }, {
                            label: "(GMT -10:00) Hawaii",
                            value: "-10:00"
                        }, {
                            label: "(GMT -9:30) Taiohae",
                            value: "-09:30"
                        }, {
                            label: "(GMT -9:00) Alaska",
                            value: "-09:00"
                        }, {
                            label: "(GMT -8:00) Pacific Time (US & Canada)",
                            value: "-08:00"
                        }, {
                            label: "(GMT -7:00) Mountain Time (US & Canada)",
                            value: "-07:00"
                        }, {
                            label: "(GMT -6:00) Central Time (US & Canada), Mexico City",
                            value: "-06:00"
                        }, {
                            label: "(GMT -5:00) Eastern Time (US & Canada), Bogota, Lima",
                            value: "-05:00"
                        }, {
                            label: "(GMT -4:30) Caracas",
                            value: "-04:30"
                        }, {
                            label: "(GMT -4:00) Atlantic Time (Canada), Caracas, La Paz",
                            value: "-04:00"
                        }, {
                            label: "(GMT -3:30) Newfoundland",
                            value: "-03:30"
                        }, {
                            label: "(GMT -3:00) Brazil, Buenos Aires, Georgetown",
                            value: "-03:00"
                        }, {
                            label: "(GMT -2:00) Mid-Atlantic",
                            value: "-02:00"
                        }, {
                            label: "(GMT -1:00) Azores, Cape Verde Islands",
                            value: "-01:00"
                        }, {
                            label: "(GMT) Western Europe Time, London, Lisbon, Casablanca",
                            value: "+00:00"
                        }, {
                            label: "(GMT +1:00) Brussels, Copenhagen, Madrid, Paris",
                            value: "+01:00"
                        }, {
                            label: "(GMT +2:00) Kaliningrad, South Africa",
                            value: "+02:00"
                        }, {
                            label: "(GMT +3:00) Baghdad, Riyadh, Moscow, St. Petersburg",
                            value: "+03:00"
                        }, {
                            label: "(GMT +3:30) Tehran",
                            value: "+03:30"
                        }, {
                            label: "(GMT +4:00) Abu Dhabi, Muscat, Baku, Tbilisi",
                            value: "+04:00"
                        }, {
                            label: "(GMT +4:30) Kabul",
                            value: "+04:30"
                        }, {
                            label: "(GMT +5:00) Ekaterinburg, Islamabad, Karachi, Tashkent",
                            value: "+05:00"
                        }, {
                            label: "(GMT +5:30) Mumbai, Kolkata, Chennai, New Delhi",
                            value: "+05:30"
                        }, {
                            label: "(GMT +5:45) Kathmandu, Pokhara",
                            value: "+05:45"
                        }, {
                            label: "(GMT +6:00) Almaty, Dhaka, Colombo",
                            value: "+06:00"
                        }, {
                            label: "(GMT +6:30) Yangon, Mandalay",
                            value: "+06:30"
                        }, {
                            label: "(GMT +7:00) Bangkok, Hanoi, Jakarta",
                            value: "+07:00"
                        }, {
                            label: "(GMT +8:00) Beijing, Perth, Singapore, Hong Kong",
                            value: "+08:00"
                        }, {
                            label: "(GMT +8:45) Eucla",
                            value: "+08:45"
                        }, {
                            label: "(GMT +9:00) Tokyo, Seoul, Osaka, Sapporo, Yakutsk",
                            value: "+09:00"
                        }, {
                            label: "(GMT +9:30) Adelaide, Darwin",
                            value: "+09:30"
                        }, {
                            label: "(GMT +10:00) Eastern Australia, Guam, Vladivostok",
                            value: "+10:00"
                        }, {
                            label: "(GMT +10:30) Lord Howe Island",
                            value: "+10:30"
                        }, {
                            label: "(GMT +11:00) Magadan, Solomon Islands, New Caledonia",
                            value: "+11:00"
                        }, {
                            label: "(GMT +11:30) Norfolk Island",
                            value: "+11:30"
                        }, {
                            label: "(GMT +12:00) Auckland, Wellington, Fiji, Kamchatka",
                            value: "+12:00"
                        }, {
                            label: "(GMT +12:45) Chatham Islands",
                            value: "+12:45"
                        }, {
                            label: "(GMT +13:00) Apia, Nukualofa",
                            value: "+13:00"
                        }, {
                            label: "(GMT +14:00) Line Islands, Tokelau",
                            value: "+14:00"
                        }],
                        this.symbols = ["\xa1", "\xa2", "\xa3", "\xa4", "\xa5", "\xa6", "\xa7", "\xa8", "\xa9", "\xaa", "\xab", "\xac", "\xae", "\xaf", "\xb0", "\xb1", "\xb2", "\xb3", "\u2a2f", "\xb4", "\xb5", "\xb6", "\xb7", "\xb8", "\xb9", "\xba", "\xbb", "\xbc", "\xbd", "\xbe", "\xbf", "\xc0", "\xc1", "\xc2", "\xc3", "\xc4", "\xc5", "\xc6", "\xc7", "\xc8", "\xc9", "\xca", "\xcb", "\xcc", "\xcd", "\xce", "\xcf", "\xd0", "\xd1", "\xd2", "\xd3", "\xd4", "\xd5", "\xd6", "\xd7", "\xd8", "\xd9", "\xda", "\xdb", "\xdc", "\xdd", "\xde", "\xdf", "\xe0", "\xe1", "\xe2", "\xe3", "\xe4", "\xe5", "\xe6", "\xe7", "\xe8", "\xe9", "\xea", "\xeb", "\xec", "\xed", "\xee", "\xef", "\xf0", "\xf1", "\xf2", "\xf3", "\xf4", "\xf5", "\xf6", "\xf7", "\xf8", "\xf9", "\xfa", "\xfb", "\xfc", "\xfd", "\xfe", "\xff", "\u0100", "\u0101", "\u0102", "\u0103", "\u0104", "\u0105", "\u0106", "\u0107", "\u0108", "\u0109", "\u010a", "\u010b", "\u010c", "\u010d", "\u010e", "\u010f", "\u0110", "\u0111", "\u0112", "\u0113", "\u0116", "\u0117", "\u0118", "\u0119", "\u011a", "\u011b", "\u011c", "\u011d", "\u011e", "\u011f", "\u0120", "\u0121", "\u0122", "\u0124", "\u0125", "\u0126", "\u0127", "\u0128", "\u0129", "\u012a", "\u012b", "\u012e", "\u012f", "\u0130", "\u0131", "\u0132", "\u0133", "\u0134", "\u0135", "\u0136", "\u0137", "\u0138", "\u0139", "\u013a", "\u013b", "\u013c", "\u013d", "\u013e", "\u013f", "\u0140", "\u0141", "\u0142", "\u0143", "\u0144", "\u0145", "\u0146", "\u0147", "\u0148", "\u0149", "\u014a", "\u014b", "\u014c", "\u014d", "\u0150", "\u0151", "\u0152", "\u0153", "\u0154", "\u0155", "\u0156", "\u0157", "\u0158", "\u0159", "\u015a", "\u015b", "\u015c", "\u015d", "\u015e", "\u015f", "\u0160", "\u0161", "\u0162", "\u0163", "\u0164", "\u0165", "\u0166", "\u0167", "\u0168", "\u0169", "\u016a", "\u016b", "\u016c", "\u016d", "\u016e", "\u016f", "\u0170", "\u0171", "\u0172", "\u0173", "\u0174", "\u0175", "\u0176", "\u0177", "\u0178", "\u0179", "\u017a", "\u017b", "\u017c", "\u017d", "\u017e", "\u0192", "\u01b5", "\u01f5", "\u0237", "\u02c6", "\u02c7", "\u02d8", "\u02d9", "\u02da", "\u02db", "\u02dc", "\u039b", "\u03a0", "\u03a3", "\u03a6", "\u03a8", "\u03a9", "\u03b1", "\u03b2", "\u03b3", "\u03b4", "\u03b5", "\u03b6", "\u03b7", "\u03b8", "\u03b9", "\u03ba", "\u03bb", "\u03bc", "\u03bd", "\u03be", "\u03bf", "\u03c0", "\u03c1", "\u03c2", "\u03c3", "\u03c4", "\u03c5", "\u03c6", "\u03c7", "\u03c8", "\u03c9", "\u03d1", "\u03d2", "\u03d5", "\u03d6", "\u03dc", "\u03dd", "\u03f0", "\u03f1", "\u03f5", "\u03f6", "\u0401", "\u0402", "\u0403", "\u0404", "\u0405", "\u0406", "\u0407", "\u0408", "\u0409", "\u040a", "\u040b", "\u040c", "\u040e", "\u040f", "\u0410", "\u0411", "\u0412", "\u0413", "\u0414", "\u0415", "\u0416", "\u0417", "\u0418", "\u0419", "\u041a", "\u041b", "\u041c", "\u041d", "\u041e", "\u041f", "\u0420", "\u0421", "\u0422", "\u0423", "\u0424", "\u0425", "\u0426", "\u0427", "\u0428", "\u0429", "\u042a", "\u042b", "\u042c", "\u042d", "\u042e", "\u042f", "\u0430", "\u0431", "\u0432", "\u0433", "\u0434", "\u0435", "\u0436", "\u0437", "\u0438", "\u0439", "\u043a", "\u043b", "\u043c", "\u043d", "\u043e", "\u043f", "\u0440", "\u0441", "\u0442", "\u0443", "\u0444", "\u0445", "\u0446", "\u0447", "\u0448", "\u0449", "\u044a", "\u044b", "\u044c", "\u044d", "\u044e", "\u044f", "\u0451", "\u0452", "\u0453", "\u0454", "\u0455", "\u0456", "\u0457", "\u0458", "\u0459", "\u045a", "\u045b", "\u045c", "\u045e", "\u045f", "\u2010", "\u2013", "\u2014", "\u2015", "\u2016", "\u2018", "\u2019", "\u201a", "\u201c", "\u201d", "\u201e", "\u2020", "\u2021", "\u2022", "\u2025", "\u2026", "\u2030", "\u2031", "\u2032", "\u2033", "\u2034", "\u2035", "\u2039", "\u203a", "\u203e", "\u2041", "\u2043", "\u2044", "\u204f", "\u2057", "\u20ac", "\u2105", "\u2116", "\u2117", "\u211d", "\u211e", "\u2122", "\u2124", "\u2126", "\u2127", "\u2128", "\u2129", "\u212b", "\u2135", "\u2136", "\u2137", "\u2138", "\u2153", "\u2154", "\u2155", "\u2156", "\u2157", "\u2158", "\u2159", "\u215a", "\u215b", "\u215c", "\u215d", "\u215e", "\u2190", "\u2191", "\u2192", "\u2193", "\u2194", "\u2195", "\u2196", "\u2197", "\u2198", "\u2199", "\u219a", "\u219b", "\u219d", "\u219e", "\u219f", "\u21a0", "\u21a1", "\u21a2", "\u21a3", "\u21a4", "\u21a5", "\u21a6", "\u21a7", "\u21a9", "\u21aa", "\u21ab", "\u21ac", "\u21ad", "\u21ae", "\u21b0", "\u21b1", "\u21b2", "\u21b3", "\u21b5", "\u21b6", "\u21b7", "\u21ba", "\u21bb", "\u21bc", "\u21bd", "\u21be", "\u21bf", "\u21c0", "\u21c1", "\u21c2", "\u21c3", "\u21c4", "\u21c5", "\u21c6", "\u21c7", "\u21c8", "\u21c9", "\u21ca", "\u21cb", "\u21cc", "\u21cd", "\u21ce", "\u21cf", "\u21d0", "\u21d1", "\u21d2", "\u21d3", "\u21d4", "\u21d5", "\u21d6", "\u21d7", "\u21d8", "\u21d9", "\u21da", "\u21db", "\u21dd", "\u21e4", "\u21e5", "\u21f5", "\u21fd", "\u21fe", "\u21ff", "\u2200", "\u2201", "\u2202", "\u2203", "\u2204", "\u2205", "\u2207", "\u2208", "\u2209", "\u220b", "\u220c", "\u220f", "\u2210", "\u2211", "\u2212", "\u2213", "\u2214", "\u2216", "\u2217", "\u2218", "\u221a", "\u221d", "\u221e", "\u221f", "\u2220", "\u2221", "\u2222", "\u2223", "\u2224", "\u2225", "\u2226", "\u2227", "\u2228", "\u2229", "\u222a", "\u222b", "\u222c", "\u222d", "\u222e", "\u222f", "\u2230", "\u2231", "\u2232", "\u2233", "\u2234", "\u2235", "\u2236", "\u2237", "\u2238", "\u223a", "\u223b", "\u223c", "\u223d", "\u223e", "\u223f", "\u2240", "\u2241", "\u2242", "\u2243", "\u2244", "\u2245", "\u2246", "\u2247", "\u2248", "\u2249", "\u224a", "\u224b", "\u224c", "\u224d", "\u224e", "\u224f", "\u2250", "\u2251", "\u2252", "\u2253", "\u2254", "\u2255", "\u2256", "\u2257", "\u2259", "\u225a", "\u225c", "\u225f", "\u2260", "\u2261", "\u2262", "\u2264", "\u2265", "\u2266", "\u2267", "\u2268", "\u2269", "\u226a", "\u226b", "\u226c", "\u226d", "\u226e", "\u226f", "\u2270", "\u2271", "\u2272", "\u2273", "\u2274", "\u2275", "\u2276", "\u2277", "\u2278", "\u2279", "\u227a", "\u227b", "\u227c", "\u227d", "\u227e", "\u227f", "\u2280", "\u2281", "\u2282", "\u2283", "\u2284", "\u2285", "\u2286", "\u2287", "\u2288", "\u2289", "\u228a", "\u228b", "\u228d", "\u228e", "\u228f", "\u2290", "\u2291", "\u2292", "\u2293", "\u2294", "\u2295", "\u2296", "\u2297", "\u2298", "\u2299", "\u229a", "\u229b", "\u229d", "\u229e", "\u229f", "\u22a0", "\u22a1", "\u22a2", "\u22a3", "\u22a4", "\u22a5", "\u22a7", "\u22a8", "\u22a9", "\u22aa", "\u22ab", "\u22ac", "\u22ad", "\u22ae", "\u22af", "\u22b0", "\u22b2", "\u22b3", "\u22b4", "\u22b5", "\u22b6", "\u22b7", "\u22b8", "\u22b9", "\u22ba", "\u22bb", "\u22bd", "\u22be", "\u22bf", "\u22c0", "\u22c1", "\u22c2", "\u22c3", "\u22c4", "\u22c5", "\u22c6", "\u22c7", "\u22c8", "\u22c9", "\u22ca", "\u22cb", "\u22cc", "\u22cd", "\u22ce", "\u22cf", "\u22d0", "\u22d1", "\u22d2", "\u22d3", "\u22d4", "\u22d5", "\u22d6", "\u22d7", "\u22d8", "\u22d9", "\u22da", "\u22db", "\u22de", "\u22df", "\u22e0", "\u22e1", "\u22e2", "\u22e3", "\u22e6", "\u22e7", "\u22e8", "\u22e9", "\u22ea", "\u22eb", "\u22ec", "\u22ed", "\u22ee", "\u22ef", "\u22f0", "\u22f1", "\u22f2", "\u22f3", "\u22f4", "\u22f5", "\u22f6", "\u22f7", "\u22f9", "\u22fa", "\u22fb", "\u22fc", "\u22fd", "\u22fe", "\u2305", "\u2306", "\u2308", "\u2309", "\u230a", "\u230b", "\u230c", "\u230d", "\u230e", "\u230f", "\u2310", "\u2312", "\u2313", "\u2315", "\u2316", "\u231c", "\u231d", "\u231e", "\u231f", "\u2322", "\u2323", "\u232d", "\u232e", "\u2336", "\u233d", "\u233f", "\u237c", "\u23b0", "\u23b1", "\u23b4", "\u23b5", "\u23b6", "\u23dc", "\u23dd", "\u23df", "\u23e2", "\u23e7", "\u2423", "\u24c8", "\u2500", "\u2502", "\u250c", "\u2510", "\u2514", "\u2518", "\u251c", "\u2524", "\u252c", "\u2534", "\u253c", "\u2550", "\u2551", "\u2552", "\u2553", "\u2554", "\u2555", "\u2556", "\u2557", "\u2558", "\u2559", "\u255a", "\u255b", "\u255c", "\u255d", "\u255e", "\u255f", "\u2560", "\u2561", "\u2562", "\u2563", "\u2564", "\u2565", "\u2566", "\u2567", "\u2568", "\u2569", "\u25a1", "\u25aa", "\u25ab", "\u25ad", "\u25ae", "\u25b1", "\u25b3", "\u25b4", "\u25b5", "\u25b8", "\u25b9", "\u25bd", "\u25be", "\u25bf", "\u25c2", "\u25c3", "\u25ca", "\u25cb", "\u25ec", "\u25ef", "\u25f8", "\u25f9", "\u25fa", "\u25fb", "\u25fc", "\u2605", "\u2606", "\u2640", "\u2642", "\u2660", "\u2663", "\u2665", "\u2666", "\u266a", "\u266d", "\u266e", "\u266f", "\u2713", "\u2717", "\u2720", "\u2736", "\u2758", "\u27f5", "\u27f6", "\u27f7", "\u27f8", "\u27f9", "\u27fa", "\u27fc", "\u27ff", "\u2902", "\u2903", "\u2904", "\u2905", "\u290c", "\u290d", "\u290e", "\u290f", "\u2910", "\u2911", "\u2912", "\u2913", "\u2916", "\u2919", "\u291a", "\u291b", "\u291c", "\u291d", "\u291e", "\u291f", "\u2920", "\u2923", "\u2924", "\u2925", "\u2926", "\u2927", "\u2928", "\u2929", "\u292a", "\u2933", "\u2935", "\u2936", "\u2937", "\u2938", "\u2939", "\u293c", "\u293d", "\u2945", "\u2948", "\u2949", "\u294a", "\u294b", "\u294e", "\u294f", "\u2950", "\u2951", "\u2952", "\u2953", "\u2954", "\u2955", "\u2956", "\u2957", "\u2958", "\u295a", "\u295b", "\u295c", "\u295d", "\u295e", "\u295f", "\u2961", "\u2962", "\u2963", "\u2964", "\u2965", "\u2966", "\u2967", "\u2968", "\u2969", "\u296a", "\u296b", "\u296c", "\u296d", "\u296e", "\u296f", "\u2970", "\u2971", "\u2972", "\u2973", "\u2974", "\u2975", "\u29b3", "\u29b4", "\u29b5", "\u29b6", "\u29b7", "\u29b9", "\u29bb", "\u29bc", "\u29be", "\u29bf", "\u29c0", "\u29c1", "\u29c2", "\u29c3", "\u29c4", "\u29c5", "\u29c9", "\u29cd", "\u29ce", "\u29cf", "\u29d0", "\u29da", "\u29dc", "\u29dd", "\u29de", "\u29eb", "\u29f4", "\u29f6", "\u2a00", "\u2a01", "\u2a02", "\u2a04", "\u2a06", "\u2a0c", "\u2a0d", "\u2a10", "\u2a11", "\u2a12", "\u2a13", "\u2a14", "\u2a15", "\u2a16", "\u2a17", "\u2a22", "\u2a23", "\u2a24", "\u2a25", "\u2a26", "\u2a27", "\u2a29", "\u2a2a"],
                        this.api_link = I.N.HOST.link,
                        this.showTop = new x.X(!1),
                        this.showHeader = new x.X(!1),
                        this.enableSignUp = new x.X(!1),
                        this.activetab = new x.X(""),
                        this.isSignup = new x.X(!1),
                        this.ispublicCourse = new x.X(!1),
                        this.isPublicFeeds = new x.X(!1),
                        this.isPublicFeedsandCourses = new x.X(!1),
                        this.isAllowFeedsMAin = new x.X(!1),
                        this.logoutTrigger = new x.X(!1),
                        this.cartTotalItems = new x.X(0),
                        this.search = new x.X({}),
                        this.schoolLogo = new x.X(""),
                        this.schoolName = new x.X(""),
                        this.publishType = new x.X(""),
                        this.confirmFlag = new x.X(!1),
                        this.confirmFlagLogOff = new x.X(!1),
                        this.previousUrl = "/",
                        this.loginUrls = ["/attendancesettings", "/course", "/cart", "/accountsettings", "/dashboard"],
                        this.publicUrls = ["/result", "/contest/public", "/setpassword", "/forgot", "contest/account", "/loginredirect", "/course/product", "/resetpassword", "/mycourses/details", "/mydrivedetails", "/mycdetails", "/test", "no-network", "/compiler-instruction"],
                        this.sidebarVisibilityChange = new C.x,
                        this.triggerMethodSubject = new C.x,
                        this.searchUrl = "",
                        this.contestToTestSchoolId = ["a8037be9-b7d2-4a86-ae87-9b160f7c81a9", "69cb8138-b47b-4cd0-98b8-44dbd5da2b3c", "e50db77c-513c-4486-a2a8-bfdb1aba3fa4"],
                        this.triggerMethod$ = this.triggerMethodSubject.asObservable(),
                        I.N.production ? (this.bucket = "exams-media",
                            this.verify_img_bucket = "prod-student-verification-images",
                            this.assets_bucket = "prod-users-asset",
                            this.proctoring_bucket = "prod-proctoring-screen",
                            this.drive_bucket = "examly-data",
                            this.content_bucket = "exams-media-content",
                            this.hirebucket = "neo-hire",
                            this.vimeoTempBucket = "prod-video-answer-vimeo") : (this.bucket = "exams-media-stage",
                                this.verify_img_bucket = "dev-student-verification-images",
                                this.assets_bucket = "dev-users-asset",
                                this.proctoring_bucket = "dev-proctoring-screen",
                                this.drive_bucket = "examly-data-stage",
                                this.content_bucket = "exams-media-content",
                                this.hirebucket = "neo-hire",
                                this.vimeoTempBucket = "dev-video-answer-vimeo")
                }
                triggerMethod() {
                    this.triggerMethodSubject.next()
                }
                addGoogleAnalytics() {
                    return new Promise((o, t) => {
                        if (!document.getElementById("google-analytics") && I.N.g_measurement_id) {
                            const s = document.createElement("script");
                            s.src = `https://www.googletagmanager.com/gtag/js?id=${I.N.g_measurement_id}`,
                                s.type = "text/javascript",
                                s.id = "google-analytics",
                                document.getElementsByTagName("head")[0].appendChild(s),
                                s.onload = () => {
                                    const a = document.createElement("script");
                                    a.text = `window.dataLayer = window.dataLayer || [];\n            function gtag(){dataLayer.push(arguments);}\n            gtag('js', new Date());\n            gtag('config', '${I.N.g_measurement_id}');`,
                                        s.append(a),
                                        o(!0)
                                }
                                ,
                                s.onerror = () => {
                                    o(!1)
                                }
                        } else
                            o(!0)
                    }
                    )
                }
                pathConfigGA() {
                    document.getElementById("google-analytics") && I.N.g_measurement_id && window.dataLayer && gtag("config", I.N.g_measurement_id, {
                        page_path: location.pathname
                    })
                }
                userConfigGA(o) {
                    document.getElementById("google-analytics") && I.N.g_measurement_id && window.dataLayer && gtag("config", I.N.g_measurement_id, {
                        user_id: `student-${o}`
                    })
                }
                eventEmitterGA(o, t) {
                    document.getElementById("google-analytics") && I.N.g_measurement_id && window.dataLayer && gtag("event", o, t)
                }
                toggleVisibility() {
                    this.sidebarVisibilityChange.next(!1)
                }
                getUserToken() {
                    const o = JSON.parse(localStorage.getItem("token"));
                    return o && o.token ? o.token : ""
                }
                sleepInMs(o = 1e3) {
                    return new Promise(t => {
                        setTimeout(() => {
                            t(!0)
                        }
                            , o)
                    }
                    )
                }
                base64ToJson(o) {
                    const t = atob(o);
                    return JSON.parse(t)
                }
                options(o) {
                    return {
                        headers: new e.WM({
                            "Content-Type": "application/json",
                            Authorization: o && o.token ? o.token : this.getUserToken()
                        })
                    }
                }
                getSchoolLoginDetails() {
                    return this.http.get(this.api_link + "/school/login")
                }
                getSignedUrl(o) {
                    return this.http.post(this.api_link + "/getsignedurl", o, this.options(null))
                }
                getPrivateSignedDownloadUrl(o) {
                    return this.http.post(this.api_link + "/getprivatesigneddownloadurl", o, this.options(null))
                }
                getSignedDownloadUrlWIthoutAuthorization(o) {
                    return this.http.post(this.api_link + "/getSignedDownloadUrlWIthoutAuthorization", o, this.options(null))
                }
                getGSignedUrl(o) {
                    return this.http.post(this.api_link + "/getGSignedUrl", o, this.options(null))
                }
                uploadUsingSignedUrl(o, t) {
                    return this.http.put(o, t, {
                        observe: "response"
                    })
                }
                deleteFaceverification(o) {
                    return this.http.post(this.api_link + "/deleteFaceverification", o, this.options(null))
                }
                uploadUsingSignedUrlWithProgress(o, t) {
                    return this.http.put(o, t, {
                        observe: "events",
                        reportProgress: !0
                    }).pipe((0,
                        O.U)(s => this.getUploadStatus(s)), (0,
                            D.K)(s => this.uploadError(s)))
                }
                getUploadStatus(o) {
                    switch (o.type) {
                        case e.dt.Sent:
                            return {
                                severity: "warn",
                                status: "Upload started"
                            };
                        case e.dt.UploadProgress:
                            return {
                                severity: "warn",
                                status: `Uploading: (${Math.round(100 * o.loaded / o.total)}%)`
                            };
                        case e.dt.Response:
                            return {
                                severity: "success",
                                status: "Upload completed"
                            };
                        default:
                            return {
                                severity: "error",
                                status: "Upload failed!"
                            }
                    }
                }
                uploadError(o) {
                    let t = {
                        severity: "error",
                        status: "Upload failed. Try again later"
                    };
                    return o.error instanceof ErrorEvent && (t = {
                        severity: "error",
                        status: "Network error. Upload failed"
                    }),
                        (0,
                            M._)(t)
                }
                uploadGCPUsingSignedUrl(o, t) {
                    const s = new e.WM({});
                    return s.set("Content-Type", t && t.type ? t.type : "application/octet-stream"),
                        this.http.put(o, t, {
                            headers: s,
                            observe: "response"
                        })
                }
                uploadGCPUsingSignedUrlWithProgress(o, t) {
                    const s = new e.WM({});
                    return s.set("Content-Type", t && t.type ? t.type : "application/octet-stream"),
                        this.http.put(o, t, {
                            headers: s,
                            observe: "events",
                            reportProgress: !0,
                            params: {
                                "ngsw-bypass": "true"
                            }
                        }).pipe((0,
                            O.U)(a => this.getUploadStatus(a)), (0,
                                D.K)(a => this.uploadError(a)))
                }
                convert_IST_TO_EPOCH(o) {
                    return new Date(o).getTime()
                }
                getBranchName() {
                    const o = JSON.parse(localStorage.getItem("token"));
                    return o && o.purpose && o.institute_type ? "Placement Process App" === o.purpose ? "Campus" : "Exams App" === o.purpose && "training_institute" !== o.institute_type ? "Colleges / Schools" : "Branch" : "Branch"
                }
                school_code() {
                    return JSON.parse(localStorage.getItem("school_details")).school_code
                }
                sendPushDetails(o) {
                    return o.school_code = this.school_code(),
                        this.http.post(this.api_link + "/users/sendpushmsg", o, this.options(null)).pipe((0,
                            D.K)(this.handleError))
                }
                sendPushToken(o) {
                    return this.http.post(this.api_link + "/users/sendpushtoken", o, this.options(null))
                }
                updateLoginURLS(o, t) {
                    o && o.allow_drives && this.loginUrls.push("/drives"),
                        o && (o.allow_courses || o.allow_course_projects || o.allow_learning_paths || o.allow_practices || o.allow_quizzes || o.allow_exams || o.allow_lab_courses || o.allow_hackathons || o.allow_challenges || o.allow_company_specific_tests || o.allow_assessments) && this.loginUrls.push("/mycourses"),
                        (o && o.allow_dashboard && o.enableTwoFactorAuthentication && this.verifiedOtp || o && o.allow_dashboard && !o.enableTwoFactorAuthentication) && this.loginUrls.push("/dashboard"),
                        o && o.allow_leaderboard && this.loginUrls.push("/leaderboard"),
                        o && o.allow_contest && this.loginUrls.push("/mycontest"),
                        o && o.allowselling && this.loginUrls.push("/course"),
                        o && o.allow_certificates && this.loginUrls.push("/certificates"),
                        (!o || !o.disableProfile) && this.loginUrls.push("/profile")
                }
                defaultRedirection() {
                    let o = JSON.parse(localStorage.getItem("school_details"));
                    o = !(!o || !o.schools_metadata) && o.schools_metadata;
                    const t = JSON.parse(localStorage.getItem("token"))
                        , s = localStorage.getItem("path");
                    switch (!0) {
                        case s && s.includes("contest") && o && o.allow_contest:
                            return "/mycontest";
                        case s && s.includes("drives") && o && o.allow_drives:
                            return "/drives";
                        case s && s.includes("project?id") && t && t.enableFeatures && t.enableFeatures.allow_projects:
                        case s && s.includes("QR-code-scanner?qr_id"):
                            return s;
                        case s && s.includes("profile") && (!o || !o.disableProfile):
                            return "/profile";
                        case 0 === t.phone_verified && "/otpverification" !== window.location.pathname && o.notifyStudents:
                            return "/otpverification";
                        case o && o.allow_dashboard && o.enableTwoFactorAuthentication && this.verifiedOtp || o && o.allow_dashboard && !o.enableTwoFactorAuthentication:
                            return "/dashboard";
                        case o && o.allow_courses && o.enableTwoFactorAuthentication && this.verifiedOtp || o && o.allow_courses && !o.enableTwoFactorAuthentication:
                            return "/mycourses?type=mycourses";
                        case o && o.allow_contest && o.enableTwoFactorAuthentication && this.verifiedOtp || o && o.allow_contest && !o.enableTwoFactorAuthentication:
                            return "/mycontest";
                        case o && o.allow_drives && o.enableTwoFactorAuthentication && this.verifiedOtp || o && o.allow_drives && !o.enableTwoFactorAuthentication:
                            return "/drives";
                        case s && s.includes("type=mycourses") && o && o.allow_courses || o && o.allow_courses:
                            return "/mycourses?type=mycourses";
                        case s && s.includes("type=mylearningpaths") && o && o.allow_learning_paths || o && o.allow_learning_paths:
                            return "/mycourses?type=mylearningpaths";
                        case s && s.includes("type=mypractices") && o && o.allow_practices || o && o.allow_practices:
                            return "/mycourses?type=mypractices";
                        case s && s.includes("type=myprojects") && o && o.allow_course_projects || o && o.allow_course_projects:
                            return "/mycourses?type=myprojects";
                        case s && s.includes("type=myhackathons") && o && o.allow_hackathons || o && o.allow_hackathons:
                            return "/mycourses?type=myhackathons";
                        case s && s.includes("type=myquizzes") && o && o.allow_quizzes || o && o.allow_quizzes:
                            return "/mycourses?type=myquizzes";
                        case s && s.includes("type=myexams") && o && o.allow_exams || o && o.allow_exams:
                            return "/mycourses?type=myexams";
                        case s && s.includes("type=myassessments") && o && o.allow_assessments || o && o.allow_assessments:
                            return "/mycourses?type=myassessments";
                        case s && s.includes("type=mylabs") && o && o.allow_lab_courses || o && o.allow_lab_courses:
                            return "/mycourses?type=mylabs";
                        case s && s.includes("type=mychallenges") && o && o.allow_challenges || o && o.allow_challenges:
                            return "/mycourses?type=mychallenges";
                        case s && s.includes("type=mytests") && o && o.allow_company_specific_tests || o && o.allow_company_specific_tests:
                            return "/mycourses?type=mytests";
                        case s && s.includes("type=mytests2") && o && o.allow_company_specific_tests || o && o.allow_company_specific_tests:
                            return "/mycourses?type=mytests2";
                        default:
                            return "/accountsettings"
                    }
                }
                timezone(o, t) {
                    let s = "+" === t.charAt(0)
                        , a = (t = t.replace(s ? "+" : "-", "")).split(":")
                        , r = parseInt(a[0])
                        , p = parseInt(a[1]);
                    return o = (o = new Date(o)).setTime(o.getTime() + 60 * o.getTimezoneOffset() * 1e3),
                        o = new Date(o),
                        s ? (o = new Date(o.setHours(o.getHours() + r)),
                            o = new Date(o.setMinutes(o.getMinutes() + p))) : (o = new Date(o.setHours(o.getHours() - r)),
                                o = new Date(o.setMinutes(o.getMinutes() - p))),
                        o
                }
                getPlatformSettings(o) {
                    return this.http.post(this.api_link + "/school/getPlatformSettings", o, this.options(null)).pipe((0,
                        D.K)(this.handleError.bind(this)))
                }
                setEnabledFeatures(o) {
                    const t = JSON.parse(localStorage.getItem("token"));
                    t && o && (t.enable_features = o,
                        localStorage.setItem("token", JSON.stringify(t)))
                }
                getSetEnabledFeatures() {
                    if (localStorage.getItem("token")) {
                        const t = {
                            school_id: JSON.parse(localStorage.getItem("token")).school_id
                        };
                        this.getPlatformSettings(t).subscribe(s => {
                            s && s.enabledFeatures && this.setEnabledFeatures(s.enabledFeatures)
                        }
                        )
                    }
                }
                setEnableFeatures() {
                    this.getSetEnabledFeatures()
                }
                resetToken() {
                    this.getSetEnabledFeatures(),
                        setInterval(() => this.getSetEnabledFeatures(), 3e5)
                }
                publicNavigation(o, t) {
                    let s = "/login";
                    return this.ispublicCourse.next(!1),
                        o.allow_public_buying ? (this.ispublicCourse.next(!0),
                            s = "/course") : this.ispublicCourse.next(!1),
                        s
                }
                loadCaptchaScript(o) {
                    return new Promise((t, s) => (0,
                        n.mG)(this, void 0, void 0, function* () {
                            const a = "https://www.google.com/recaptcha/api.js?render=" + o;
                            if (document.querySelector('script[src^="https://www.gstatic.com/recaptcha"]'))
                                t({
                                    script: o,
                                    loaded: !0,
                                    status: "Loaded"
                                });
                            else {
                                const p = {
                                    script: o,
                                    loaded: !0,
                                    status: "Loaded"
                                }
                                    , d = {
                                        script: o,
                                        loaded: !1,
                                        status: "Loaded"
                                    };
                                yield this.loadScript("script", a, "text/javascript", "", "captcha", [], !0, p, d).then(u => {
                                    t(u)
                                }
                                ).catch(u => {
                                    console.error(u)
                                }
                                )
                            }
                        }))
                }
                getCaptchaToken(o) {
                    return new Promise(t => {
                        if (o)
                            try {
                                const s = JSON.parse(localStorage.getItem("school_details"));
                                s && s.captcha ? window.grecaptcha ? this.reCaptcha(s, o, t) : this.loadCaptchaScript(s.captcha).then(a => {
                                    let r = setInterval(() => {
                                        window.grecaptcha && (clearInterval(r),
                                            this.reCaptcha(s, o, t))
                                    }
                                        , 500)
                                }
                                ) : this.getSchoolLoginDetails().subscribe(a => {
                                    a && a.data && a.data.captcha ? this.loadCaptchaScript(a.data.captcha).then(r => {
                                        let p = setInterval(() => {
                                            window.grecaptcha && (clearInterval(p),
                                                window.grecaptcha.ready(() => {
                                                    window.grecaptcha.execute(a.data.captcha, {
                                                        action: o
                                                    }).then(d => {
                                                        t(d)
                                                    }
                                                    )
                                                }
                                                ))
                                        }
                                            , 500)
                                    }
                                    ) : t("")
                                }
                                )
                            } catch (s) {
                                t(!1)
                            }
                        else
                            t("")
                    }
                    )
                }
                reCaptcha(o, t, s) {
                    window.grecaptcha.ready(() => {
                        window.grecaptcha.execute(o.captcha, {
                            action: t
                        }).then(a => {
                            s(a)
                        }
                        )
                    }
                    )
                }
                loadScript(o, t, s, a, r, p, d, u, v) {
                    return new Promise((y, f) => (0,
                        n.mG)(this, void 0, void 0, function* () {
                            if (document.getElementById(r))
                                y(!0);
                            else {
                                const E = document.createElement(o);
                                "link" === o ? (E.href = t,
                                    E.rel = "stylesheet") : "script" === o && (E.src = t),
                                    d && (E.defer = d),
                                    u && (E.onload = y(u)),
                                    v && (E.onerror = y(v)),
                                    "MathJax" === r && (yield this.loadMathDelimiter()),
                                    E.type = s,
                                    document.getElementsByTagName("head")[0].appendChild(E),
                                    E.onload = () => {
                                        if (E.id = r,
                                            "shaka" === r)
                                            shaka.polyfill.installAll();
                                        else if (p && p.length) {
                                            const R = [];
                                            p.forEach(A => {
                                                R.push(this.loadScript(A.element, A.url, A.type, A.rel, A.id, A.child))
                                            }
                                            ),
                                                Promise.all(R).then(() => {
                                                    y(!0)
                                                }
                                                )
                                        } else
                                            y(!0)
                                    }
                                    ,
                                    E.onerror = () => {
                                        f(!1)
                                    }
                            }
                        }))
                }
                loadMathDelimiter() {
                    return new Promise((o, t) => {
                        const s = document.createElement("script");
                        s.text = "MathJax = {\n    tex: {\n      inlineMath: [['$', '$']]\n    },\n    svg: {\n      fontCache: 'global'\n    }\n  };",
                            document.getElementsByTagName("head")[0].appendChild(s),
                            o(!0)
                    }
                    )
                }
                clearLocalStorage() {
                    localStorage.removeItem("token"),
                        localStorage.removeItem("ssologin"),
                        this.logoutTrigger.next(!0);
                    for (let t = localStorage.length - 1; t > -1; t -= 1) {
                        const s = localStorage.key(t);
                        s && "session_data" !== s && "school_details" !== s && localStorage.removeItem(s)
                    }
                }
                uniqBy(o, t) {
                    const s = "function" == typeof t ? t : a => a[t];
                    return [...o.reduce((a, r) => {
                        const p = null == r ? r : s(r);
                        return a.has(p) || a.set(p, r),
                            a
                    }
                        , new Map).values()]
                }
                roundDigit(o, t) {
                    return Math.floor(o * Math.pow(10, t)) / Math.pow(10, t)
                }
                addZeroInfront(o) {
                    return o < 0 || o > 9 ? o : "0" + o
                }
                sleep(o) {
                    return new Promise((t, s) => {
                        setTimeout(() => {
                            t()
                        }
                            , o)
                    }
                    )
                }
                inIframe() {
                    try {
                        return window.self !== window.top
                    } catch (o) {
                        return !0
                    }
                }
                getResultfromRedis(o) {
                    return this.http.post(this.api_link + "/xor1pE8aM9R", o, this.options(null))
                }
                getMentorDetails(o) {
                    return this.http.post(this.api_link + "/users/getMentorDetails", o, this.options(null))
                }
                neoPATRedirection(o) {
                    return this.http.post(this.api_link + "/nSdo1IkS8d0", o, this.options(null))
                }
                getHtml2Canvas() {
                    return (0,
                        n.mG)(this, void 0, void 0, function* () {
                            if (!this.html2canvas) {
                                const o = {
                                    element: "script",
                                    url: "https://images.examly.io/scripts/html2canvas/html2canvas.js",
                                    type: "text/javascript",
                                    rel: "",
                                    id: "html2canvas"
                                };
                                yield this.loadScript(o.element, o.url, o.type, o.rel, o.id),
                                    this.html2canvas = html2canvas
                            }
                            return this.html2canvas
                        })
                }
                getjsPDF() {
                    return (0,
                        n.mG)(this, void 0, void 0, function* () {
                            if (!this.jspdf) {
                                const o = {
                                    element: "script",
                                    url: "https://images.examly.io/scripts/jsPDF/jspdf.js",
                                    type: "text/javascript",
                                    rel: "",
                                    id: "jspdf"
                                };
                                yield this.loadScript(o.element, o.url, o.type, o.rel, o.id),
                                    this.jspdf = jspdf
                            }
                            return this.jspdf
                        })
                }
                handleError(o) {
                    return (0,
                        n.mG)(this, void 0, void 0, function* () {
                            if (!(o.error instanceof ErrorEvent)) {
                                let t, s = !1;
                                try {
                                    t = JSON.parse(localStorage.getItem("ssologin"))
                                } catch (a) {
                                    t = null
                                }
                                (o && 401 === o.status || 406 === o.status) && !t && (401 === o.status && (this.commonGrowl.next({
                                    severity: "error",
                                    summary: "Session expired!",
                                    detail: "Refresh and try logging in again",
                                    note: ""
                                }),
                                    s = !0),
                                    406 === o.status && (this.setRedirectionToLogin(),
                                        s = yield this.getconfirmation()),
                                    s && (localStorage.clear(),
                                        setTimeout(() => {
                                            const a = window.location.host;
                                            "app.examly.net" === a || "app.exam.ly" === a || "app.examly.io" === a || "app.examly.test" === a.split(":")[0] ? "/admin/login" !== window.location.pathname && (window.location.href = "/admin/login") : "/login" !== window.location.pathname && (window.location.href = "/login")
                                        }
                                            , 1e3)),
                                    this.resetRedirectionToLogin())
                            }
                            return (0,
                                M._)("Something bad happened; Please try again later.")
                        })
                }
                getconfirmation() {
                    return new Promise((o, t) => (0,
                        n.mG)(this, void 0, void 0, function* () {
                            this.confirmFlag.next(!0),
                                this.confirmFlagLogOff.subscribe(s => {
                                    s && o(!0)
                                }
                                )
                        }))
                }
                blockRedirection() {
                    localStorage.removeItem("noRedirect"),
                        localStorage.setItem("noRedirect", JSON.stringify({
                            noRedirection: !0
                        }))
                }
                setRedirectionToLogin() {
                    localStorage.removeItem("redirect"),
                        localStorage.setItem("redirect", JSON.stringify({
                            redirect: "Login"
                        }))
                }
                resetRedirectionToLogin() {
                    localStorage.removeItem("redirect")
                }
                checkMyMeetingReminder() {
                    return this.http.post(this.api_link + "/live_session/checkMyMeetReminder", {}, this.options(null)).pipe((0,
                        D.K)(this.handleError.bind(this)))
                }
                checkValidFile(o) {
                    return new Promise((t, s) => {
                        const a = new FileReader;
                        a.onload = function (r) {
                            r.target.result.substr(0, 8).match(/%PDF-1.[0-7]/) ? t(!0) : s(!1)
                        }
                            ,
                            a.readAsText(o)
                    }
                    )
                }
                convertImageUrlToBase64(o) {
                    return new Promise((t, s) => {
                        this.http.get(o, {
                            responseType: "blob"
                        }).subscribe(a => {
                            this.blobToBase64(a).then(r => {
                                r = JSON.parse(JSON.stringify(r)),
                                    t(r)
                            }
                            )
                        }
                        )
                    }
                    )
                }
                loadDragScript() {
                    let o = document.createElement("script");
                    o.type = "text/javascript",
                        o.async = !0,
                        o.src = "https://images.examly.io/scripts/drag-script.js",
                        o.id = "dynamic_drag_script",
                        document.body.appendChild(o)
                }
                removeDragScript() {
                    let o = document.getElementById("dynamic_drag_script");
                    null != o && o.remove()
                }
                blobToBase64(o) {
                    return new Promise((t, s) => {
                        const a = new FileReader;
                        a.onloadend = () => t(a.result),
                            a.readAsDataURL(o)
                    }
                    )
                }
                getAdmissionReportSchoolDetailsForStudents(o) {
                    return this.http.post(this.api_link + "/school/getAdmissionReportSchoolDetailsForStudents", o).pipe((0,
                        D.K)(this.handleError.bind(this)))
                }
                generateSsoQrUrl(o, t) {
                    let s = o[0] + "//" + o[2] + "/loginredirect/QR-code-scanner?qr_id=" + t.data
                        , a = JSON.parse(localStorage.getItem("ssologintoken"))
                        , r = JSON.parse(localStorage.getItem("token"))
                        , p = JSON.parse(localStorage.getItem("school_details"));
                    return s = `${s}&tokenid=${a.token}&email=${r.email}&school_code=${p.school_code}`,
                        s
                }
                changeS3bucket(o, t, s = this.bucket) {
                    return o && o.includes(s + "/") && (o = o.replace(new RegExp(s + "/", "g"), t + "/")),
                        o
                }
                switchBucket(o, t) {
                    return JSON.parse(this.changeS3bucket(JSON.stringify(o), t))
                }
                sentenceCase(o) {
                    return (o = (o = null == o ? "" : o).toLowerCase()).toString().replace(/(^|\. *)([a-z])/g, function (t, s, a) {
                        return s + a.toUpperCase()
                    })
                }
                captiliseEachWord(o) {
                    const t = (o = null == o ? "" : o).toLowerCase().split(" ")
                        , s = ["and", "the", "a", "an", "for", "to", "but", "at", "by", "of"];
                    let r = t.map(p => -1 == s.indexOf(p) ? p.charAt(0).toUpperCase() + p.substring(1) : p).toString();
                    return r = r.replaceAll(",", " "),
                        r
                }
                getFirstLetters(o) {
                    return o.replace(/[^a-zA-Z ]/g, " ").split(" ").map(a => a.charAt(0)).join("").toUpperCase().slice(0, 2)
                }
                downloadFiles(o) {
                    return (0,
                        n.mG)(this, void 0, void 0, function* () {
                            o.length >= 2 ? yield this.downloadFilesAsZip(o) : o.forEach(t => this.downloadFile(t.content, t.filename))
                        })
                }
                downloadFile(o, t) {
                    const s = new Blob([o], {
                        type: "text/plain"
                    });
                    this.createDownloadLink(s, t)
                }
                downloadFilesAsZip(o) {
                    return (0,
                        n.mG)(this, void 0, void 0, function* () {
                            const t = new N;
                            o.forEach(a => {
                                t.file(a.filename, a.content)
                            }
                            );
                            const s = yield t.generateAsync({
                                type: "blob"
                            });
                            this.createDownloadLink(s, "code-files.zip")
                        })
                }
                downloadFrontEndAsZip(o) {
                    return (0,
                        n.mG)(this, void 0, void 0, function* () {
                            const t = new N
                                , s = {
                                    htmlCodeEntered: "index.html",
                                    cssCodeEntered: "styles.css",
                                    jsCodeEntered: "script.js"
                                };
                            for (let r in s)
                                o[r] && t.file(s[r], o[r]);
                            const a = yield t.generateAsync({
                                type: "blob"
                            });
                            this.createDownloadLink(a, "code-files.zip")
                        })
                }
                createDownloadLink(o, t) {
                    const s = window.URL.createObjectURL(o)
                        , a = document.createElement("a");
                    a.href = s,
                        a.download = t,
                        document.body.appendChild(a),
                        a.click(),
                        document.body.removeChild(a),
                        window.URL.revokeObjectURL(s)
                }
                convertToAlphanumeric(o) {
                    let t = String(o)
                        , s = 0;
                    for (let p = 0; p < t.length; p++)
                        s += parseInt(t[p], 10);
                    let a = String(s);
                    const r = "ABCDabcd05EFGHIefghi16JKLMjklm27NOPQnopq38RSTUVrstuv39WXYZwxyz4ABCDabcd05EFGHIefghi16JKLMjklm27NOPQnopq38RSTUVrstuv39WXYZwxyz4ABCDabcd05EFGHIefghi16JKLMjklm27NOPQnopq38RSTUVrstuv39WXYZwxyz4ABCDabcd05EFGHIefghi16JKLMjklm27NOPQnopq38RSTUVrstuv39WXYZwxyz4";
                    for (let p = t.length - 1; p >= 0; p--)
                        a += r[t[p]],
                            a += r[s++],
                            a += t[p];
                    return a
                }
                convertFileToBase64(o) {
                    return new Promise((t, s) => {
                        const a = new FileReader;
                        a.onloadend = () => {
                            if ("string" == typeof a.result) {
                                const r = a.result.split(",")[1];
                                t(r)
                            } else if (a.result instanceof ArrayBuffer) {
                                const p = new Uint8Array(a.result)
                                    , d = btoa(String.fromCharCode(...p));
                                t(d)
                            } else
                                s(new Error("Unsupported result type"))
                        }
                            ,
                            a.onerror = r => s(r),
                            a.readAsDataURL(o)
                    }
                    )
                }
                pdfFileValidator(o) {
                    return (0,
                        n.mG)(this, void 0, void 0, function* () {
                            try {
                                const s = {
                                    fileBuffer: yield this.convertFileToBase64(o),
                                    fileName: o.name
                                };
                                return yield this.http.post(this.pdfApi, s, this.options(null)).toPromise()
                            } catch (t) {
                                this.commonGrowl.next({
                                    severity: "error",
                                    summary: "Validation failed",
                                    detail: "Unable to validate the PDF. Please try again."
                                })
                            }
                        })
                }
                getDownloadUrl(o) {
                    return this.http.post(this.api_link + "/getElectronObjectsFromS3", o, this.options(null))
                }
            }
            return S.\u0275fac = function (o) {
                return new (o || S)(w.LFG(e.eN))
            }
                ,
                S.\u0275prov = w.Yz7({
                    token: S,
                    factory: S.\u0275fac,
                    providedIn: "root"
                }),
                S
        }
        )()
    }
    ,
    4120: (G, $, i) => {
        "use strict";
        i.d($, {
            r: () => N
        });
        var n = i(520)
            , e = i(2340)
            , x = i(1135)
            , C = i(262)
            , O = i(2843)
            , D = i(5e3)
            , M = i(2313)
            , I = i(7465);
        let N = (() => {
            class T {
                constructor(g, S, c) {
                    this.http = g,
                        this.title = S,
                        this.globalService = c,
                        this.api = e.N.HOST.link,
                        this.setResetLogin = !1,
                        this.getEmail = new x.X(null),
                        this.userInfo = new x.X(null),
                        this.Passvariable = new x.X(null),
                        this.verificationTimeLeft = 0,
                        this.userData = JSON.parse(localStorage.getItem("token"))
                }
                getSchoolLoginDetails() {
                    return this.http.get(this.api + "/school/login")
                }
                loginStatus() {
                    return localStorage.getItem("token")
                }
                usersLogin(g) {
                    return this.http.post(this.api + "/users/login", g)
                }
                checkotp(g) {
                    const S = JSON.parse(localStorage.getItem("school_details"));
                    return S && S.school_id && (g.school_id = S.school_id),
                        this.http.post(this.api + "/users/checkotp", g)
                }
                networkStatus() {
                    return this.http.get(this.api + "/school/status")
                }
                setLocalstorage(g) {
                    return new Promise((S, c) => {
                        let o;
                        g && g.data && this.globalService.getAdmissionReportSchoolDetailsForStudents({
                            school_id: g.data.school_id
                        }).subscribe(s => {
                            s && (o = {
                                school_domain: g.data.school_domain,
                                school_code: g.data.school_code,
                                school_logo: g.data.school_logo,
                                school_id: g.data.school_id,
                                school_name: g.data.school_name,
                                school_status: g.data.school_status,
                                push_enabled: g.data.push_enabled,
                                schools_metadata: g.data.schools_metadata,
                                captcha: g.data && g.data.captcha ? g.data.captcha : "",
                                institute_type: g.data.institute_type,
                                purpose: g.data.purpose,
                                enable_features: g.data.enable_features,
                                pwa_short_name: g.data.pwa_short_name,
                                drive_restrictions: g.data.drive_restrictions,
                                admission_report_permission: s
                            },
                                this.title.setTitle(g.data.pwa_short_name ? g.data.pwa_short_name : "Examly"),
                                localStorage.getItem("school_details") && localStorage.removeItem("school_details"),
                                o = JSON.stringify(o),
                                localStorage.setItem("school_details", o),
                                this.schoolData = JSON.parse(localStorage.getItem("school_details")),
                                S(!0))
                        }
                        )
                    }
                    )
                }
                sendSignup(g) {
                    return this.http.post(this.api + "/school/studentsignup", g)
                }
                checkEmailExist(g) {
                    return this.http.post(this.api + "/signin/lookup", g)
                }
                checkEmailExists(g, S) {
                    let c;
                    return this.schoolData || (this.schoolData = JSON.parse(localStorage.getItem("school_details"))),
                        c = this.schoolData,
                        this.http.post(this.api + "/signin/lookup", {
                            email: g,
                            school_id: c.school_id,
                            school_code: c.school_code,
                            googleToken: S
                        })
                }
                login(g) {
                    return this.http.post(this.api + "/signin/verify", g)
                }
                loginUser(g, S) {
                    let c;
                    return this.schoolData || (this.schoolData = JSON.parse(localStorage.getItem("school_details"))),
                        c = this.schoolData,
                        this.http.post(this.api + "/signin/verify", {
                            hash: this.userInfo.value.key,
                            password: S,
                            school_id: c.school_id,
                            school_code: c.school_code,
                            googleToken: g
                        })
                }
                getschool_id() {
                    const g = JSON.parse(localStorage.getItem("token"));
                    let S;
                    return g ? S = g.school_branch_department_users[0].school_id : this.schoolData && (S = this.schoolData.school_id),
                        S
                }
                sendForgotPasswordLink(g) {
                    return this.http.post(this.api + "/users/sendemailforforget", g)
                }
                checkEmailOtp(g) {
                    return this.http.post(this.api + "/users/checkotp", g)
                }
                setPassword(g) {
                    return this.http.post(this.api + "/users/setpassword", g)
                }
                sendActivationLink(g) {
                    return this.http.post(this.api + "/resendLink", g)
                }
                userPermissionList(g) {
                    return this.http.get(this.api + "/school/" + g.purpose + "/userpermissionList", this.options(g)).pipe((0,
                        C.K)(this.handleError.bind(this)))
                }
                handleError(g) {
                    if (!(g.error instanceof ErrorEvent) && g && 401 === g.status) {
                        this.globalService.commonGrowl.next({
                            severity: "error",
                            summary: "Session expired!",
                            detail: "Refresh and try logging in again"
                        });
                        for (let c = localStorage.length - 1; c > -1; c -= 1) {
                            const o = localStorage.key(c);
                            o && "session_data" !== o && localStorage.removeItem(o)
                        }
                        setTimeout(() => {
                            const c = window.location.host;
                            "app.examly.net" === c || "app.exam.ly" === c || "app.examly.io" === c || "app.examly.test" === c.split(":")[0] ? "/admin/login" !== window.location.pathname && (window.location.href = "/admin/login") : "/login" !== window.location.pathname && (window.location.href = "/login")
                        }
                            , 3e3)
                    }
                    return (0,
                        O._)("Something bad happened; Please try again later.")
                }
                options(g) {
                    return {
                        headers: new n.WM({
                            "Content-Type": "application/json",
                            Authorization: g && g.token ? g.token : this.getUserToken()
                        })
                    }
                }
                getUserToken() {
                    const g = JSON.parse(localStorage.getItem("token")) ? JSON.parse(localStorage.getItem("token")) : this.userDetails;
                    return g && g.token ? g.token : ""
                }
                loginwithunp(g) {
                    return g.school_code = this.schoolData ? this.schoolData.school_code : JSON.parse(localStorage.getItem("school_details")).school_code,
                        this.http.post(this.api + "/users/login", g)
                }
                schoolstatus(g, S) {
                    return this.http.post(this.api + "/schoolStatus/", {
                        school_id: g
                    }, this.options(S))
                }
                getPpaProfile(g, S, c) {
                    const o = new URLSearchParams;
                    return o.set("s_id", g),
                        o.set("school_id", S),
                        o.set("user_id", c.user_id),
                        this.options(c).search = o,
                        this.http.get(this.api + "/users/getprofile", this.options(c)).pipe((0,
                            C.K)(this.handleError.bind(this)))
                }
                getsso(g) {
                    return this.http.post(this.api + "/users/getsso", g)
                }
                logout(g) {
                    return this.http.put(this.api + "/logout", g, this.options(this.userData))
                }
                findOS() {
                    let g = "Unknown OS";
                    return -1 != navigator.appVersion.indexOf("Win") && (g = "Windows"),
                        -1 != navigator.appVersion.indexOf("Mac") && (g = "MacOS"),
                        -1 != navigator.appVersion.indexOf("X11") && (g = "UNIX"),
                        -1 != navigator.appVersion.indexOf("Linux") && (g = "Linux"),
                        -1 != navigator.appVersion.indexOf("Android") && (g = "Android"),
                        (-1 != navigator.appVersion.indexOf("iPhone") || -1 != navigator.appVersion.indexOf("iPad")) && (g = "iOS"),
                        g
                }
                checkIfStudentExist(g) {
                    return this.http.post(this.api + "/user/exist", g)
                }
            }
            return T.\u0275fac = function (g) {
                return new (g || T)(D.LFG(n.eN), D.LFG(M.Dx), D.LFG(I.U))
            }
                ,
                T.\u0275prov = D.Yz7({
                    token: T,
                    factory: T.\u0275fac,
                    providedIn: "root"
                }),
                T
        }
        )()
    }
    ,
    9534: (G, $, i) => {
        "use strict";
        i.d($, {
            J: () => e
        });
        var n = i(5e3);
        let e = (() => {
            class x {
                constructor() {
                    this.publishTypes = [{
                        type: "Learning Path",
                        text: "Learning Paths",
                        title: "My Learning Paths",
                        params: "mylearningpaths"
                    }, {
                        type: "Course",
                        text: "Courses",
                        title: "My Courses",
                        params: "mycourses"
                    }, {
                        type: "Practice",
                        text: "Practices",
                        title: "My Practices",
                        params: "mypractices"
                    }, {
                        type: "Project",
                        text: "Projects",
                        title: "My Projects",
                        params: "myprojects"
                    }, {
                        type: "Drive",
                        text: "Drives",
                        title: "My Drives",
                        params: "mydrives"
                    }, {
                        type: "Hiring",
                        text: "Hirings",
                        title: "My Hirings",
                        params: "myhirings"
                    }, {
                        type: "Contest",
                        text: "Contests",
                        title: "My Contests",
                        params: "mycontests"
                    }, {
                        type: "Hackathon",
                        text: "Hackathons",
                        title: "My Hackathons",
                        params: "myhackathons"
                    }, {
                        type: "Quiz",
                        text: "Quizzes",
                        title: "My Quizzes",
                        params: "myquizzes"
                    }, {
                        type: "Exam",
                        text: "Exams",
                        title: "My Exams",
                        params: "myexams"
                    }, {
                        type: "Assessment",
                        text: "Assessments",
                        title: "My Assessments",
                        params: "myassessments"
                    }, {
                        type: "Lab",
                        text: "Labs",
                        title: "My Labs",
                        params: "mylabs"
                    }, {
                        type: "Challenge",
                        text: "Challenges",
                        title: "My Challenges",
                        params: "mychallenges"
                    }, {
                        type: "Test",
                        text: "Tests",
                        title: "My Tests",
                        params: "mytests"
                    }]
                }
                getPublishTypeDetailsByType(O) {
                    return this.publishTypes.filter(D => D.type === O)[0]
                }
                getAllPublishTypeDetails() {
                    return this.publishTypes
                }
                getPublishTypeByParams(O) {
                    let M, D = O;
                    return D.includes("recent-") ? (D = O.replace("recent-", ""),
                        M = this.publishTypes.filter(I => I.type == D)[0]) : M = this.publishTypes.filter(I => I.params == D)[0],
                        M ? M.type : "Course"
                }
                getPublishParamsByType(O) {
                    let D = this.publishTypes.filter(M => M.type.toLowerCase() === (O || "").toLowerCase())[0];
                    return D ? D.params : "mycourses"
                }
            }
            return x.\u0275fac = function (O) {
                return new (O || x)
            }
                ,
                x.\u0275prov = n.Yz7({
                    token: x,
                    factory: x.\u0275fac,
                    providedIn: "root"
                }),
                x
        }
        )()
    }
    ,
    5383: (G, $, i) => {
        "use strict";
        i.d($, {
            $: () => D
        });
        var n = i(1135)
            , e = i(8365)
            , x = i(2340)
            , C = i(5e3)
            , O = i(2511);
        let D = (() => {
            class M {
                constructor(N) {
                    this.testService = N,
                        this.socket_url = x.N.HOST.SOCKET_LINK,
                        this.messageRecieved = new n.X(null),
                        this.connectionId = null
                }
                connect(N, T) {
                    this.socket = new e.p({
                        url: this.socket_url,
                        closeObserver: {
                            next: () => {
                                this.connect(N, T)
                            }
                        }
                    }),
                        this.socket.next({
                            action: "userconnect",
                            data: {
                                school_id: N,
                                user_id: T
                            }
                        }),
                        this.socket.subscribe(w => {
                            w.connectionId && (this.connectionId = w.connectionId),
                                this.messageRecieved.next(w)
                        }
                        )
                }
                removeMessage() {
                    this.messageRecieved.next(void 0)
                }
                sendMessage(N) {
                    this.testService.sendMessageToSocket(N).then(T => { }
                    )
                }
            }
            return M.\u0275fac = function (N) {
                return new (N || M)(C.LFG(O.q))
            }
                ,
                M.\u0275prov = C.Yz7({
                    token: M,
                    factory: M.\u0275fac,
                    providedIn: "root"
                }),
                M
        }
        )()
    }
    ,
    8835: (G, $, i) => {
        "use strict";
        i.d($, {
            U: () => N
        });
        var n = i(1135)
            , e = i(262)
            , x = i(4004)
            , C = i(520)
            , O = i(2340)
            , D = i(5e3)
            , M = i(4120)
            , I = i(7465);
        let N = (() => {
            class T {
                constructor(g, S, c) {
                    this.http = g,
                        this.loginservice = S,
                        this.globalService = c,
                        this.api = O.N.HOST.link,
                        this.teamsSubject = new n.X([])
                }
                getAllTeams(g, S = {}) {
                    let c = new C.LE;
                    c.set("dataIds", this.loginservice.schoolId);
                    let o = this.loginservice.options(null);
                    return o.search = c,
                        this.http.post(this.api + "/team/getCourseDetails/" + g, S, o).pipe((0,
                            e.K)(this.loginservice.handleError.bind(this)))
                }
                createTeam(g) {
                    return this.http.post(this.api + "/team", g, this.loginservice.options(null)).pipe((0,
                        e.K)(this.loginservice.handleError.bind(this))).pipe((0,
                            x.U)(() => this.getAllTeams(g.c_id)))
                }
                getTeamChannelID(g) {
                    return this.http.post(this.api + "/team/getTeamChannelID", g, this.loginservice.options(null)).pipe((0,
                        e.K)(this.loginservice.handleError.bind(this)))
                }
                joinTeam(g) {
                    return this.http.post(this.api + "/team/add-to-team", g, this.loginservice.options(null)).pipe((0,
                        e.K)(this.loginservice.handleError.bind(this)))
                }
                getGitAcessToken(g) {
                    return this.http.post(this.api + "/team/github-getGitAccessToken", {
                        code: g
                    }, this.loginservice.options(null))
                }
                getGitUserDetails(g) {
                    return this.http.post(this.api + "/team/github-getUserDetails", g, this.loginservice.options(null)).pipe((0,
                        e.K)(this.loginservice.handleError.bind(this))).subscribe(S => this.teamsSubject.next(S), S => this.teamsSubject.error(S)),
                        this.teamsSubject.asObservable()
                }
                inviteStudentToRepo(g) {
                    return this.http.post(this.api + "/team/invite-student-to-repo", g, this.loginservice.options(null)).pipe((0,
                        e.K)(this.loginservice.handleError.bind(this)))
                }
                exitTeam(g) {
                    return this.http.post(this.api + "/team/exitTeam", g, this.loginservice.options(null)).pipe((0,
                        e.K)(this.loginservice.handleError.bind(this)))
                }
            }
            return T.\u0275fac = function (g) {
                return new (g || T)(D.LFG(C.eN), D.LFG(M.r), D.LFG(I.U))
            }
                ,
                T.\u0275prov = D.Yz7({
                    token: T,
                    factory: T.\u0275fac,
                    providedIn: "root"
                }),
                T
        }
        )()
    }
    ,
    2511: (G, $, i) => {
        "use strict";
        i.d($, {
            q: () => S
        });
        var n = i(7582)
            , e = i(520)
            , x = i(1135)
            , C = i(8306)
            , O = i(2340)
            , D = i(5213)
            , I = i(7579)
            , N = i(5e3)
            , T = i(7465)
            , w = i(4120)
            , g = i(532);
        let S = (() => {
            class c {
                constructor(t, s, a, r) {
                    this.http = t,
                        this.globalService = s,
                        this.ls = a,
                        this.router = r,
                        this.api_link = O.N.HOST.link,
                        this.recognLink = O.N.HOST.RECOGN_LINK,
                        this.cloud_provider = O.N.HOST.CLOUD_PROVIDER,
                        this.compile_url = O.N.program_compiler_handler.cloudUrl,
                        this.programmingLangs = [{
                            label: "Bash (5.1)",
                            value: "Bash",
                            aceCode: "csharp",
                            mainFile: "file.sh",
                            code: 11
                        }, {
                            label: "C# (6.10)",
                            value: "C#",
                            aceCode: "csharp",
                            mainFile: "file.cs",
                            code: 10
                        }, {
                            label: "C (17)",
                            value: "C",
                            aceCode: "c_cpp",
                            mainFile: "file.cpp",
                            code: 21
                        }, {
                            label: "C++ (17)",
                            value: "C++",
                            aceCode: "c_cpp",
                            mainFile: "file.cpp",
                            code: 7
                        }, {
                            label: "Clojure (1.4)",
                            value: "Clojure",
                            aceCode: "clojure",
                            mainFile: "file.clj",
                            code: 2
                        }, {
                            label: "DotNet (6.10)",
                            value: "Dotnet",
                            aceCode: "csharp",
                            mainFile: "file.cs",
                            code: 22
                        }, {
                            label: "Go (1.7)",
                            value: "Go",
                            aceCode: "golang",
                            mainFile: "file.go",
                            code: 6
                        }, {
                            label: "Java (11)",
                            value: "Java",
                            aceCode: "java",
                            mainFile: "file.java",
                            code: 8
                        }, {
                            label: "Java JDBC connectivity (11)",
                            value: "Java_jdbc",
                            aceCode: "java",
                            mainFile: "file.java",
                            code: 19
                        }, {
                            label: "MySQL (8.0)",
                            value: "MySQL",
                            aceCode: "mysql",
                            mainFile: "file.sql",
                            code: 13
                        }, {
                            label: "Objective-C (4.8)",
                            value: "Objective-C",
                            aceCode: "objectivec",
                            mainFile: "file.m",
                            code: 12
                        }, {
                            label: "Perl (5.0)",
                            value: "Perl",
                            aceCode: "perl",
                            mainFile: "file.pl",
                            code: 14
                        }, {
                            label: "PHP (7.4)",
                            value: "PHP",
                            aceCode: "php",
                            mainFile: "file.php",
                            code: 3
                        }, {
                            label: "Plain Javascript (10)",
                            value: "Plain Javascript",
                            aceCode: "javascript",
                            mainFile: "file.js",
                            code: 4
                        }, {
                            label: "Python (3.8)",
                            value: "Python",
                            aceCode: "python",
                            mainFile: "file.py",
                            code: 0
                        }, {
                            label: "Ruby (1.9)",
                            value: "Ruby",
                            aceCode: "ruby",
                            mainFile: "file.rb",
                            code: 1
                        }, {
                            label: "Rust (1.27)",
                            value: "Rust",
                            aceCode: "rust",
                            mainFile: "file.rs",
                            code: 15
                        }, {
                            label: "VB.NET (4.7)",
                            value: "VB.NET",
                            aceCode: "vbscript",
                            mainFile: "file.vb",
                            code: 9
                        }, {
                            label: "R (3.5)",
                            value: "R",
                            aceCode: "r",
                            mainFile: "file.r",
                            code: 16
                        }, {
                            label: "MySQL (8.0) Verbose",
                            value: "MySQL Verbose",
                            aceCode: "mysql",
                            mainFile: "file.sql",
                            code: 18
                        }, {
                            label: "C (17) (std=c++17)",
                            value: "Cc++11",
                            aceCode: "c_cpp",
                            mainFile: "file.cpp",
                            code: 21
                        }, {
                            label: "C++ (17) (std=c++17)",
                            value: "C++c++11",
                            aceCode: "c_cpp",
                            mainFile: "file.cpp",
                            code: 21
                        }, {
                            label: "Java (17)",
                            value: "Java17",
                            aceCode: "java",
                            mainFile: "file.java",
                            code: 23
                        }],
                        this.progFileBasedLangs = [{
                            label: "Java (11)",
                            value: "Java",
                            aceCode: "java",
                            defaultFiles: [{
                                label: "Main.java",
                                data: "",
                                id: "main",
                                blockdelete: !0
                            }]
                        }, {
                            label: "Java (17)",
                            value: "Java17",
                            aceCode: "java",
                            defaultFiles: [{
                                label: "Main.java",
                                data: "",
                                id: "main",
                                blockdelete: !0
                            }]
                        }, {
                            label: "JDBC",
                            value: "Javadb",
                            aceCode: "java",
                            defaultFiles: [{
                                label: "Main.java",
                                data: "",
                                id: "main",
                                blockdelete: !0
                            }]
                        }, {
                            label: "Python",
                            value: "Python",
                            aceCode: "python",
                            defaultFiles: [{
                                label: "main.py",
                                data: "",
                                id: "main",
                                blockdelete: !0
                            }]
                        }, {
                            label: "Python with mysql",
                            value: "Pythondb",
                            aceCode: "python",
                            defaultFiles: [{
                                label: "main.py",
                                data: "",
                                id: "main",
                                blockdelete: !0
                            }]
                        }, {
                            label: "Python with Datascience",
                            value: "PyDatascience",
                            aceCode: "python",
                            defaultFiles: [{
                                label: "main.py",
                                data: "",
                                id: "main",
                                blockdelete: !0
                            }]
                        }, {
                            label: "R",
                            value: "R",
                            aceCode: "r",
                            defaultFiles: [{
                                label: "main.R",
                                data: "",
                                id: "main",
                                blockdelete: !0
                            }]
                        }, {
                            label: "JavaScript",
                            value: "JavaScript",
                            aceCode: "javascript",
                            defaultFiles: [{
                                label: "index.js",
                                data: "",
                                id: "main",
                                blockdelete: !0
                            }]
                        }, {
                            label: "Verilog",
                            value: "Verilog",
                            aceCode: "Verilog",
                            defaultFiles: [{
                                label: "code.v",
                                data: "",
                                id: "main",
                                blockdelete: !0
                            }, {
                                label: "codetb.v",
                                data: "",
                                id: "testbench",
                                blockdelete: !0
                            }]
                        }, {
                            label: "Vhdl",
                            value: "Vhdl",
                            aceCode: "Vhdl",
                            defaultFiles: [{
                                label: "code.vhdl",
                                data: "",
                                id: "main",
                                blockdelete: !0
                            }, {
                                label: "codetb.vhdl",
                                data: "",
                                id: "testbench",
                                blockdelete: !0
                            }]
                        }, {
                            label: "JavaScript with mongodb",
                            value: "JavaScriptMongo",
                            aceCode: "javascript",
                            defaultFiles: [{
                                label: "index.js",
                                data: "",
                                id: "main",
                                blockdelete: !0
                            }]
                        }, {
                            label: "Mongodb Standalone",
                            value: "Mongo",
                            aceCode: "javascript",
                            defaultFiles: [{
                                label: "mongo.js",
                                data: "",
                                id: "main",
                                blockdelete: !0
                            }]
                        }, {
                            label: "Java with Oracledb",
                            value: "JavaOracledb",
                            aceCode: "java",
                            defaultFiles: [{
                                label: "Main.java",
                                data: "",
                                id: "main",
                                blockdelete: !0
                            }]
                        }, {
                            label: "Oracledb Standalone",
                            value: "Oracledb",
                            aceCode: "mysql",
                            defaultFiles: [{
                                label: "oracle.sql",
                                data: "",
                                id: "main",
                                blockdelete: !0
                            }]
                        }, {
                            label: "DotNET with MsSQL",
                            value: "DotNetMssql",
                            aceCode: "csharp",
                            defaultFiles: [{
                                label: "Program.cs",
                                data: "",
                                id: "main",
                                blockdelete: !0
                            }]
                        }, {
                            label: "SQL Server (2019)",
                            value: "SqlServer",
                            aceCode: "mysql",
                            defaultFiles: [{
                                label: "main.sql",
                                data: "",
                                id: "main",
                                blockdelete: !0
                            }]
                        }, {
                            label: "C++",
                            value: "CPP",
                            aceCode: "cpp",
                            defaultFiles: [{
                                label: "Main.cpp",
                                data: "",
                                id: "main",
                                blockdelete: !0
                            }]
                        }, {
                            label: "Cassandra Standalone",
                            value: "Cassandra",
                            aceCode: "Cassandra",
                            defaultFiles: [{
                                label: "main.cql",
                                data: "",
                                id: "main",
                                blockdelete: !0
                            }]
                        }, {
                            label: "Java Cassandra Connectivity",
                            value: "JavaCassandra",
                            aceCode: "java",
                            defaultFiles: [{
                                label: "Main.java",
                                data: "",
                                id: "main",
                                blockdelete: !0
                            }]
                        }, {
                            label: "MySQL (8.0)",
                            value: "MySQL",
                            aceCode: "mysql",
                            defaultFiles: [{
                                label: "file.sql",
                                data: "",
                                id: "main",
                                blockdelete: !0
                            }]
                        }, {
                            label: "PostgreSQL (13.6)",
                            value: "PSQL",
                            aceCode: "mysql",
                            defaultFiles: [{
                                label: "main.sql",
                                data: "",
                                id: "main",
                                blockdelete: !0
                            }]
                        }, {
                            label: "Gnu Prolog",
                            value: "GnuProlog",
                            aceCode: "prolog",
                            defaultFiles: [{
                                label: "main.pg",
                                data: "",
                                id: "main",
                                blockdelete: !0
                            }]
                        }, {
                            label: "Cobol",
                            value: "Cobol",
                            aceCode: "cobol",
                            defaultFiles: [{
                                label: "main.cbl",
                                data: "",
                                id: "main",
                                blockdelete: !0
                            }]
                        }, {
                            label: "Scala",
                            value: "Scala",
                            aceCode: "scala",
                            defaultFiles: [{
                                label: "Main.scala",
                                data: "",
                                id: "main",
                                blockdelete: !0
                            }]
                        }],
                        this.complexities = [{
                            label: "O(1)",
                            value: 1
                        }, {
                            label: "O(loglog N)",
                            value: 2
                        }, {
                            label: "O(log N)",
                            value: 3
                        }, {
                            label: "O(N)",
                            value: 4
                        }, {
                            label: "O(N log N)",
                            value: 5
                        }, {
                            label: "O(N^2)",
                            value: 6
                        }, {
                            label: "O(N^C)",
                            value: 7
                        }],
                        this.editor_theme = "ace/theme/monokai",
                        this.isOffline = new x.X(!1),
                        this.isPresentationChange = new x.X(0),
                        this.isWindowChange = new x.X(!1),
                        this.windowState = new x.X(!1),
                        this.isWindowResize = new x.X(!1),
                        this.updateQuestionCount = new x.X(!1),
                        this.gitInitResponse = new x.X(!1),
                        this.networkDownSpeed = new x.X(null),
                        this.networkUpSpeed = new x.X(null),
                        this.isProjectQuestion = new x.X(!1),
                        this.cloudQuestionResponse = new x.X(null),
                        this.proctorUserID = new x.X(null),
                        this.videoQuestion = new x.X(!1),
                        this.browserCall = new x.X(null),
                        this.isReachableCall = new x.X(!1),
                        this.storageCall = new x.X(null),
                        this.storageClear = new x.X(null),
                        this.topicAnalysisDisable = ["6e9f386c-f4f2-4f17-a400-84830a96c52d", "69cb8138-b47b-4cd0-98b8-44dbd5da2b3c"],
                        this.markDisable = ["b105beab-33a5-41df-b8e2-943e10d1eb76"],
                        this.projectHeaderDisable = ["28eded5d-1a5f-4ff9-97b2-d40ca32ab5f6", "fa4cb1e4-ce65-4288-91e0-1468e724cc56"],
                        this.embedSchoolIds = ["b105beab-33a5-41df-b8e2-943e10d1eb76", "f061d0d2-2b67-4249-85a4-1a5a845c274b", "c1201bea-e18b-49e9-a604-dd3d96f40042", "de1e754f-d84c-45f3-a27a-2a381be77e09", "99449c5f-0ee5-4211-a326-7881cb9e4387"],
                        this.crispVideoEnabledSchools = ["158608c5-6868-4850-8baf-f1da3d041bb2", "2d016bdf-3b5f-4482-bcac-fe60e17cfa41", "513a4bac-95a4-4863-8b8b-7a0f38c172c5", "29d3ca55-dccd-4151-9f73-a8dd1c81d7ec"],
                        this.ipSkipSchools = ["f515cb79-3b45-4acf-a78b-d972f34b31df", "fe6502f0-dfe5-4ec3-b181-3e8e34b19894"],
                        this.isTestPaused = !1,
                        this.redirectToInstaSchools = ["ea11b177-c518-4467-9c3f-e721e26506a8", "781936e1-7cba-4666-a975-0a7ec447cace"],
                        this.driveCustomLables = ["781936e1-7cba-4666-a975-0a7ec447cace", "d5986deb-f358-4156-8ac0-373bd93591ae"],
                        this.onDevToolsStatusChange = new I.x,
                        this.POSENET_CONFIG = {
                            decodingMethod: "multi-person",
                            flipPoseHorizontal: !0,
                            minPoseConfidence: .25,
                            minPartConfidence: .15,
                            maxPoseDetections: 5,
                            nmsRadius: 30,
                            showVideo: !1,
                            showPoints: !1
                        },
                        this.NET_SPEED_TEST_SIZE = 2,
                        this.PROC_DB_CONFIG = {
                            dbName: "data",
                            objectName: "pi",
                            maxImgCount: 30,
                            db: void 0
                        },
                        this.PROC_ERR_CONFIG = {
                            reconnectMaxCount: 3,
                            reconnectInterval: 300
                        },
                        this.webcamBlackList = ["OBS Virtual Camera", "AlterCam Virtual Camera"],
                        this.FACEAPI_CONFIG = {
                            inputSize: 320,
                            scoreThreshold: .5,
                            distance: .5,
                            schoolIds: ["158608c5-6868-4850-8baf-f1da3d041bb2", "513a4bac-95a4-4863-8b8b-7a0f38c172c5", "3caaf750-d2be-4174-97f5-ee646ad838d3", "5fd4397f-29d0-47b3-b877-245b55f6fcb3"]
                        },
                        this.externalScoresArray = ["learn.wileynxt", "itrackglobal", "www.wileynxt.com", "uat.wileynxt.com"],
                        this.lpuBucketSchools = ["a0720a5a-01a6-4882-a53f-9b5beff46dfb", "781936e1-7cba-4666-a975-0a7ec447cace"],
                        this.BLAZEFACE_CONFIG = {
                            minPoseConfidence: .95,
                            minAngleConfidence: 25,
                            MODEL_HEAD_EAR_COORD_X: .7,
                            MODEL_HEAD_RIGHT_EYE_COORD: [.3, .3, .7],
                            MODEL_HEAD_BOUNDING_SPHERE_CENTER_COORD: [0, .3, .3],
                            MODEL_HEAD_BOUNDING_SPHERE_RADIUS: 1.35
                        },
                        this.aesEncrypt = O.N.aes_decrypt.key,
                        this.messageHandler = p => {
                            console.log("Message handler", null == p ? void 0 : p.data)
                        }
                        ,
                        this.setUserDetails()
                }
                storageCallChange(t) {
                    this.storageCall.next(t)
                }
                storageclearInterval(t) {
                    this.storageClear.next(t)
                }
                redirectProcess(t) {
                    return (0,
                        n.mG)(this, void 0, void 0, function* () {
                            if (localStorage.getItem("ssologin") && this.schoolData && this.schoolData.schools_metadata && "hcl147" !== this.schoolData.school_code) {
                                const s = this.schoolData.schools_metadata.sso_url_after_test
                                    , a = this.schoolData.schools_metadata.sso_url_before_test;
                                if (s || a) {
                                    let r;
                                    r = this.replaceDynamicRedirectionUrl(this.isTestPaused || "close" === t ? a : s),
                                        yield this.logoutAfterUpload(),
                                        window.location.replace(r)
                                } else
                                    yield this.logoutAfterUpload(),
                                        this.router.navigate(["/login"])
                            } else if (this.schoolData.schools_metadata.sub_redirection_url && !localStorage.getItem("ssologin") && this.testData.frozen_data) {
                                let s;
                                s = this.replaceDynamicRedirectionUrl(this.schoolData.schools_metadata.sub_redirection_url),
                                    window.location.replace(s)
                            } else
                                switch (this.testData.entity) {
                                    case "course":
                                        this.router.navigate(["/mycourses/details"], {
                                            queryParams: {
                                                id: this.testData.c_id
                                            }
                                        });
                                        break;
                                    case "drive":
                                        this.router.navigate(["/mydrivedetails"], {
                                            queryParams: {
                                                drive_id: this.testData.drive_id
                                            }
                                        });
                                        break;
                                    case "contest":
                                        this.testData.contest_id ? this.router.navigate(["/mycdetails"], {
                                            queryParams: {
                                                c_id: this.testData.c_id,
                                                contest_id: this.testData.contest_id
                                            }
                                        }) : this.router.navigate(["/mycontest"])
                                }
                        })
                }
                replaceDynamicRedirectionUrl(t) {
                    this.testData.email = this.userData.email;
                    const s = this.testData.c_id + this.testData.t_id
                        , a = (new Date).toISOString();
                    return t.replace(/\${(.*?)}/g, (d, u) => "test_id" === u ? s : "submit_time" === u ? a : this.testData[u] || d)
                }
                setUserDetails() {
                    this.userData = JSON.parse(localStorage.getItem("token")),
                        this.schoolData = JSON.parse(localStorage.getItem("school_details")),
                        this.studentData = JSON.parse(localStorage.getItem("studentData")),
                        this.ppaData = JSON.parse(localStorage.getItem("ppaData")),
                        this.sessionUserToken = sessionStorage.getItem("userToken")
                }
                removeCopyPasteHandler() {
                    var t, s;
                    this.disableCopyPaste = !1,
                        window.removeEventListener("copy", this.handleCopy, !0),
                        window.removeEventListener("cut", this.handleCopy, !0),
                        window.removeEventListener("paste", this.handlePaste.bind(this), !0),
                        window.removeEventListener("drop", this.handlePaste.bind(this), !0),
                        window.removeEventListener("dragstart", this.handleDragStart, !0),
                        (null === (s = null === (t = this.testData) || void 0 === t ? void 0 : t.current_q) || void 0 === s ? void 0 : s.question_type) && "project_question" === this.testData.current_q.question_type && window.removeEventListener("message", this.messageHandler, !0)
                }
                copyPasteHandler() {
                    var t, s;
                    this.disableCopyPaste = !0,
                        window.addEventListener("copy", this.handleCopy, !0),
                        window.addEventListener("cut", this.handleCopy, !0),
                        window.addEventListener("paste", this.handlePaste.bind(this), !0),
                        window.addEventListener("drop", this.handlePaste.bind(this), !0),
                        window.addEventListener("dragstart", this.handleDragStart, !0),
                        (null === (s = null === (t = this.testData) || void 0 === t ? void 0 : t.current_q) || void 0 === s ? void 0 : s.question_type) && "project_question" === this.testData.current_q.question_type && window.addEventListener("message", this.messageHandler, !0)
                }
                copyPasteMaster() {
                    var t, s;
                    (null === (s = null === (t = this.testData) || void 0 === t ? void 0 : t.c_modules) || void 0 === s ? void 0 : s.enable_copy_paste) ? this.copyPasteHandler() : this.removeCopyPasteHandler()
                }
                handleCopy(t) {
                    document.getSelection(),
                        "/project" === window.location.pathname && this.projectData && this.projectData.image && this.projectData.image.includes("jupyter")
                }
                handlePaste(t) {
                    "html_css_js" !== this.testData.current_q.question_type && "programming_file_based" !== this.testData.current_q.question_type && "programming" !== this.testData.current_q.question_type && "classification" !== this.testData.current_q.question_type && (t.stopImmediatePropagation(),
                        t.stopPropagation(),
                        t.preventDefault(),
                        document.execCommand("insertTEXT", !1, this.copiedText ? this.copiedText : "could not paste"))
                }
                removePasteHandler() {
                    window.removeEventListener("paste", this.handlePaste, !0)
                }
                handleDragStart(t) {
                    t.dataTransfer.clearData(),
                        t.stopImmediatePropagation(),
                        t.preventDefault(),
                        t.stopPropagation()
                }
                httpRequestOptions() {
                    return {
                        headers: new e.WM({
                            "Content-Type": "application/json",
                            Authorization: this.userData ? this.userData.token : ""
                        })
                    }
                }
                onlineHandle() {
                    this.isOffline.next(!1),
                        this.fireStoredEvent()
                }
                offlineHandle() {
                    this.isOffline.next(!0)
                }
                detectOffline() {
                    window.ononline = this.onlineHandle.bind(this),
                        window.onoffline = this.offlineHandle.bind(this)
                }
                removeDetectOffline() {
                    this.isOffline.next(!1),
                        window.ononline = null,
                        window.onoffline = null
                }
                encryptDecryptKeyGeneration() {
                    let t = JSON.parse(localStorage.getItem("token"));
                    return t.user_id.concat(t.school_id, this.aesEncrypt).split("-").join("")
                }
                presentationHandler() {
                    navigator.userAgent.includes("SEB") ? this.isPresentationChange.next(0) : this.isPresentationChange.next(this.presentationAvailability ? this.presentationAvailability.value ? 1 : 0 : 2),
                        this.testData.client_data.hasExternalMonitor = this.isPresentationChange.getValue()
                }
                detectPresentation() {
                    return new Promise((t, s) => (0,
                        n.mG)(this, void 0, void 0, function* () {
                            try {
                                if (window.PresentationRequest) {
                                    const a = new window.PresentationRequest(window.location.href);
                                    this.presentationAvailability = yield a.getAvailability(),
                                        this.presentationAvailability ? (this.isPresentationChange.next(this.presentationAvailability.value ? 1 : 0),
                                            this.testData.client_data.hasExternalMonitor = this.isPresentationChange.getValue(),
                                            this.presentationAvailability.onchange = this.presentationHandler.bind(this),
                                            t(this.presentationAvailability.value)) : (this.isPresentationChange.next(2),
                                                this.testData.client_data.hasExternalMonitor = 2,
                                                t(!1))
                                } else
                                    this.isPresentationChange.next(2),
                                        this.testData.client_data.hasExternalMonitor = 2,
                                        t(!1)
                            } catch (a) {
                                this.isPresentationChange.next(2),
                                    this.testData.client_data.hasExternalMonitor = 2,
                                    t(!1)
                            }
                        }))
                }
                removePresentationLeave() {
                    this.isPresentationChange.next(0),
                        this.presentationAvailability && (this.presentationAvailability.onchange = void 0,
                            this.presentationAvailability = void 0)
                }
                windowBlurHandler() {
                    this.isWindowChange.next(!0)
                }
                detectWindowMove() {
                    window.onblur = s => {
                        this.isWindowChange.next(!0),
                            this.windowState.next(!0)
                    }
                        ,
                        window.onfocus = s => {
                            this.windowState.next(!1)
                        }
                        ,
                        this.triggerFocusEventManually()
                }
                triggerFocusEventManually() {
                    var t = new Event("focus", {
                        bubbles: !1,
                        cancelable: !1,
                        composed: !1
                    });
                    window.dispatchEvent(t)
                }
                removeWindowMove() {
                    this.isWindowChange.next(!1),
                        window.onblur = null,
                        window.onfocus = null
                }
                initializeDevToolsDetection() {
                    this.devtoolsListener = t => {
                        console.log("DevTools status:", t ? "open" : "close"),
                            this.onDevToolsStatusChange.next(t)
                    }
                        ,
                        D.addListener(this.devtoolsListener),
                        D.launch()
                }
                stopDevToolsDetection() {
                    D.stop(),
                        D.removeListener(this.devtoolsListener)
                }
                detectLeaveAlert() {
                    window.onbeforeunload = t => {
                        t.preventDefault(),
                            t.returnValue = ""
                    }
                }
                detectLeaveScreen() {
                    window.onbeforeunload = t => {
                        localStorage.removeItem("alreadyRedirected")
                    }
                }
                removeLeaveAlert() {
                    window.onbeforeunload = null
                }
                checkManualProcAllowed() {
                    const t = JSON.parse(localStorage.getItem("token"));
                    return !!(t && t.enable_features && t.enable_features.allow_manual_proctoring)
                }
                checkHDvideosEnabled() {
                    const t = JSON.parse(localStorage.getItem("token"));
                    return t && t.enable_features && t.enable_features.allow_hd_videos
                }
                getLeaderboardConstants() {
                    return new Promise((t, s) => {
                        if (this.leaderBoardConstants)
                            t(this.leaderBoardConstants);
                        else {
                            let a = "";
                            a = O.N.production ? "prod-users-asset" : "dev-users-asset",
                                this.http.get("https://s3.amazonaws.com/" + a + "/assets/lecvalues.json").subscribe(r => {
                                    this.leaderBoardConstants = r,
                                        t(r)
                                }
                                    , r => {
                                        t(!1)
                                    }
                                )
                        }
                    }
                    )
                }
                downloadSonarQubeReport(t) {
                    return new Promise((s, a) => {
                        let r = "dev-users-asset";
                        O.N.production && (r = "prod-users-asset"),
                            this.http.get(`https://s3.amazonaws.com/${r}/sonarQubeReports/${this.schoolData.school_id}/${t}`).subscribe(p => {
                                s(p)
                            }
                                , p => {
                                    s(!1)
                                }
                            )
                    }
                    )
                }
                loadDigitalFont() {
                    return (0,
                        n.mG)(this, void 0, void 0, function* () {
                            return yield this.globalService.loadScript("link", "https://images.examly.io/icons2/examly-digital.css", "text/css", "stylesheet", "examly-digital"),
                                !0
                        })
                }
                getMathJax() {
                    return (0,
                        n.mG)(this, void 0, void 0, function* () {
                            if (!this.MathJax) {
                                const t = {
                                    element: "script",
                                    url: "https://images.examly.io/scripts/MathJax/tex-mml-chtml.js",
                                    type: "text/javascript",
                                    rel: "",
                                    id: "MathJax"
                                };
                                yield this.globalService.loadScript(t.element, t.url, t.type, t.rel, t.id),
                                    this.MathJax = MathJax
                            }
                            return this.MathJax
                        })
                }
                getCryptoJS() {
                    return (0,
                        n.mG)(this, void 0, void 0, function* () {
                            if (!this.CryptoJS) {
                                const t = {
                                    element: "script",
                                    url: "https://images.examly.io/scripts/aes.js",
                                    type: "text/javascript",
                                    rel: "",
                                    id: "cryptojs"
                                };
                                yield this.globalService.loadScript(t.element, t.url, t.type, t.rel, t.id),
                                    this.CryptoJS = CryptoJS
                            }
                            return this.CryptoJS
                        })
                }
                encryptPayload(t, s) {
                    return this.getCryptoJSSync().AES.encrypt(JSON.stringify(t), s).toString()
                }
                getCryptoJSSync() {
                    if (!this.CryptoJS)
                        throw new Error("CryptoJS is not loaded yet. Call getCryptoJS first.");
                    return this.CryptoJS
                }
                generateAESKey(t) {
                    if (![128, 192, 256].includes(t))
                        throw new Error("Invalid AES key size. Use 128, 192, or 256 bits.");
                    return this.generateHashedKey("aRGgsrzltsGROcVcNneddX8sQW2vP8", t)
                }
                generateHashedKey(t, s) {
                    const a = this.getCryptoJSSync();
                    return a.MD5(`${t}_${s}`).toString(a.enc.Base64).substr(0, s / 4)
                }
                getJitsi() {
                    return (0,
                        n.mG)(this, void 0, void 0, function* () {
                            if (!this.JitsiMeetExternalAPI) {
                                const t = {
                                    element: "script",
                                    url: "https://images.examly.io/scripts/jitsi/external_api.js",
                                    type: "text/javascript",
                                    rel: "",
                                    id: "JitsiMeetExternalAPI"
                                };
                                yield this.globalService.loadScript(t.element, t.url, t.type, t.rel, t.id),
                                    this.JitsiMeetExternalAPI = JitsiMeetExternalAPI
                            }
                            return this.JitsiMeetExternalAPI
                        })
                }
                getTwilio() {
                    return (0,
                        n.mG)(this, void 0, void 0, function* () {
                            if (!this.TwilioMeetExternalAPI) {
                                const t = {
                                    element: "script",
                                    url: "https://images.examly.io/scripts/twilio/twilio-video.min.js",
                                    type: "text/javascript",
                                    rel: "",
                                    id: "TwilioMeetExternalAPI"
                                };
                                yield this.globalService.loadScript(t.element, t.url, t.type, t.rel, t.id),
                                    this.TwilioMeetExternalAPI = Twilio
                            }
                            return this.TwilioMeetExternalAPI
                        })
                }
                getQrCode() {
                    return (0,
                        n.mG)(this, void 0, void 0, function* () {
                            if (!this.QRCode) {
                                const t = {
                                    element: "script",
                                    url: "https://images.examly.io/scripts/qrcode/qrcode",
                                    type: "text/javascript",
                                    rel: "",
                                    id: "QRCode"
                                };
                                yield this.globalService.loadScript(t.element, t.url, t.type, t.rel, t.id),
                                    this.QRCode = QRCode
                            }
                            return this.QRCode
                        })
                }
                getAWS() {
                    return (0,
                        n.mG)(this, void 0, void 0, function* () {
                            if (!this.AWS) {
                                const t = {
                                    element: "script",
                                    url: "https://images.examly.io/scripts/aws-sdk-2.676.0.min.js",
                                    type: "text/javascript",
                                    rel: "",
                                    id: "awssdk"
                                };
                                yield this.globalService.loadScript(t.element, t.url, t.type, t.rel, t.id),
                                    this.AWS = AWS,
                                    this.AWS.events.on("retry", s => {
                                        if (s && s.error && "RequestTimeTooSkewed" === s.error.name) {
                                            let a = Date.parse(s.httpResponse.headers.date)
                                                , r = (new Date).getTime();
                                            this.AWS.config.systemClockOffset = Math.abs(r - a),
                                                s.error.retryable = !0
                                        }
                                    }
                                    )
                            }
                            return this.AWS
                        })
                }
                getBlockly() {
                    return (0,
                        n.mG)(this, void 0, void 0, function* () {
                            if (!this.Blockly) {
                                const t = {
                                    element: "script",
                                    url: "https://images.examly.io/scripts/blockly/blockly_compressed.min.js",
                                    type: "text/javascript",
                                    rel: "",
                                    id: "blockly",
                                    child: [{
                                        element: "script",
                                        url: "https://images.examly.io/scripts/blockly/blocks_compressed.min.js",
                                        type: "text/javascript",
                                        rel: "",
                                        id: "blocks"
                                    }, {
                                        element: "script",
                                        url: "https://images.examly.io/scripts/blockly/javascript_compressed.min.js",
                                        type: "text/javascript",
                                        rel: "",
                                        id: "javascriptGenerator"
                                    }, {
                                        element: "script",
                                        url: "https://images.examly.io/scripts/blockly/en.min.js",
                                        type: "text/javascript",
                                        rel: "",
                                        id: "english"
                                    }, {
                                        element: "script",
                                        url: "https://images.examly.io/scripts/blockly/python_compressed.min.js",
                                        type: "text/javascript",
                                        rel: "",
                                        id: "pythonGenerator"
                                    }, {
                                        element: "script",
                                        url: "https://images.examly.io/scripts/blockly/php_compressed.min.js",
                                        type: "text/javascript",
                                        rel: "",
                                        id: "PHPGenerator"
                                    }]
                                };
                                yield this.globalService.loadScript(t.element, t.url, t.type, t.rel, t.id, t.child),
                                    this.Blockly = Blockly
                            }
                            return this.Blockly
                        })
                }
                getFirebase() {
                    return (0,
                        n.mG)(this, void 0, void 0, function* () {
                            if (!this.firebase) {
                                const t = {
                                    element: "script",
                                    url: "https://images.examly.io/scripts/FirebaseV8.2.0/firebase-app.js",
                                    type: "text/javascript",
                                    rel: "",
                                    id: "firebaseapp",
                                    child: [{
                                        element: "script",
                                        url: "https://images.examly.io/scripts/FirebaseV8.2.0/firebase-auth.js",
                                        type: "text/javascript",
                                        rel: "",
                                        id: "firebaseauth"
                                    }, {
                                        element: "script",
                                        url: "https://images.examly.io/scripts/FirebaseV8.2.0/firebase-firestore.js",
                                        type: "text/javascript",
                                        rel: "",
                                        id: "firebasefirestore"
                                    }, {
                                        element: "script",
                                        url: "https://images.examly.io/scripts/FirebaseV8.2.0/firebase-messaging.js",
                                        type: "text/javascript",
                                        rel: "",
                                        id: "firebasmessaging"
                                    }]
                                };
                                yield this.globalService.loadScript(t.element, t.url, t.type, t.rel, t.id, t.child),
                                    this.firebase = firebase,
                                    this.firebase.initializeApp(O.N.FireBaseKeys)
                            }
                            return this.firebase
                        })
                }
                getDrawio() {
                    return (0,
                        n.mG)(this, void 0, void 0, function* () {
                            if (!this.DiagramEditor) {
                                const t = {
                                    element: "script",
                                    url: "https://images.examly.io/scripts/diagram/diagram-editor.js",
                                    type: "text/javascript",
                                    rel: "",
                                    id: "drawio"
                                };
                                yield this.globalService.loadScript(t.element, t.url, t.type, t.rel, t.id),
                                    this.DiagramEditor = DiagramEditor
                            }
                            return this.DiagramEditor
                        })
                }
                getStackBlitz() {
                    return (0,
                        n.mG)(this, void 0, void 0, function* () {
                            if (!this.StackBlitzSDK) {
                                const t = {
                                    element: "script",
                                    url: "https://images.examly.io/scripts/stackblitz.js",
                                    type: "text/javascript",
                                    rel: "",
                                    id: "stackblitz"
                                };
                                yield this.globalService.loadScript(t.element, t.url, t.type, t.rel, t.id),
                                    this.StackBlitzSDK = StackBlitzSDK
                            }
                            return this.StackBlitzSDK
                        })
                }
                getAce() {
                    return (0,
                        n.mG)(this, void 0, void 0, function* () {
                            if (!this.ace) {
                                const t = {
                                    element: "script",
                                    url: "https://images.examly.io/scripts/ace/ace.js",
                                    type: "text/javascript",
                                    rel: "",
                                    id: "aceeditor"
                                };
                                yield this.globalService.loadScript(t.element, t.url, t.type, t.rel, t.id),
                                    this.ace = ace
                            }
                            return this.ace
                        })
                }
                getRecordRTC() {
                    return (0,
                        n.mG)(this, void 0, void 0, function* () {
                            if (!this.RecordRTC) {
                                const t = {
                                    element: "script",
                                    url: "https://images.examly.io/scripts/RecordRTC.js",
                                    type: "text/javascript",
                                    rel: "",
                                    id: "recordrtc"
                                };
                                yield this.globalService.loadScript(t.element, t.url, t.type, t.rel, t.id),
                                    this.RecordRTC = RecordRTC
                            }
                            return this.RecordRTC
                        })
                }
                getQuill() {
                    return (0,
                        n.mG)(this, void 0, void 0, function* () {
                            if (!this.Quill) {
                                const t = {
                                    element: "script",
                                    url: "https://images.examly.io/scripts/quill-new.min.js",
                                    type: "text/javascript",
                                    rel: "",
                                    id: "quill-editor",
                                    child: [{
                                        element: "link",
                                        url: "https://images.examly.io/scripts/quill-new.snow.css",
                                        type: "text/css",
                                        rel: "stylesheet",
                                        id: "quill-style"
                                    }]
                                };
                                yield this.globalService.loadScript(t.element, t.url, t.type, t.rel, t.id, t.child),
                                    this.Quill = Quill
                            }
                            return this.Quill
                        })
                }
                getInlineDebugger() {
                    return (0,
                        n.mG)(this, void 0, void 0, function* () {
                            if (!this.createAllVisualizersFromHtmlAttrs) {
                                const t = {
                                    element: "script",
                                    url: "https://images.examly.io/scripts/inline-debugger.js",
                                    type: "text/javascript",
                                    rel: "",
                                    id: "inlinedebugger"
                                };
                                yield this.globalService.loadScript(t.element, t.url, t.type, t.rel, t.id),
                                    this.createAllVisualizersFromHtmlAttrs = createAllVisualizersFromHtmlAttrs
                            }
                            return this.createAllVisualizersFromHtmlAttrs
                        })
                }
                getPosenet() {
                    return (0,
                        n.mG)(this, void 0, void 0, function* () {
                            if (!this.posenet) {
                                const t = {
                                    element: "script",
                                    url: "https://images.examly.io/scripts/TensorFlow/tf.min.js",
                                    type: "text/javascript",
                                    rel: "",
                                    id: "tfjs",
                                    child: [{
                                        element: "script",
                                        url: "https://images.examly.io/scripts/TensorFlow/posenet.min.js",
                                        type: "text/javascript",
                                        rel: "",
                                        id: "tfjs-posenet"
                                    }]
                                };
                                yield this.globalService.loadScript(t.element, t.url, t.type, t.rel, t.id, t.child),
                                    this.posenet = yield posenet.load()
                            }
                            return this.posenet
                        })
                }
                getSpeechCommands() {
                    return (0,
                        n.mG)(this, void 0, void 0, function* () {
                            if (!this.speechCommands) {
                                const t = {
                                    element: "script",
                                    url: "https://images.examly.io/scripts/TensorFlow/tf.min.js",
                                    type: "text/javascript",
                                    rel: "",
                                    id: "tfjs",
                                    child: [{
                                        element: "script",
                                        url: "https://images.examly.io/scripts/TensorFlow/speech-commands.min.js",
                                        type: "text/javascript",
                                        rel: "",
                                        id: "tfjs-speech-commands"
                                    }]
                                };
                                yield this.globalService.loadScript(t.element, t.url, t.type, t.rel, t.id, t.child),
                                    this.speechCommands = speechCommands
                            }
                            return this.speechCommands
                        })
                }
                getFaceApi() {
                    return (0,
                        n.mG)(this, void 0, void 0, function* () {
                            if (!this.faceapi) {
                                const t = {
                                    element: "script",
                                    url: "https://images.examly.io/scripts/TensorFlow/faceApi/face-api.min.js",
                                    type: "text/javascript",
                                    rel: "",
                                    id: "tfjs-faceapi"
                                };
                                yield this.globalService.loadScript(t.element, t.url, t.type, t.rel, t.id),
                                    yield faceapi.nets.tinyFaceDetector.loadFromUri("https://images.examly.io/scripts/TensorFlow/faceApi/weights"),
                                    yield faceapi.nets.faceLandmark68TinyNet.loadFromUri("https://images.examly.io/scripts/TensorFlow/faceApi/weights"),
                                    yield faceapi.nets.faceRecognitionNet.loadFromUri("https://images.examly.io/scripts/TensorFlow/faceApi/weights"),
                                    this.faceapi = faceapi
                            }
                            return this.faceapi
                        })
                }
                getBlazeFace() {
                    return (0,
                        n.mG)(this, void 0, void 0, function* () {
                            if (!this.blazeFace) {
                                const t = {
                                    element: "script",
                                    url: "https://images.examly.io/scripts/TensorFlow/blazeFace/tfjs.js",
                                    type: "text/javascript",
                                    rel: "",
                                    id: "tfjs-2.0",
                                    child: [{
                                        element: "script",
                                        url: "https://images.examly.io/scripts/TensorFlow/blazeFace/blazeface.min.js",
                                        type: "text/javascript",
                                        rel: "",
                                        id: "tfjs-blazeface"
                                    }]
                                };
                                yield this.globalService.loadScript(t.element, t.url, t.type, t.rel, t.id, t.child),
                                    this.blazeFace = yield blazeface.load({
                                        maxFaces: 100,
                                        iouThreshold: .5
                                    })
                            }
                            return this.blazeFace
                        })
                }
                authSDK() {
                    return new Promise((t, s) => {
                        this.http.get(this.api_link + "/getToken", this.httpRequestOptions()).subscribe(a => (0,
                            n.mG)(this, void 0, void 0, function* () {
                                const r = yield this.getCryptoJS();
                                a = JSON.parse(r.AES.decrypt(a.data, this.userData.user_id).toString(r.enc.Utf8));
                                const p = new Promise((u, v) => (0,
                                    n.mG)(this, void 0, void 0, function* () {
                                        if (a && a.c) {
                                            const y = yield this.getAWS();
                                            y.config.correctClockSkew = !0,
                                                y.config.region = O.N.debugger_queue.region,
                                                y.config.credentials = new y.CognitoIdentityCredentials({
                                                    IdentityPoolId: a.c.IdentityPoolId,
                                                    IdentityId: a.c.IdentityId,
                                                    Logins: {
                                                        "cognito-identity.amazonaws.com": a.c.Token
                                                    }
                                                }),
                                                y.config.credentials.get(f => {
                                                    u(!f)
                                                }
                                                )
                                        } else
                                            u(!1)
                                    }))
                                    , d = new Promise((u, v) => (0,
                                        n.mG)(this, void 0, void 0, function* () {
                                            a && a.f ? (yield this.getFirebase()).auth().signInWithCustomToken(a.f).then(() => {
                                                u(!0)
                                            }
                                            ).catch(f => {
                                                u(!1)
                                            }
                                            ) : u(!1)
                                        }));
                                Promise.all([p, d]).then(u => {
                                    t(!(!u[0] || !u[1]))
                                }
                                )
                            }), a => {
                                t(!1)
                            }
                        )
                    }
                    )
                }
                getTestType() {
                    return this.testData.test_type || (this.testData.test_type = "Rule Based Test" === this.testData.t_type ? "Dynamic" === this.testData.isTestruletype ? "dynamic" : "static" : "normal"),
                        this.testData.test_type
                }
                getSubmissionLimit() {
                    let t = {
                        compile_count: 0,
                        submit_count: 0,
                        compile_total: 0,
                        submit_total: 0
                    };
                    return this.testData && this.testData.compile_total && this.testData.compile_total > 0 && (t.compile_total = this.testData.compile_total),
                        this.testData && this.testData.submit_total && this.testData.submit_total > 0 && (t.submit_total = this.testData.submit_total),
                        this.testData && this.testData.compile_count && this.testData.compile_count > 0 && (t.compile_count = this.testData.compile_count),
                        this.testData && this.testData.submit_count && this.testData.submit_count > 0 && (t.submit_count = this.testData.submit_count),
                        t
                }
                checkAccessKey(t) {
                    return new Promise((s, a) => {
                        if (this.userData && this.testData)
                            return this.http.post(this.api_link + "/student/" + this.userData.user_id + "/course/" + this.testData.c_id + "/test/" + this.testData.t_id + "/pretake", {
                                access_key: t
                            }, this.httpRequestOptions()).subscribe(r => {
                                s(r)
                            }
                                , () => {
                                    a(!1)
                                }
                            );
                        s(!1)
                    }
                    )
                }
                checkStudentAccessKey(t) {
                    return new Promise((s, a) => {
                        if (this.userData && this.testData)
                            return this.http.post(this.api_link + "/student/course/validateStudentAccesskey", {
                                c_id: this.testData.c_id,
                                t_id: this.testData.t_id,
                                user_id: this.userData.user_id,
                                access_key: t
                            }, this.httpRequestOptions()).subscribe(p => {
                                s(p)
                            }
                                , () => {
                                    a(!1)
                                }
                            );
                        s(!1)
                    }
                    )
                }
                getBasicData() {
                    return new Promise((t, s) => (0,
                        n.mG)(this, void 0, void 0, function* () {
                            this.testData.client_data = {
                                OS: {
                                    name: "",
                                    version: ""
                                },
                                browser: {
                                    name: "",
                                    major: "",
                                    version: ""
                                },
                                Public_IP: "",
                                answer_s3_link: "",
                                pdfName: ""
                            };
                            let a = [this.getIpAddress(), this.getBrowserName(), this.getOS()];
                            localStorage.getItem("jobId") && localStorage.getItem("stageId") && a.push(this.getHireData()),
                                Promise.all(a).then(r => {
                                    r && r.length && t(!!(r[0] && r[1] && r[2]))
                                }
                                ).catch(r => {
                                    t(!1)
                                }
                                )
                        }))
                }
                getHireData() {
                    return new Promise((t, s) => {
                        var a;
                        let u, r = localStorage.getItem("jobId"), p = localStorage.getItem("stageId"), d = null === (a = this.schoolData) || void 0 === a ? void 0 : a.school_id;
                        r && p && (u = {
                            jobId: r,
                            stageId: p,
                            school_id: d
                        }),
                            this.testData.client_data.hireData = u || !1,
                            t(!0)
                    }
                    )
                }
                getObject(t) {
                    return new Promise((s, a) => this.http.get(t, {
                        responseType: "text"
                    }).subscribe(r => {
                        s(r)
                    }
                        , r => {
                            s(!1)
                        }
                    ))
                }
                uploadUsingSDK(t, s, a) {
                    return new C.y(r => {
                        const p = new AWS.S3({
                            httpOptions: {
                                timeout: 3e5
                            }
                        })
                            , d = {
                                Bucket: "exams-media-stage",
                                Key: t,
                                Body: s
                            };
                        this.api_link.includes(".io") && (d.Bucket = "exams-media"),
                            (t.includes("screen") || "proctoring" === a) && (d.Bucket = "dev-proctoring-screen",
                                this.api_link.includes(".io") && (d.Bucket = "prod-proctoring-screen"),
                                t.includes("/images/") && this.lpuBucketSchools.includes(this.schoolData.school_id) && (d.Bucket = "lpu-proctoring-screenshot")),
                            p.upload(d, {
                                partSize: 5242880,
                                queueSize: 1
                            }, (v, y) => {
                                v ? r.error(v) : (r.next({
                                    progress: 100,
                                    Key: y.Key
                                }),
                                    r.complete())
                            }
                            ).on("httpUploadProgress", v => {
                                const y = parseInt((100 * v.loaded / v.total).toString(), 10);
                                r.next({
                                    progress: y
                                })
                            }
                            )
                    }
                    )
                }
                getIpAddress() {
                    return new Promise((t, s) => {
                        this.schoolData && this.ipSkipSchools.includes(this.schoolData.school_id) ? (this.testData.client_data.Public_IP = "",
                            t(!0)) : this.http.get("https://icanhazip.com/", {
                                responseType: "text"
                            }).subscribe(a => {
                                this.testData.client_data.Public_IP = a.trim(),
                                    t(!0)
                            }
                                , a => {
                                    this.http.get("https://api.ipify.org/", {
                                        responseType: "text"
                                    }).subscribe(r => {
                                        this.testData.client_data.Public_IP = r.toString().trim(),
                                            t(!0)
                                    }
                                        , r => {
                                            t(!1)
                                        }
                                    )
                                }
                            )
                    }
                    )
                }
                getBrowserName() {
                    return new Promise((t, s) => {
                        let a = navigator.userAgent
                            , r = navigator.appName
                            , p = "" + parseFloat(navigator.appVersion)
                            , d = parseInt(navigator.appVersion, 10)
                            , u = -1
                            , v = -1
                            , y = -1;
                        -1 != (v = a.indexOf("OPR/")) ? (r = "Opera",
                            p = a.substring(v + 4)) : -1 != (v = a.indexOf("Opera")) ? (r = "Opera",
                                p = a.substring(v + 6),
                                -1 != (v = a.indexOf("Version")) && (p = a.substring(v + 8))) : -1 != (v = a.indexOf("Edg")) ? (r = "Microsoft Edge",
                                    p = a.substring(v + 4)) : -1 != (v = a.indexOf("MSIE")) ? (r = "Microsoft Internet Explorer",
                                        p = a.substring(v + 5)) : -1 != (v = a.indexOf("Chrome")) ? (r = "Chrome",
                                            p = a.substring(v + 7)) : -1 != (v = a.indexOf("CriOS")) ? (r = "Chrome",
                                                p = a.substring(v + 6)) : -1 != (v = a.indexOf("Safari")) ? (r = "Safari",
                                                    p = a.substring(v + 7),
                                                    -1 != (v = a.indexOf("Version")) && (p = a.substring(v + 8))) : -1 != (v = a.indexOf("Firefox")) ? (r = "Firefox",
                                                        p = a.substring(v + 8)) : (u = a.lastIndexOf(" ") + 1) < (v = a.lastIndexOf("/")) && (r = a.substring(u, v),
                                                            p = a.substring(v + 1),
                                                            r.toLowerCase() == r.toUpperCase() && (r = navigator.appName)),
                            navigator.userAgentData && navigator.userAgentData.brands && navigator.userAgentData.brands.forEach(f => {
                                "Brave" === f.brand && (r = "Brave",
                                    p = a.substring(v + 7))
                            }
                            ),
                            -1 != (y = p.indexOf(";")) && (p = p.substring(0, y)),
                            -1 != (y = p.indexOf(" ")) && (p = p.substring(0, y)),
                            d = parseInt("" + p, 10),
                            isNaN(d) && (p = "" + parseFloat(navigator.appVersion),
                                d = parseInt(navigator.appVersion, 10)),
                            this.testData.client_data.browser.name = r,
                            this.testData.client_data.browser.major = "" + d,
                            this.testData.client_data.browser.version = p,
                            t(!0)
                    }
                    )
                }
                getOS() {
                    return new Promise((t, s) => {
                        let a = "Unknown OS";
                        -1 != navigator.appVersion.indexOf("Win") && (a = "Windows"),
                            -1 != navigator.appVersion.indexOf("Mac") && (a = "MacOS"),
                            -1 != navigator.appVersion.indexOf("X11") && (a = "UNIX"),
                            -1 != navigator.appVersion.indexOf("Linux") && (a = "Linux"),
                            -1 != navigator.appVersion.indexOf("Android") && (a = "Android"),
                            (-1 != navigator.appVersion.indexOf("iPhone") || -1 != navigator.appVersion.indexOf("iPad")) && (a = "iOS"),
                            this.testData.client_data.OS.name = a,
                            t(!0)
                    }
                    )
                }
                checkTestState() {
                    let s = JSON.parse(localStorage.getItem("itl-" + this.testData.c_id + this.testData.t_id));
                    return this.testData.client_data.ltiData = s || !1,
                        this.http.post(this.api_link + "/mM5YsmcTM6Msoj5r", {
                            user_id: this.userData.user_id,
                            c_id: this.testData.c_id,
                            t_id: this.testData.t_id,
                            attempt_no: this.testData.attempt_no,
                            client_data: this.testData.client_data,
                            test_type: this.getTestType(),
                            test_tracking_data: this.testData.test_tracking_data,
                            retakeenable: this.testData.retakeenable,
                            mod_id: this.testData.mod_id,
                            sub_mod_id: this.testData.sub_mod_id
                        }, this.httpRequestOptions())
                }
                getTestTakingDetail(t) {
                    return new Promise((s, a) => {
                        this.http.post(this.api_link + "/testtakingdetails", {
                            id: t
                        }, this.httpRequestOptions()).subscribe(r => (0,
                            n.mG)(this, void 0, void 0, function* () {
                                if (r && r.success) {
                                    const p = yield this.getCryptoJS();
                                    r.data = p.AES.decrypt(r.data, this.encryptDecryptKeyGeneration()).toString(p.enc.Utf8);
                                    const d = JSON.parse(r.data);
                                    this.isProctoringType = d.c_modules.remote_proctoring_type ? d.c_modules.remote_proctoring_type : null,
                                        this.isProjectQuestion.next(d.project_question),
                                        this.videoQuestion.next(d.video_answer_speaking),
                                        this.proctorUserID.next(d.test_proc_id ? d.test_proc_id.proctor_id : null),
                                        this.proctorID = d.test_proc_id ? d.test_proc_id.proctor_id : null,
                                        this.cloudQuestionResponse.next(JSON.stringify({
                                            cloud_question: d.cloud_question,
                                            cloud_provider: d.cloud_provider
                                        }))
                                }
                                s(r)
                            }), r => {
                                s(!1)
                            }
                        )
                    }
                    )
                }
                startTest(t) {
                    return new Promise((s, a) => {
                        this.http.post(this.api_link + "/9DECJfxqhu0cgJAQ", t, this.httpRequestOptions()).subscribe(r => (0,
                            n.mG)(this, void 0, void 0, function* () {
                                var p, d;
                                const u = yield this.getCryptoJS();
                                r = JSON.parse(u.AES.decrypt(r.data, this.encryptDecryptKeyGeneration()).toString(u.enc.Utf8)),
                                    (null === (d = null === (p = this.testData) || void 0 === p ? void 0 : p.c_modules) || void 0 === d ? void 0 : d.dual_proctoring_test) && this.proctorID && this.dualProcFirestoreData({
                                        user_id: this.proctorID,
                                        school_id: this.schoolData.school_id,
                                        message_type: "both-camera-connected",
                                        c_id: this.testData.c_id,
                                        t_id: this.testData.t_id
                                    }, this.userData.user_id, {
                                        test_status: !0,
                                        allow_test: !0,
                                        start_call: !1,
                                        call_accepted: !1,
                                        desktop_status: !1,
                                        mobile_status: !1
                                    }),
                                    s(r)
                            }), r => {
                                s(!1)
                            }
                        )
                    }
                    )
                }
                resumeTest(t) {
                    return new Promise((s, a) => {
                        this.http.post(this.api_link + "/sEKMRyOJKjIzZbUa", t, this.httpRequestOptions()).subscribe(r => (0,
                            n.mG)(this, void 0, void 0, function* () {
                                var p, d;
                                const u = yield this.getCryptoJS();
                                r = JSON.parse(u.AES.decrypt(r.data, this.encryptDecryptKeyGeneration()).toString(u.enc.Utf8)),
                                    (null === (d = null === (p = this.testData) || void 0 === p ? void 0 : p.c_modules) || void 0 === d ? void 0 : d.dual_proctoring_test) && this.proctorID && this.dualProcFirestoreData({
                                        user_id: this.proctorID,
                                        school_id: this.schoolData.school_id,
                                        message_type: "both-camera-connected",
                                        c_id: this.testData.c_id,
                                        t_id: this.testData.t_id
                                    }, this.userData.user_id, {
                                        test_status: !0,
                                        allow_test: !0,
                                        start_call: !1,
                                        call_accepted: !1,
                                        desktop_status: !1,
                                        mobile_status: !1
                                    }),
                                    s(r)
                            }), r => {
                                s(!1)
                            }
                        )
                    }
                    )
                }
                generateSerachKeys(t) {
                    let s = [];
                    for (let a in t)
                        if (t[a]) {
                            let r = t[a];
                            r = r.split(" "),
                                r.forEach(p => {
                                    for (let d = 0; d < p.length; d += 1)
                                        for (let u = d + 1; u <= p.length; u += 1)
                                            s.push(p.substring(d, u))
                                }
                                )
                        }
                    return s
                }
                setHistoryEvent(t) {
                    return new Promise((s, a) => (0,
                        n.mG)(this, void 0, void 0, function* () {
                            (yield this.getFirebase()).firestore().collection("student_programming_events").add(JSON.parse(JSON.stringify({
                                user_id: t.user_id,
                                c_id: t.c_id,
                                t_id: t.t_id,
                                q_id: t.q_id,
                                attempt_no: t.attempt_no,
                                s_question_id: t.s_question_id,
                                question_type: t.question_type,
                                event_type: t.event_type,
                                testcase_passed: t.testcase_passed,
                                no_test_cases: t.no_test_cases,
                                testcase_percentage: t.testcase_percentage,
                                event_data: t.l_event_data,
                                updatedAt: t.updatedAt
                            }))).then(() => {
                                s(!0)
                            }
                            ).catch(d => {
                                s(!1)
                            }
                            )
                        }))
                }
                fireStoredEvent() {
                    return new Promise((t, s) => {
                        let a = localStorage.getItem("session_data");
                        if (a) {
                            a = JSON.parse(a);
                            const r = []
                                , p = [];
                            a.forEach((d, u) => {
                                p.push(new Promise((v, y) => {
                                    this.hitHttpCall(d).then(f => {
                                        if (f) {
                                            let E, R, A = 0;
                                            d && d.payload && (E = d.payload.s_question_id ? d.payload.s_question_id : null,
                                                R = d.payload.event_type ? d.payload.event_type : null),
                                                ("submit-program" === R || "option-click" === R) && (this.testData.frozen_data.frozen_test_data.forEach(B => {
                                                    B.questions.forEach(b => {
                                                        b.s_question_id === E && (A++,
                                                            b.online = !0)
                                                    }
                                                    )
                                                }
                                                ),
                                                    A && this.updateQuestionCount.next(!0)),
                                                v(!0)
                                        } else
                                            r.push(d),
                                                v(!1)
                                    }
                                    )
                                }
                                ))
                            }
                            ),
                                Promise.all(p).then(() => {
                                    r && r.length ? localStorage.setItem("session_data", JSON.stringify(r)) : localStorage.removeItem("session_data")
                                }
                                )
                        } else
                            t(!0)
                    }
                    )
                }
                hitHttpCall(t) {
                    return new Promise((a, r) => {
                        const p = new e.WM({
                            "Content-Type": "application/json",
                            Authorization: t.token
                        });
                        return "" === t.payload ? this.http.get(t.url, {
                            headers: p
                        }).subscribe(() => {
                            a(!0)
                        }
                            , d => {
                                s(d, a)
                            }
                        ) : this.http.post(t.url, t.payload, {
                            headers: p
                        }).subscribe(() => {
                            a(!0)
                        }
                            , d => {
                                s(d, a)
                            }
                        )
                    }
                    );
                    function s(a, r) {
                        r(!(!a || 401 !== a.status && 400 !== a.status))
                    }
                }
                storeInLocal(t) {
                    const r = {
                        payload: t,
                        timestamp: Date.now(),
                        url: O.N.HOST.link2 + "/question/all/event",
                        token: this.userData.token
                    };
                    let p = localStorage.getItem("session_data");
                    p ? (p = JSON.parse(p),
                        p.push(r),
                        localStorage.setItem("session_data", JSON.stringify(p))) : localStorage.setItem("session_data", JSON.stringify([r]))
                }
                setEvent(t) {
                    return new Promise((s, a) => {
                        this.http.post(`${O.N.HOST.link2}/question/all/event`, t, this.httpRequestOptions()).subscribe(r => {
                            s(r)
                        }
                            , r => {
                                this.storeInLocal(t),
                                    a(!1)
                            }
                        )
                    }
                    )
                }
                setCurrentEvent(t) {
                    return new Promise((s, a) => {
                        t.browser_createdAt = firebase.firestore.Timestamp.now().toMillis(),
                            this.http.post(`${O.N.HOST.link2}/project/all/events`, t, this.httpRequestOptions()).subscribe(r => {
                                s(r)
                            }
                                , r => {
                                    a(!1)
                                }
                            )
                    }
                    )
                }
                setCurrentTestEvent(t) {
                    return new Promise((s, a) => {
                        t.browser_createdAt = firebase.firestore.Timestamp.now().toMillis(),
                            this.http.post(`${O.N.HOST.link2}/test/all/events`, t, this.httpRequestOptions()).subscribe(r => {
                                s(r)
                            }
                                , r => {
                                    a(!1)
                                }
                            )
                    }
                    )
                }
                setLastEvent(t, s) {
                    return new Promise((a, r) => (0,
                        n.mG)(this, void 0, void 0, function* () {
                            let p;
                            "submit-program" === s.event_type && ("programming" === s.question_type || "programming_file_based" === s.question_type || "html_css_js" === s.question_type || "frontend_technology" === s.question_type || "diagram" === s.question_type) && this.setHistoryEvent(s);
                            const u = (yield this.getFirebase()).firestore()
                                , v = [];
                            v.push(u.collection("student_questions").doc("" + t).set(JSON.parse(JSON.stringify(s)))),
                                s.l_event_data && s.l_event_data.remaining_time && (p = {
                                    answer: s.l_event_data.answer,
                                    remaining_time: {
                                        overall: s.l_event_data.remaining_time.overall,
                                        time_spent: s.l_event_data.remaining_time.time_spent,
                                        tabswitched: s.l_event_data.remaining_time.tabswitched,
                                        resume_no: s.l_event_data.remaining_time.resume_no,
                                        exp_resume: s.l_event_data.remaining_time.exp_resume,
                                        hasExternalMonitor: s.l_event_data.remaining_time.hasExternalMonitor,
                                        video_question_attempt: s.l_event_data.remaining_time.video_question_attempt
                                    }
                                },
                                    v.push(this.setEvent({
                                        s_question_id: t,
                                        event_type: s.event_type,
                                        event_data: JSON.stringify(p),
                                        attempt_no: s.attempt_no,
                                        browser_createdAt: s.updatedAt
                                    }))),
                                Promise.all(v).then(() => {
                                    a({
                                        success: !0,
                                        s_question_id: s.s_question_id,
                                        event_type: s.event_type,
                                        sectionIndex: s.sectionIndex
                                    })
                                }
                                ).catch(y => {
                                    y && y.message && y.message.includes("permissions") ? a({
                                        success: !0,
                                        s_question_id: s.s_question_id,
                                        event_type: s.event_type,
                                        sectionIndex: s.sectionIndex
                                    }) : !1 === y ? this.setEvent({
                                        s_question_id: t,
                                        event_type: s.event_type,
                                        event_data: JSON.stringify(p),
                                        attempt_no: s.attempt_no,
                                        browser_createdAt: s.updatedAt
                                    }).then(() => {
                                        console.log("Retrying setlastevent")
                                    }
                                    ).catch(f => {
                                        console.log("Error in setLastEvent: ", f)
                                    }
                                    ) : a({
                                        success: !1,
                                        s_question_id: s.s_question_id,
                                        event_type: s.event_type,
                                        sectionIndex: s.sectionIndex
                                    })
                                }
                                )
                        }))
                }
                setLiveData(t) {
                    return new Promise((s, a) => (0,
                        n.mG)(this, void 0, void 0, function* () {
                            const p = (yield this.getFirebase()).firestore();
                            t.updatedAt = this.testData.instanceTime.getTime();
                            const d = Object.assign({}, JSON.parse(JSON.stringify(t)));
                            let v = p.collection(`school_live_metrics/${t.school_id}/live_course_test/${t.c_id}_${t.t_id}/live_students`);
                            if (v = v.doc(t.user_id),
                                yield v.get().then(y => {
                                    const f = y.data();
                                    f && (d.session_ID = f.session_ID)
                                }
                                ),
                                p.collection(`school_live_metrics/${t.school_id}/live_course_test/${t.c_id}_${t.t_id}/live_students`).doc(t.user_id).set(d, {
                                    merge: !0
                                }).then(() => {
                                    s(!0)
                                }
                                ).catch(y => {
                                    s(!1)
                                }
                                ),
                                t.has_project_questions && this.testData.projectQuestionKeyString) {
                                const y = {
                                    user_id: t.user_id,
                                    school_id: t.school_id,
                                    updatedAt: t.updatedAt,
                                    keyString: this.testData.projectQuestionKeyString,
                                    domain: localStorage.getItem("t_p_domain") ? localStorage.getItem("t_p_domain") : "premiumproject.examly.io",
                                    c_id: t.c_id,
                                    t_id: t.t_id,
                                    student_course_project_id: !1
                                };
                                this.setProjectAssesmentLiveMetrics(y)
                            }
                        }))
                }
                dualProcFirestoreData(t, s, a) {
                    return (0,
                        n.mG)(this, void 0, void 0, function* () {
                            try {
                                const p = (yield this.getFirebase()).firestore()
                                    , d = `dual_proctoring/${t.school_id}/${t.c_id}_${t.t_id}`
                                    , u = `${s}`;
                                yield p.collection(d).doc(u).set({
                                    course_id: t.c_id,
                                    test_id: t.t_id,
                                    user_id: s,
                                    connected_status: t.message_type,
                                    test_status: a.test_status,
                                    allow_test: a.allow_test,
                                    start_call: a.start_call,
                                    call_accepted: a.call_accepted,
                                    desktop_status: a.desktop_status,
                                    mobile_status: a.mobile_status
                                }, {
                                    merge: !0
                                })
                            } catch (r) {
                                console.error("Error writing document: ", r)
                            }
                        })
                }
                deleteDualProcFirestoreData(t, s) {
                    return (0,
                        n.mG)(this, void 0, void 0, function* () {
                            try {
                                const r = (yield this.getFirebase()).firestore()
                                    , p = `dual_proctoring/${t.school_id}/${t.c_id}_${t.t_id}`
                                    , d = `${s}`;
                                yield r.collection(p).doc(d).delete()
                            } catch (a) {
                                console.error("Error deleting document: ", a)
                            }
                        })
                }
                deleteCloudHeartBeat(t) {
                    return (0,
                        n.mG)(this, void 0, void 0, function* () {
                            try {
                                const a = (yield this.getFirebase()).firestore()
                                    , { cloud_c_id: r, cloud_school_id: p, cloud_service: d, cloud_t_id: u, cloud_user_id: v } = t
                                    , y = "cloudHeartBeat"
                                    , f = `${p}/${d}/${r}/${u}/${v}`;
                                yield a.collection(y).doc(f).delete()
                            } catch (s) {
                                console.error("Error deleting cloudHeartBeat document:", s)
                            }
                        })
                }
                cloudHeartBeat(t) {
                    return (0,
                        n.mG)(this, void 0, void 0, function* () {
                            try {
                                const a = (yield this.getFirebase()).firestore()
                                    , { cloud_c_id: r, cloud_school_id: p, cloud_service: d, cloud_t_id: u, cloud_user_id: v, s_question_id: y } = t
                                    , f = "cloudHeartBeat"
                                    , E = `${p}/${d}/${r}/${u}/${v}`;
                                yield a.collection(f).doc(E).set({
                                    cloud_service: d,
                                    cloud_school_id: p,
                                    cloud_c_id: r,
                                    cloud_t_id: u,
                                    cloud_user_id: v,
                                    s_question_id: y,
                                    updatedAt: firebase.firestore.FieldValue.serverTimestamp()
                                })
                            } catch (s) {
                                console.error("Error handling cloudHeartBeat:", s)
                            }
                        })
                }
                setProjectAssesmentLiveMetrics(t) {
                    return new Promise((s, a) => (0,
                        n.mG)(this, void 0, void 0, function* () {
                            const p = (yield this.getFirebase()).firestore();
                            t.updatedAt = firebase.firestore.Timestamp.now().toMillis(),
                                p.collection(`student_project_live_metrics/${t.school_id}/live_projects/${t.c_id}_${t.t_id}/live_project_students`).doc(t.user_id).set(t, {}).then(() => {
                                    s(!0)
                                }
                                )
                        }))
                }
                updateTestDailyDurationSpent(t) {
                    return new Promise((s, a) => (0,
                        n.mG)(this, void 0, void 0, function* () {
                            const p = (yield this.getFirebase()).firestore();
                            let d = new Date(t.updatedAt).toLocaleDateString("fr-CA", {
                                timeZone: "Asia/Kolkata"
                            });
                            const f = d.split("-")[2] + "_" + d.split("-")[1] + "_" + d.split("-")[0]
                                , E = Object.assign({}, JSON.parse(JSON.stringify(t)));
                            let R = {};
                            t.attempt_no ? R[E.attempt_no] = E : R = E,
                                p.collection(`students_dailytime_spent/${f}/schools/${t.school_id}/users/${t.user_id}/courses/${t.c_id}/entity`).doc(t.entity_id).set(R, {
                                    merge: !0
                                }).then(() => {
                                    s(!0)
                                }
                                ).catch(A => {
                                    s(!1)
                                }
                                )
                        }))
                }
                getURL(t) {
                    return this.http.get(t)
                }
                sendStudentCloudQndata(t) {
                    return this.http.post(this.api_link + "/student/cloud_question", t, this.httpRequestOptions())
                }
                testRating(t) {
                    return this.http.post(this.api_link + "/test/student/rating", t, this.httpRequestOptions())
                }
                publishToStream(t) {
                    return this.http.post(O.N.HOST.link2 + "/publishPubSub", t, this.httpRequestOptions())
                }
                publishToVIStream(t) {
                    return this.http.post(O.N.HOST.link2 + "/vidPubSub", t, this.httpRequestOptions())
                }
                testSubmitBE(t, s, a, r, p, d) {
                    return new Promise((u, v) => {
                        this.http.post(this.api_link + "/school/" + t + "/student/" + r + "/course/" + s + "/test/" + a + "/submit/" + p, d, this.httpRequestOptions()).subscribe(y => {
                            u(y)
                        }
                            , () => {
                                u(!1)
                            }
                        )
                    }
                    )
                }
                sonarQubeReport(t) {
                    return this.http.post(this.api_link + "/generateSonarQubeReport", t, this.httpRequestOptions())
                }
                reportQuestion(t) {
                    return this.http.post(this.api_link + "/addfeedback", t, this.httpRequestOptions())
                }
                getTestPublicAnalysis(t) {
                    return this.http.post(this.api_link + "/v2/test/student/publicresultanalysis", t)
                }
                getTestAnalysisById(t) {
                    return this.http.post(this.api_link + "/v2/test/student/resultanalysis", {
                        id: t
                    }, this.httpRequestOptions())
                }
                getContent(t) {
                    return this.http.get(this.api_link + "/get_contentbank/" + t, this.httpRequestOptions())
                }
                updateViewORDownloadCount(t) {
                    return this.http.put(this.api_link + "/studentcontent/viewORdownloadCount", t, this.httpRequestOptions())
                }
                createInstance(t, s, a, r, p) {
                    return this.http.post(this.api_link + "/courses/createInstance", {
                        key: t,
                        image: s,
                        project_id: a,
                        course_id: r,
                        node_pool: p
                    }, this.httpRequestOptions())
                }
                fetchCompileResult(t) {
                    return this.http.post(this.compile_url, t)
                }
                createInstanceForTest(t) {
                    return this.http.post(this.api_link + "/test/student/createInstance", {
                        data: t
                    }, this.httpRequestOptions())
                }
                commithistory(t) {
                    return this.http.post(this.api_link + "/test/student/commithistory", {
                        data: t
                    })
                }
                getProject(t, s, a) {
                    return this.http.post(this.api_link + "/courses/project", {
                        project_id: t,
                        c_id: s,
                        user_id: a
                    }, this.httpRequestOptions())
                }
                stopInstance(t, s, a, r, p) {
                    return this.http.post(this.api_link + "/courses/stopInstance", {
                        key: t,
                        project_id: s,
                        course_id: a,
                        domain: r,
                        isBackup: p,
                        user_id: this.userData.user_id,
                        school_id: this.schoolData.school_id,
                        image: this.projectData.image_url,
                        student_course_project_id: this.projectData.student_course_project.id,
                        c_id_t_id: this.projectData.c_id + "_" + this.projectData.student_course_project.id
                    }, this.httpRequestOptions())
                }
                stopInstanceBulk(t, s) {
                    var a, r;
                    return this.http.post(this.api_link + "/test/student/stopInstance", {
                        data: t,
                        domain: s,
                        isBackup: !0,
                        school_id: this.schoolData.school_id,
                        image: (null === (a = this.testData) || void 0 === a ? void 0 : a.projectImageUrl) ? null === (r = this.testData) || void 0 === r ? void 0 : r.projectImageUrl : "",
                        user_id: this.userData.user_id,
                        c_id_t_id: this.testData.c_id + "_" + this.testData.t_id
                    }, this.httpRequestOptions())
                }
                instanceHeartBeat(t, s) {
                    return this.http.post(this.api_link + "/courses/instanceHeartBeat", {
                        key: t,
                        id: s
                    }, this.httpRequestOptions())
                }
                setStorageSize(t, s) {
                    return this.http.post(this.api_link + "/courses/setStorageSize", {
                        key: t,
                        id: s
                    }, this.httpRequestOptions())
                }
                setStorageSizeForTestProject(t, s, a) {
                    return this.http.post(this.api_link + "/test/student/setStorageSizeForTestProject", {
                        key: t,
                        id: s,
                        domain: a
                    }, this.httpRequestOptions())
                }
                getPDStorageSize(t) {
                    return this.http.get(`${this.api_link}/test/student/storage-size/${t}`, this.httpRequestOptions())
                }
                isSiteUp(t) {
                    return this.http.post(this.api_link + "/courses/isReachable", {
                        url: t
                    }, this.httpRequestOptions())
                }
                submitProject(t) {
                    return this.http.post(this.api_link + "/courses/submitproject", t, this.httpRequestOptions())
                }
                runTestCases(t) {
                    return this.http.post(this.api_link + "/courses/runtestcase", t, this.httpRequestOptions())
                }
                runProjectTestCases(t) {
                    return this.http.post(this.api_link + "/test/student/runprojecttestcase", t, this.httpRequestOptions())
                }
                executeDispatch(t) {
                    return this.http.post(this.api_link + "/test/student/executeDispatch", t, this.httpRequestOptions())
                }
                resizeHandler() {
                    window.innerHeight >= screen.height - 30 && window.innerWidth >= screen.width - 30 ? this.isWindowResize.next(!1) : this.isWindowResize.next(!0)
                }
                detectWindowResize() {
                    window.onresize = this.resizeHandler.bind(this)
                }
                removeWindowResize() {
                    this.isWindowResize.next(!1),
                        window.onresize = null
                }
                goFullScreen() {
                    if (document.fullscreenEnabled) {
                        const t = document.documentElement;
                        if (t.requestFullscreen) {
                            try {
                                t.requestFullscreen().then(() => {
                                    setTimeout(() => {
                                        this.testData.c_modules.off_screen && this.testData.c_modules.offscreencount && !this.userscreenHeight && !this.globalService.skipScreenCheck && (this.userscreenHeight = document.scrollingElement.clientHeight)
                                    }
                                        , 1e3)
                                }
                                ).catch(() => { }
                                )
                            } catch (s) { }
                            addEventListener("fullscreenchange", s => {
                                !this.skipscreenCheck && !this.globalService.skipScreenCheck && this.userscreenHeight && setTimeout(() => {
                                    this.checkuserHeight()
                                }
                                    , 1e3)
                            }
                            )
                        }
                    }
                }
                checkuserHeight() {
                    this.testData && this.testData.c_modules && this.testData.c_modules.off_screen && this.testData.c_modules.offscreencount && !this.globalService.skipScreenCheck && this.userscreenHeight != document.scrollingElement.clientHeight && this.isWindowResize.next(!0)
                }
                exitFullScreen() {
                    document.fullscreenElement && document.exitFullscreen && document.exitFullscreen().catch(() => { }
                    )
                }
                checkProctoringAllowed() {
                    const t = JSON.parse(localStorage.getItem("token"));
                    return !!(t && t.enable_features && t.enable_features.allow_proctoring)
                }
                getMediaDevice(t) {
                    return (0,
                        n.mG)(this, void 0, void 0, function* () {
                            return new Promise((s, a) => {
                                navigator.mediaDevices && navigator.mediaDevices.getUserMedia ? navigator.mediaDevices.getUserMedia(t).then(r => {
                                    s(r)
                                }
                                ).catch(r => {
                                    a(r)
                                }
                                ) : a("Could not access camera or microphone")
                            }
                            )
                        })
                }
                getUserCamera() {
                    return new Promise((t, s) => {
                        const a = r => {
                            let p = "";
                            switch (r.name) {
                                case "AbortError":
                                default:
                                    p = "Could not access camera or microphone";
                                    break;
                                case "NotAllowedError":
                                    p = "Please unblock camera and microphone";
                                    break;
                                case "NotFoundError":
                                    p = "Camera or microphone not found"
                            }
                            s(p)
                        }
                            ;
                        this.getMediaDevice({
                            video: {
                                facingMode: "user"
                            },
                            audio: !0
                        }).then(r => {
                            if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices)
                                return t(r);
                            navigator.mediaDevices.enumerateDevices().then(p => (0,
                                n.mG)(this, void 0, void 0, function* () {
                                    let d = !1;
                                    if (r.getVideoTracks().forEach(v => {
                                        const y = v.getSettings()
                                            , f = p.find(E => E.deviceId === y.deviceId);
                                        d = !!this.webcamBlackList.find(E => f.label.includes(E))
                                    }
                                    ),
                                        d) {
                                        const v = p.filter(y => "videoinput" === y.kind && !this.webcamBlackList.find(f => y.label.includes(f)));
                                        try {
                                            let y;
                                            for (const f of v) {
                                                const E = yield this.getMediaDevice({
                                                    video: {
                                                        deviceId: f.deviceId,
                                                        facingMode: "user"
                                                    },
                                                    audio: !0
                                                }).catch(R => {
                                                    y = R
                                                }
                                                );
                                                if (E) {
                                                    t(E);
                                                    break
                                                }
                                            }
                                            y && a(y)
                                        } catch (y) {
                                            a(y)
                                        }
                                    } else
                                        t(r)
                                })).catch(p => {
                                    a(p)
                                }
                                )
                        }
                        ).catch(r => {
                            a(r)
                        }
                        )
                    }
                    )
                }
                getRTCBlob(t) {
                    return new Promise((s, a) => {
                        t && "recording" === t.getState() ? t.stopRecording(() => {
                            s(t.getBlob())
                        }
                        ) : s(!1)
                    }
                    )
                }
                uploadToS3WithRetry(t, s, a = 2, r) {
                    return new Promise((p, d) => (0,
                        n.mG)(this, void 0, void 0, function* () {
                            const u = yield this.getAWS();
                            for (; a;) {
                                let v;
                                a -= 1,
                                    v = !(!(u && u.config && u.config.credentials && u.config.credentials) || u.config.credentials.expired) || (yield this.authSDK()),
                                    v && (yield this.uploadToS3WithSDK(t, s, r)) ? (a = 0,
                                        p(!0)) : a || d("AWS Error")
                            }
                        }))
                }
                uploadToS3WithSDK(t, s, a) {
                    return new Promise((r, p) => (0,
                        n.mG)(this, void 0, void 0, function* () {
                            try {
                                yield this.uploadUsingSDK(t, s, a).subscribe(() => { }
                                    , d => {
                                        r(!1)
                                    }
                                    , () => {
                                        r(!0)
                                    }
                                )
                            } catch (d) {
                                r(!1)
                            }
                        }))
                }
                uploadToS3(t, s, a) {
                    return new Promise((r, p) => (0,
                        n.mG)(this, void 0, void 0, function* () {
                            let d = {
                                file_name: t,
                                type: s.type,
                                extend: !0,
                                Bucket_name: null
                            };
                            a && (d.Bucket_name = a),
                                this.globalService.getSignedUrl(d).subscribe(u => {
                                    u && u.data ? this.globalService.uploadUsingSignedUrl(u.data.url, s).subscribe(v => {
                                        v && 200 === v.status ? r(!0) : p("Network error occured!")
                                    }
                                        , v => {
                                            p(v.message)
                                        }
                                    ) : p("Network error occured!")
                                }
                                    , u => {
                                        p(u.message)
                                    }
                                )
                        }))
                }
                deleteFaceverification(t, s) {
                    return new Promise((a, r) => (0,
                        n.mG)(this, void 0, void 0, function* () {
                            this.globalService.deleteFaceverification({
                                key: t,
                                bucket: s
                            }).subscribe(d => (0,
                                n.mG)(this, void 0, void 0, function* () {
                                    try {
                                        a(d)
                                    } catch (u) {
                                        r(u.message)
                                    }
                                }), d => {
                                    console.error("Error :", d),
                                        r(d.message)
                                }
                            )
                        }))
                }
                calculateMbps(t, s) {
                    if (s) {
                        const p = (Math.round(8 * t / s) / 1024).toFixed(2);
                        return Number((Number(p) / 1024).toFixed(2))
                    }
                    return 0
                }
                generateRandomData(t) {
                    const s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~!@#$%^&*()_+`-=[]{}|;':,./<>?"
                        , a = 1024 * t * 1024;
                    let r = "";
                    for (let p = 0; p < a; p++)
                        r += s.charAt(Math.floor(Math.random() * s.length));
                    return r
                }
                getUploadSpeed() {
                    return new C.y(t => {
                        let s = 0
                            , a = 0;
                        const r = 1024 * this.NET_SPEED_TEST_SIZE * 1024
                            , p = u => {
                                if (a = (new Date).getTime(),
                                    s < a) {
                                    const f = this.calculateMbps(r, (a - s) / 1e3 * (u.loaded > r ? 1 : r / u.loaded));
                                    return t.next(f),
                                        f
                                }
                                return 0
                            }
                            , d = this.httpRequestOptions();
                        this.http.post(O.N.speed_test, {
                            message: this.generateRandomData(this.NET_SPEED_TEST_SIZE)
                        }, Object.assign(Object.assign({}, d), {
                            observe: "events",
                            reportProgress: !0,
                            params: {
                                "ngsw-bypass": "true",
                                api_key: "BxSp@6878%qws"
                            }
                        })).subscribe(u => {
                            switch (u.type) {
                                case e.dt.Sent:
                                    s = (new Date).getTime();
                                    break;
                                case e.dt.UploadProgress:
                                    p(u),
                                        u.loaded >= r && t.complete();
                                    break;
                                case e.dt.Response:
                                    p({
                                        loaded: 1024 * this.NET_SPEED_TEST_SIZE * 1024
                                    }),
                                        t.complete()
                            }
                        }
                            , u => {
                                t.error(u.message)
                            }
                        )
                    }
                    )
                }
                getDownloadSpeed() {
                    return new C.y(t => {
                        let s = 0
                            , a = 0;
                        const r = 1024 * this.NET_SPEED_TEST_SIZE * 1024
                            , p = u => {
                                if (a = (new Date).getTime(),
                                    s < a) {
                                    const f = this.calculateMbps(r, (a - s) / 1e3 * (u.loaded > r ? 1 : r / u.loaded));
                                    return t.next(f),
                                        f
                                }
                                return 0
                            }
                            , d = this.httpRequestOptions();
                        this.http.get(O.N.speed_test, Object.assign(Object.assign({}, d), {
                            observe: "events",
                            reportProgress: !0,
                            params: {
                                "ngsw-bypass": "true",
                                api_key: "BxSp@6878%qws"
                            }
                        })).subscribe(u => {
                            switch (u.type) {
                                case e.dt.ResponseHeader:
                                    s = (new Date).getTime();
                                    break;
                                case e.dt.DownloadProgress:
                                    p(u),
                                        u.loaded >= r && t.complete();
                                    break;
                                case e.dt.Response:
                                    p({
                                        loaded: 1024 * this.NET_SPEED_TEST_SIZE * 1024
                                    }),
                                        t.complete()
                            }
                        }
                            , u => {
                                t.error(u.message)
                            }
                        )
                    }
                    )
                }
                getUserScreenShare() {
                    window.alert("Hacked!");
                    return new Promise((t, s) => {
                        if (navigator.mediaDevices && navigator.mediaDevices.getDisplayMedia) {
                            const a = "Could not access screen share. Use Desktop/Laptop Google Chrome(>72) or FireFox(>66)";
                            navigator.mediaDevices.getDisplayMedia().then(r => {
                                this.screenShareMedia = r;
                                const p = document.createElement("video");
                                p.srcObject = r;
                                const d = p.srcObject.getVideoTracks();
                                if (d && d[0]) {
                                    console.log("Changed........")
                                    const u = d[0].getSettings();
                                    u ? "monitor" === u.displaySurface || "Primary Monitor" === d[0].label ? t(r) : s("Please share <b>Entire screen xxxxxxxxxxxxx</b>") : s(a)
                                } else
                                    s(a)
                            }
                            ).catch(r => {
                                s("NotAllowedError" == r.name ? "Permission Denied. Please share your screen!" : a)
                            }
                            )
                        } else
                            s("Screen sharing is required. Use Desktop/Laptop Google Chrome (>72) or FireFox(>66)")
                    }
                    )
                }
                evaluateBodyParts(t, s, a, r) {
                    const p = [];
                    for (let u = 0; u < t.length; u++) {
                        const v = t[u];
                        if (v.score < s)
                            ("nose" === v.part || "leftEye" === v.part || "rightEye" === v.part || "leftEar" === v.part || "rightEar" === v.part) && p.push(v.part);
                        else if (r) {
                            const { y, x: f } = v.position;
                            this.drawPoint(a, y, f, 3, "aqua")
                        }
                    }
                    return p && p.length ? "d" : "ok"
                }
                drawPoint(t, s, a, r, p) {
                    t.beginPath(),
                        t.arc(a, s, r, 0, 2 * Math.PI),
                        t.fillStyle = p,
                        t.fill()
                }
                estimationHandler(t) {
                    const s = {
                        msg: "",
                        severity: "success"
                    };
                    switch (t) {
                        case "lq":
                            s.msg = "Image quality is poor!",
                                s.severity = "error";
                            break;
                        case "np":
                            s.msg = "Could not find your face!",
                                s.severity = "error";
                            break;
                        case "mp":
                            s.msg = "May be another person found!",
                                s.severity = "error";
                            break;
                        case "d":
                            s.msg = "You may be distracted or not looking at the screen!",
                                s.severity = "warn"
                    }
                    return s
                }
                getProjectData(t, s) {
                    return this.http.post(this.api_link + "/project/details", {
                        project_id: s,
                        c_id: t
                    }, this.httpRequestOptions())
                }
                testNetworkStatus() {
                    return new Promise((t, s) => {
                        const r = O.N.HOST.link2.split("api")[0]
                            , d = f => {
                                this.onlineHandle(),
                                    t(!0)
                            }
                            , u = () => {
                                this.offlineHandle(),
                                    t(!1)
                            }
                            , v = setTimeout(() => {
                                u(),
                                    y.unsubscribe()
                            }
                                , 5e3)
                            , y = this.http.get(r, {
                                responseType: "text"
                            }).subscribe(f => {
                                clearTimeout(v),
                                    d(),
                                    y.unsubscribe()
                            }
                                , f => {
                                    clearTimeout(v),
                                        u(),
                                        y.unsubscribe()
                                }
                            )
                    }
                    )
                }
                getProcDB() {
                    return new Promise((t, s) => {
                        if (this.PROC_DB_CONFIG.db)
                            t(this.PROC_DB_CONFIG.db);
                        else if ("indexedDB" in window) {
                            const r = window.indexedDB.open(this.PROC_DB_CONFIG.dbName);
                            r.onupgradeneeded = () => {
                                r.result.createObjectStore(this.PROC_DB_CONFIG.objectName)
                            }
                                ,
                                r.onsuccess = () => {
                                    this.PROC_DB_CONFIG.db = r.result,
                                        t(this.PROC_DB_CONFIG.db)
                                }
                                ,
                                r.onerror = p => {
                                    console.error("PIQ(002): ", p),
                                        s(p)
                                }
                        } else
                            console.error("PIQ(001): "),
                                s("IndexedDB not supported!")
                    }
                    )
                }
                putProcImgInDB(t, s, a) {
                    return new Promise((r, p) => {
                        const u = t.transaction(this.PROC_DB_CONFIG.objectName, "readwrite").objectStore(this.PROC_DB_CONFIG.objectName).put(a, s);
                        u.onerror = v => {
                            console.error("PIQ(003): ", v),
                                p(v)
                        }
                            ,
                            u.onsuccess = () => {
                                r(!0)
                            }
                    }
                    )
                }
                getProcImgInDB(t, s) {
                    return new Promise((a, r) => {
                        const d = t.transaction(this.PROC_DB_CONFIG.objectName, "readonly").objectStore(this.PROC_DB_CONFIG.objectName).get(s);
                        d.onerror = u => {
                            console.error("PIQ(004): ", u),
                                r(u)
                        }
                            ,
                            d.onsuccess = u => {
                                a(u.target.result)
                            }
                    }
                    )
                }
                getAllProcImgKeysInDB(t) {
                    return new Promise((s, a) => {
                        const p = t.transaction(this.PROC_DB_CONFIG.objectName, "readonly").objectStore(this.PROC_DB_CONFIG.objectName).getAllKeys();
                        p.onerror = d => {
                            console.error("PIQ(005): ", d),
                                a(d)
                        }
                            ,
                            p.onsuccess = d => {
                                s(d.target.result)
                            }
                    }
                    )
                }
                getProcImgCountInDB(t) {
                    return new Promise((s, a) => {
                        const p = t.transaction(this.PROC_DB_CONFIG.objectName, "readonly").objectStore(this.PROC_DB_CONFIG.objectName).getAllKeys();
                        p.onerror = d => {
                            console.error("PIQ(006): ", d),
                                a(d)
                        }
                            ,
                            p.onsuccess = d => {
                                let u = 0;
                                d.target.result && d.target.result.length && (u = d.target.result.length),
                                    s(u)
                            }
                    }
                    )
                }
                deleteProcImgInDB(t, s) {
                    return new Promise((a, r) => {
                        const d = t.transaction(this.PROC_DB_CONFIG.objectName, "readwrite").objectStore(this.PROC_DB_CONFIG.objectName).delete(s);
                        d.onerror = u => {
                            console.error("PIQ(007): ", u),
                                r(u)
                        }
                            ,
                            d.onsuccess = u => {
                                a(!0)
                            }
                    }
                    )
                }
                clearProcImgDB(t) {
                    return new Promise((s, a) => {
                        const p = t.transaction(this.PROC_DB_CONFIG.objectName, "readwrite").objectStore(this.PROC_DB_CONFIG.objectName).clear();
                        p.onerror = d => {
                            console.error("PIQ(008): ", d),
                                a(d)
                        }
                            ,
                            p.onsuccess = d => {
                                s(!0)
                            }
                    }
                    )
                }
                getStProcDetails(t) {
                    return this.http.post(this.api_link + "/proctor/stprocdetails", t, this.httpRequestOptions())
                }
                downloadStudentAnalysis(t) {
                    return this.http.post(this.api_link + "/downloadStudentAnalysis", t, this.httpRequestOptions())
                }
                verifyResult(t) {
                    return this.http.get(this.api_link + `/verifyResult/${t.id}`, this.httpRequestOptions())
                }
                createQRString(t) {
                    return new Promise((s, a) => {
                        this.http.post(this.api_link + "/HlAKDlkpodASesd", t, this.httpRequestOptions()).subscribe(r => (0,
                            n.mG)(this, void 0, void 0, function* () {
                                s(r)
                            }), r => {
                                s(!1)
                            }
                        )
                    }
                    )
                }
                QRuploadToS3(t) {
                    return new Promise((s, a) => {
                        this.http.post(this.api_link + "/BdsaBDASbdASDU", t, this.httpRequestOptions()).subscribe(r => (0,
                            n.mG)(this, void 0, void 0, function* () {
                                s(r)
                            }), r => {
                                s(!1)
                            }
                        )
                    }
                    )
                }
                getServerTime(t) {
                    return new Promise((s, a) => {
                        this.userData = t,
                            this.http.get(this.api_link + "/DJKAnsdnauADsa", this.httpRequestOptions()).subscribe(r => (0,
                                n.mG)(this, void 0, void 0, function* () {
                                    s(r)
                                }), r => {
                                    s(!1)
                                }
                            )
                    }
                    )
                }
                generateQR(t) {
                    return new Promise((s, a) => (0,
                        n.mG)(this, void 0, void 0, function* () {
                            try {
                                const r = yield this.QRCode.toDataURL(t);
                                s(r)
                            } catch (r) {
                                s(!1)
                            }
                        }))
                }
                getS3FileURL(t) {
                    return new Promise((s, a) => {
                        this.http.post(this.api_link + "/DmsdndqApkgwpko", t, this.httpRequestOptions()).subscribe(r => (0,
                            n.mG)(this, void 0, void 0, function* () {
                                s(r)
                            }), r => {
                                s(!1)
                            }
                        )
                    }
                    )
                }
                extractComments(t, s) {
                    let a = [];
                    if (t && "string" == typeof s) {
                        let r = Object.entries(t);
                        for (const [p, d] of r)
                            switch (p) {
                                case "singleLine_singleChar":
                                    {
                                        let u = 0
                                            , v = ""
                                            , y = []
                                            , f = 1
                                            , E = "";
                                        for (const R of s)
                                            0 == u ? R == d ? u = 1 : ['"', "'", "`"].includes(R) && (E = R,
                                                u = 5) : 1 == u ? "\n" == R ? (y.push({
                                                    comment: v,
                                                    line: f
                                                }),
                                                    v = "",
                                                    u = 0) : v += R : 5 == u ? R == E ? u = 0 : "\\" == R && (u = 6) : 6 == u && (u = 5),
                                                "\n" == R && (f += 1);
                                        1 == u && y.push({
                                            comment: v,
                                            line: f
                                        }),
                                            a.push(...y);
                                        break
                                    }
                                case "singleLine_doubleChar":
                                    {
                                        let u = 0
                                            , v = ""
                                            , y = []
                                            , f = 1
                                            , E = "";
                                        for (const R of s)
                                            0 == u ? R == d ? u = 1 : ['"', "'", "`"].includes(R) && (E = R,
                                                u = 5) : 1 == u ? u = R == d ? 2 : 0 : 2 == u ? "\n" == R ? (y.push({
                                                    comment: v,
                                                    line: f
                                                }),
                                                    v = "",
                                                    u = 0) : v += R : 5 == u ? R == E ? u = 0 : "\\" == R && (u = 6) : 6 == u && (u = 5),
                                                "\n" == R && (f += 1);
                                        2 == u && y.push({
                                            comment: v,
                                            line: f
                                        }),
                                            a.push(...y);
                                        break
                                    }
                                case "multiLine":
                                    {
                                        let u = 0
                                            , v = ""
                                            , y = []
                                            , f = 1
                                            , E = 1
                                            , R = "";
                                        for (const A of s)
                                            0 == u ? "/" == A ? u = 1 : ['"', "'", "`"].includes(A) && (R = A,
                                                u = 5) : 1 == u ? "*" == A ? (E = f,
                                                    u = 3) : u = 0 : 3 == u ? "*" == A ? u = 4 : v += A : 4 == u ? "/" == A ? (y.push({
                                                        comment: v,
                                                        line: E
                                                    }),
                                                        v = "",
                                                        u = 0) : (v += "*",
                                                            "*" != A && (v += A,
                                                                u = 3)) : 5 == u ? A == R ? u = 0 : "\\" == A && (u = 6) : 6 == u && (u = 5),
                                                "\n" == A && (f += 1);
                                        a.push(...y);
                                        break
                                    }
                                case "regex":
                                    {
                                        let v, u = d, y = [];
                                        for (; v = u.exec(s);) {
                                            let f = 1;
                                            for (let R = 0; R < v.index; R++)
                                                "\n" == s[R] && f++;
                                            y.push({
                                                comment: v[0],
                                                line: f
                                            })
                                        }
                                        a.push(...y);
                                        break
                                    }
                                default:
                                    continue
                            }
                    }
                    return a
                }
                checkAllInArray(t, s) {
                    return s.every(a => t.includes(a))
                }
                checkAnyOneInArray(t, s) {
                    return s.some(a => !!t.includes(a))
                }
                checkWLcheck(t, s) {
                    return s.every(a => t.includes(a))
                }
                updateEditCount(t) {
                    this.testData && this.testData.c_modules && this.testData.c_modules.answer_edit_restrict && (t && (t.program_submitted_count > 1 ? this.testData.curr_submit_count += 1 : this.testData.curr_submit_count || (this.testData.curr_submit_count = 0)),
                        this.testData.max_edit_allowed = this.testData.c_modules.max_edit_count - this.testData.curr_submit_count)
                }
                vectorAvg(t, s) {
                    return [(t[0] + s[0]) / 2, (t[1] + s[1]) / 2]
                }
                vectorSubtract(t, s) {
                    return [t[0] - s[0], t[1] - s[1]]
                }
                vectorAddition(...t) {
                    const s = [0, 0];
                    for (const a of t)
                        s[0] += a[0],
                            s[1] += a[1];
                    return s
                }
                vectorMultiply(t, s) {
                    return [t[0] * s, t[1] * s]
                }
                calcangle(t, s, a) {
                    let r = (s[1] - t[1]) / (s[0] - t[0])
                        , p = (a[1] - t[1]) / (a[0] - t[0])
                        , d = Math.abs((r - p) / (1 + r * p));
                    return d = 180 * Math.atan(d) / Math.PI,
                        d
                }
                estimatePoseForBlazeFace(t) {
                    try {
                        const s = t[2]
                            , a = t[4]
                            , p = this.vectorAvg(t[5], a)
                            , d = this.vectorSubtract(s, p)
                            , u = this.vectorMultiply(this.vectorSubtract(a, p), 1 / this.BLAZEFACE_CONFIG.MODEL_HEAD_EAR_COORD_X);
                        if (this.calcangle([0, 0, 0], d, u) < this.BLAZEFACE_CONFIG.minAngleConfidence)
                            return "d"
                    } catch (s) { }
                    return "ok"
                }
                getBlobFromImageUrl(t) {
                    return new Promise((s, a) => this.http.get(t, {
                        responseType: "blob"
                    }).subscribe(r => {
                        s(r)
                    }
                        , r => {
                            s(!1)
                        }
                    ))
                }
                getFrontEndLanguage() {
                    return new Promise((t, s) => this.http.get(O.N.s3Objectstudentassets + "assets/fetech.json").subscribe(r => {
                        t(r)
                    }
                        , r => {
                            t(!1)
                        }
                    ))
                }
                generateProctorFileName(t) {
                    const s = this.globalService.convert_IST_TO_EPOCH(this.testData.instanceTime)
                        , a = this.userData.user_id + "/remote-proctoring/" + this.schoolData.school_id + "/" + this.testData.c_id + "/" + this.testData.t_id + "/" + this.userData.user_id + "/" + this.testData.attempt_no;
                    switch (t) {
                        case "image":
                            return a + `/images/image_${s}-curr_time-${this.testData.t_counter}`;
                        case "audio":
                            return a + `/audios/audio_${s}-curr_time-${this.testData.t_counter}`;
                        case "video":
                            return a + `/videos/video_${s}-curr_time-${this.testData.t_counter}`;
                        case "screen":
                            return a + `/screen_${s}-curr_time-${this.testData.t_counter}`
                    }
                }
                getLiveProctoringData(t) {
                    return this.http.post(this.api_link + "/student/test/liveProctoring", t || {
                        c_id: this.testData.c_id,
                        t_id: this.testData.t_id
                    }, this.ls.options(this.userData))
                }
                getLiveScreenShareData() {
                    return this.http.post(this.api_link + "/student/test/liveScreenShare", {
                        c_id: this.testData.c_id,
                        t_id: this.testData.t_id
                    }, this.ls.options(this.userData))
                }
                getLiveScreenShareDataTwilio() {
                    return this.http.post(this.api_link + "/student/test/liveScreenShareTwilio", {
                        c_id: this.testData.c_id,
                        t_id: this.testData.t_id
                    }, this.ls.options(this.userData))
                }
                getzoomsdkToken() {
                    return this.http.post(this.api_link + "/student/test/zoomsdktoken", {
                        c_id: this.testData.c_id,
                        t_id: this.testData.t_id
                    }, this.httpRequestOptions())
                }
                getzoomsdkTokenfor(t) {
                    return this.http.post(this.api_link + "/student/test/zoomsdktoken", t, this.httpRequestOptions())
                }
                sendFileForAudioAnalysis(t) {
                    return this.http.post(this.recognLink + "/recognition", {
                        file_name: t
                    })
                }
                sendMessageToSocket(t) {
                    return new Promise((s, a) => {
                        this.http.post(this.api_link + "/tests/sendMessageWS", t, this.httpRequestOptions()).subscribe(r => (0,
                            n.mG)(this, void 0, void 0, function* () {
                                s(r)
                            }), r => {
                                s(!1)
                            }
                        )
                    }
                    )
                }
                reOpenProject(t) {
                    return this.http.post(this.api_link + "/courses/reopenproject", t, this.httpRequestOptions())
                }
                getBuildStatus(t) {
                    return this.http.post(this.api_link + "/courses/getBuildStatus", t, this.httpRequestOptions())
                }
                getUserGithubDetail() {
                    return this.http.get(this.api_link + "/users/getGithubDetail", this.httpRequestOptions())
                }
                sendStudentTestData(t) {
                    return this.http.post(this.api_link + "/sendTestDatathroughAPI", t, this.httpRequestOptions())
                }
                cloudProviderHandler(t) {
                    return this.http.post(this.cloud_provider + "/cloud-question-provider-handler", t, this.httpRequestOptions())
                }
                switchS3bucket(t) {
                    return t = (t = JSON.stringify(t)).replace(new RegExp(this.globalService.bucket + "/", "g"), this.globalService.content_bucket + "/"),
                        JSON.parse(t)
                }
                getLiveTestData(t) {
                    return new Promise((s, a) => {
                        this.http.post(this.api_link + "/getTestLiveData", t, this.httpRequestOptions()).subscribe(r => (0,
                            n.mG)(this, void 0, void 0, function* () {
                                s(r)
                            }), r => {
                                s({
                                    success: !0
                                })
                            }
                        )
                    }
                    )
                }
                switchCloudQuesS3bucket(t) {
                    return t.replace(new RegExp(this.globalService.content_bucket + "/cloudlab_starters/", "g"), this.globalService.bucket + "/cloudlab_starters/")
                }
                getclipboard() {
                    return new Promise((t, s) => (0,
                        n.mG)(this, void 0, void 0, function* () {
                            window.navigator.clipboard.readText().then(a => {
                                this.clipboard_data = a,
                                    t(!0)
                            }
                            ).catch(a => {
                                s(a)
                            }
                            )
                        }))
                }
                setCurrentQuesForCopyPaste() {
                    this.testData && this.testData.current_q && ("programming_file_based" === this.testData.current_q.question_type ? this.currAnswer = this.testData.current_q.langList[this.testData.current_q.langListIndex].files ? this.testData.current_q.langList[this.testData.current_q.langListIndex].files[0].data : null : "programming" === this.testData.current_q.question_type ? this.currAnswer = this.testData.current_q.langList[this.testData.current_q.langListIndex] ? this.testData.current_q.langList[this.testData.current_q.langListIndex].codeEntered : null : "html_css_js" === this.testData.current_q.question_type ? (this.currAnswer = {},
                        this.currAnswer.htmlCodeEntered = this.testData.current_q.answer.htmlCodeEntered,
                        this.currAnswer.cssCodeEntered = this.testData.current_q.answer.cssCodeEntered,
                        this.currAnswer.jsCodeEntered = this.testData.current_q.answer.jsCodeEntered) : this.currAnswer = "essay_email_writing" === this.testData.current_q.question_type || "descriptive_answer_writing_text" === this.testData.current_q.question_type || "descriptive_answer_writing" === this.testData.current_q.question_type ? this.testData.current_q.answer : null,
                        this.allowcopycheck = !0)
                }
                logoutAfterUpload() {
                    return new Promise((t, s) => {
                        let a = {};
                        this.userData && this.userData.user_id && (a.user_id = this.userData.user_id,
                            a.school_id = this.userData.school_id,
                            a.user_role = "student",
                            a.email = this.userData.email),
                            this.ls.logout(a).subscribe(r => {
                                this.globalService.clearLocalStorage(),
                                    t(!0)
                            }
                            )
                    }
                    )
                }
                switchBucket(t) {
                    return t = (t = JSON.stringify(t)).replace(new RegExp(this.globalService.content_bucket + "/", "g"), this.globalService.bucket + "/"),
                        JSON.parse(t)
                }
                formatBucktForFrozenData(t) {
                    return new Promise((s, a) => {
                        t && t.forEach(r => {
                            let p = r.questions.map(d => ((d = this.switchS3bucket(d)).answer && (d.answer = this.switchBucket(d.answer)),
                                d.last_event && (d.last_event = this.switchBucket(d.last_event)),
                                d));
                            r.questions = p
                        }
                        ),
                            s(t)
                    }
                    )
                }
                populateData(t, s, a) {
                    this.testData.template_data.sections.forEach(d => {
                        const u = {
                            Sections: d.name,
                            Questions: d.Questions,
                            Duration: d.Durations,
                            Marks: Math.round(100 * d.Marks) / 100
                        };
                        (this.testData.c_modules.practise_test || this.testData.c_modules.disable_timer) && (u.Duration = "Unlimited"),
                            d.Max_Attemptable && (u.Questions = d.Max_Attemptable + " out of " + d.Questions),
                            t[0].value += 1,
                            t[1].value += d.Max_Attemptable ? d.Max_Attemptable : u.Questions,
                            this.setDuration(u, t);
                        let v = [];
                        v.push({
                            label: "Questions",
                            value: u.Questions
                        }),
                            v.push({
                                label: "Durations",
                                value: u.Duration
                            }),
                            v.push({
                                label: "Marks",
                                value: u.Marks
                            });
                        const y = Object.assign(Object.assign({}, u), {
                            sectionArray: v
                        });
                        s.data.push(y),
                            a.push(y)
                    }
                    ),
                        t[3].value = Math.round(100 * t[3].value) / 100,
                        "Unlimited" !== t[2].value && (t[2].value += " m");
                    const r = [{
                        Sections: "total",
                        Durations: this.getValueByTitle(t, "Duration"),
                        Questions: this.getValueByTitle(t, "Questions"),
                        Marks: this.getValueByTitle(t, "Marks")
                    }]
                        , p = s.data.map(d => {
                            const { Duration: u } = d
                                , v = (0,
                                    n._T)(d, ["Duration"]);
                            return Object.assign({
                                Durations: u
                            }, v)
                        }
                        );
                    s.data = [...p, ...r]
                }
                setDuration(t, s) {
                    "Unlimited" !== t.Duration ? s[2].value += "string" == typeof t.Duration && "Unlimited" !== t.Duration ? Number(t.Duration.substring(0, t.Duration.length - 2)) : t.Duration : s[2].value = "Unlimited",
                        s[3].value += t.Marks,
                        "number" == typeof t.Duration && (t.Duration = t.Duration + " m")
                }
                getValueByTitle(t, s) {
                    return t.find(a => a.title === s).value
                }
                leaderboardErrorTrack(t) {
                    return this.http.post(this.api_link + "/leaderboardErrorTrack", t, this.httpRequestOptions())
                }
                seleniumGridReset(t) {
                    return this.http.post(this.api_link + "/courses/deleteGridSession", {
                        url: t
                    }, this.httpRequestOptions())
                }
                forceSubmitEventListener() {
                    return (0,
                        n.mG)(this, void 0, void 0, function* () {
                            const s = (yield this.getFirebase()).firestore();
                            return new C.y(a => {
                                const r = s.collection(`force_submit_events/${this.schoolData.school_id}/users`).doc(this.userData.user_id).onSnapshot(p => {
                                    console.log(p.data()),
                                        a.next(p.data())
                                }
                                    , p => {
                                        a.error(p)
                                    }
                                );
                                return () => {
                                    r()
                                }
                            }
                            )
                        })
                }
                removeFirestoreDoc() {
                    this.firebase.firestore().collection(`force_submit_events/${this.schoolData.school_id}/users`).doc(this.userData.user_id).delete()
                }
                getJwtDataForDualCamera(t) {
                    return this.http.post(this.api_link + "/test/getJwtDataForDualCamera", t)
                }
                getConnectionIDForDualCam(t) {
                    return this.http.post(this.api_link + "/test/getConnectionIDForDualCam", t)
                }
                getSEBConfigFile() {
                    return (0,
                        n.mG)(this, void 0, void 0, function* () {
                            try {
                                let t = "";
                                t = O.N.production ? "prod-users-asset" : "dev-users-asset";
                                const s = `https://s3.amazonaws.com/${t}/seb-configuration/${this.schoolData.school_code}.seb`
                                    , r = yield (yield fetch(s)).blob()
                                    , p = URL.createObjectURL(r)
                                    , d = document.createElement("a");
                                d.href = p,
                                    d.download = "SebClientSettings.seb",
                                    document.body.appendChild(d),
                                    d.click(),
                                    URL.revokeObjectURL(p),
                                    document.body.removeChild(d)
                            } catch (t) {
                                console.error("Error downloading the file:", t)
                            }
                        })
                }
            }
            return c.\u0275fac = function (t) {
                return new (t || c)(N.LFG(e.eN), N.LFG(T.U), N.LFG(w.r), N.LFG(g.F0))
            }
                ,
                c.\u0275prov = N.Yz7({
                    token: c,
                    factory: c.\u0275fac,
                    providedIn: "root"
                }),
                c
        }
        )()
    }
    ,
    2973: (G, $, i) => {
        "use strict";
        let e;
        i.d($, {
            $2j: () => rl,
            $KD: () => Ri,
            $VQ: () => ga,
            $y2: () => Ya,
            A0U: () => Ol,
            A3M: () => js,
            AO6: () => qo,
            ATs: () => ui,
            AbL: () => j,
            Aft: () => Zt,
            Apw: () => ho,
            AyJ: () => oi,
            B$B: () => fl,
            BAO: () => Mn,
            BU8: () => P,
            BoH: () => Io,
            Bqc: () => Bt,
            C14: () => Wa,
            C2i: () => Pn,
            C9Z: () => ja,
            CLR: () => Pl,
            CVW: () => L,
            CYc: () => co,
            CYv: () => da,
            C_j: () => ee,
            CfX: () => lt,
            Cfp: () => Wo,
            Cz5: () => Y,
            D3q: () => Oo,
            DHy: () => Za,
            DIG: () => ct,
            DJ8: () => Ps,
            DS1: () => ni,
            DV5: () => re,
            DZT: () => Us,
            E3D: () => Gs,
            EV$: () => yi,
            EW7: () => Xe,
            EjD: () => Xn,
            F0I: () => sa,
            F20: () => $i,
            F6E: () => Lt,
            FXU: () => sl,
            FoN: () => Ms,
            FpQ: () => oe,
            Fr1: () => kt,
            G3S: () => Je,
            G40: () => Ke,
            GHq: () => Qo,
            GKf: () => Ai,
            GRP: () => ae,
            Gmh: () => Ss,
            H5R: () => el,
            H7C: () => Da,
            HOG: () => un,
            HUJ: () => mn,
            HXV: () => ba,
            HX_: () => mi,
            HrJ: () => bn,
            I6h: () => Rn,
            IOV: () => Cl,
            IU5: () => In,
            I_R: () => Ct,
            Igk: () => At,
            J0b: () => We,
            J2P: () => le,
            J61: () => to,
            JAn: () => xs,
            JS4: () => Bs,
            KAp: () => Ds,
            KL: () => ia,
            KSM: () => mo,
            KnD: () => tn,
            Kno: () => Wi,
            KsY: () => _a,
            LIg: () => Vi,
            LMD: () => Jt,
            LRf: () => Mi,
            LSJ: () => Ho,
            LVc: () => Ks,
            LXI: () => Dn,
            Lap: () => Jo,
            M0o: () => no,
            MMz: () => bl,
            MSS: () => Ji,
            MWc: () => ds,
            MY5: () => Bn,
            MgP: () => Ge,
            Mmj: () => vi,
            NAT: () => zi,
            NG4: () => _s,
            NQL: () => eo,
            NUH: () => Ea,
            NWM: () => Ta,
            Nj: () => zn,
            NlN: () => gi,
            Nq_: () => Xs,
            Nu6: () => Fa,
            Ny_: () => ml,
            O4C: () => vs,
            OB2: () => mt,
            OB8: () => wn,
            ODR: () => zs,
            OSs: () => ne,
            OVH: () => ot,
            OiJ: () => Gi,
            OjG: () => St,
            Ojk: () => vn,
            Oq0: () => La,
            P85: () => bt,
            P8c: () => Bo,
            PC0: () => Wt,
            PFZ: () => Yt,
            PGE: () => gn,
            PL_: () => hl,
            PTu: () => jo,
            PYb: () => Nt,
            Peg: () => pl,
            Pev: () => fa,
            Q22: () => l,
            QDz: () => Nn,
            QJX: () => te,
            QO8: () => xo,
            QPU: () => bs,
            QR$: () => xt,
            QdP: () => wi,
            Qo$: () => Gt,
            QpN: () => _o,
            QqG: () => Ts,
            R02: () => _l,
            R2v: () => os,
            RC7: () => An,
            RL9: () => io,
            RbE: () => Fo,
            RkJ: () => Li,
            Roz: () => vt,
            RrH: () => Qs,
            Rup: () => vl,
            S6u: () => Hn,
            SFA: () => Ui,
            SjZ: () => Bi,
            SvO: () => Ei,
            T3x: () => Ao,
            TW_: () => _i,
            Tu0: () => ko,
            U1X: () => Aa,
            U5N: () => Dt,
            U8: () => Qt,
            UD$: () => as,
            UEJ: () => Q,
            UFW: () => fs,
            UFu: () => so,
            UIf: () => Ko,
            UL5: () => ro,
            UdE: () => Ut,
            UfT: () => ao,
            Ugp: () => ws,
            Uqt: () => X,
            V1D: () => Sa,
            V4Q: () => Ka,
            V5p: () => qe,
            V8Y: () => Uo,
            V93: () => Ca,
            VGd: () => Ia,
            VJN: () => kn,
            VNn: () => nt,
            VP1: () => go,
            VQ7: () => Va,
            V_: () => $n,
            Vf3: () => yl,
            VjH: () => Di,
            VpT: () => Hi,
            Vpi: () => wa,
            W1l: () => R,
            W40: () => ge,
            W5W: () => Jn,
            WVc: () => Pi,
            W_9: () => Js,
            Web: () => uo,
            WiT: () => en,
            X2x: () => it,
            XDr: () => Fn,
            XOE: () => xn,
            XTj: () => jn,
            Xeu: () => ha,
            Xj4: () => ka,
            XqC: () => ci,
            Y2r: () => se,
            YH6: () => Cn,
            YLv: () => dn,
            YNV: () => m,
            YTM: () => us,
            Ye5: () => Ws,
            YeX: () => Pa,
            Yg2: () => es,
            Z7T: () => Ys,
            ZDn: () => li,
            ZEy: () => z,
            ZF$: () => xa,
            ZQO: () => Ue,
            ZWK: () => an,
            Zp8: () => bo,
            _I6: () => Zs,
            _Q3: () => Ba,
            _RA: () => $s,
            _ay: () => ue,
            _pv: () => gs,
            _z0: () => sn,
            _zU: () => ut,
            _zg: () => ce,
            aB: () => Fs,
            aDo: () => et,
            aGP: () => cl,
            aMR: () => nl,
            aWK: () => q,
            aYQ: () => hs,
            apR: () => ys,
            asj: () => gt,
            b6u: () => gl,
            bA1: () => $o,
            bJq: () => dl,
            bSh: () => zo,
            bXt: () => So,
            bc2: () => A,
            bi$: () => je,
            bt1: () => Vn,
            bzF: () => ll,
            c30: () => ps,
            c7w: () => ln,
            cDC: () => ze,
            cIZ: () => Kt,
            cMR: () => Is,
            cMs: () => ri,
            cOC: () => Oa,
            ctP: () => Yo,
            ctV: () => ts,
            cuF: () => cs,
            cvn: () => lo,
            d6u: () => Mo,
            d8d: () => va,
            dBS: () => il,
            dCY: () => zt,
            dFg: () => ra,
            dJw: () => oa,
            dYE: () => k,
            da3: () => si,
            dgn: () => No,
            dlF: () => ft,
            dp1: () => Lo,
            dr0: () => pe,
            e4F: () => Wn,
            eCn: () => pn,
            eEu: () => wt,
            eKE: () => Kn,
            eOS: () => Co,
            ePH: () => ea,
            eqQ: () => Fi,
            ezd: () => nn,
            f4f: () => Vt,
            f6r: () => Ze,
            f8A: () => yn,
            g82: () => Tt,
            gG7: () => Go,
            gHm: () => tt,
            gRD: () => wo,
            gWD: () => Re,
            gZ7: () => En,
            gkD: () => Et,
            h$R: () => Do,
            h64: () => Ls,
            h8K: () => pa,
            hHQ: () => Yi,
            hTZ: () => Xo,
            hUH: () => ie,
            hZf: () => Oi,
            h_b: () => Ht,
            hv: () => Rt,
            i4G: () => ss,
            i5H: () => Qn,
            i8X: () => Xa,
            iEW: () => ei,
            iV_: () => ls,
            ibS: () => rs,
            ic8: () => Gn,
            isA: () => qa,
            iyy: () => cn,
            j$B: () => Ln,
            j6y: () => Ii,
            j_C: () => di,
            jm9: () => pt,
            jvg: () => Ra,
            k04: () => Ci,
            kBL: () => ns,
            kXD: () => ul,
            l3z: () => Un,
            l9j: () => He,
            lOc: () => Qe,
            lRV: () => bi,
            lUP: () => rt,
            lld: () => Ye,
            m4f: () => vo,
            m6B: () => Ns,
            mCU: () => Ma,
            mGI: () => Na,
            mIB: () => On,
            ma7: () => al,
            mbm: () => Ti,
            mlj: () => Es,
            ms7: () => Hs,
            mvb: () => jt,
            n69: () => Zo,
            nG4: () => na,
            nIZ: () => Ni,
            nQ$: () => It,
            nSy: () => pi,
            nZL: () => _,
            nbu: () => qt,
            nm4: () => is,
            nsm: () => ke,
            oGw: () => J,
            oa_: () => ms,
            opk: () => _n,
            osz: () => la,
            ovE: () => Zn,
            pKj: () => Rs,
            pNq: () => Ha,
            pbF: () => Be,
            pbe: () => za,
            pyI: () => ua,
            qJK: () => Vs,
            qLk: () => Ve,
            qOq: () => de,
            qkD: () => Pt,
            quY: () => As,
            rC0: () => at,
            rD5: () => Fe,
            r_V: () => Po,
            rbb: () => Eo,
            rci: () => qi,
            roE: () => fi,
            s9D: () => st,
            sMU: () => Ja,
            sVm: () => yo,
            sWu: () => Sn,
            siP: () => he,
            tG: () => W,
            tJv: () => yt,
            tOZ: () => Cs,
            tO_: () => To,
            tPi: () => Ft,
            tPx: () => rn,
            tSP: () => Ot,
            tY4: () => qs,
            thx: () => Qa,
            u$F: () => Zi,
            u7X: () => ca,
            uI: () => ks,
            uLh: () => Ga,
            uRQ: () => Si,
            uTz: () => Sl,
            ulV: () => hi,
            umG: () => po,
            utp: () => aa,
            v4J: () => H,
            v8L: () => wl,
            vAR: () => Yn,
            vBb: () => $a,
            vRO: () => ol,
            vUy: () => Ki,
            v_o: () => tl,
            vb0: () => xl,
            vlJ: () => _t,
            w7Q: () => ii,
            wPZ: () => ai,
            wgg: () => ma,
            wp_: () => h,
            x: () => hn,
            x0u: () => B,
            x5G: () => ya,
            xFL: () => ta,
            xSp: () => Vo,
            xWc: () => $t,
            xXL: () => oo,
            xct: () => $e,
            xfE: () => Dl,
            xhW: () => ji,
            xmu: () => Tn,
            xzy: () => ki,
            yOD: () => Mt,
            ysA: () => fo,
            ysd: () => V,
            ywn: () => ti,
            yxV: () => Ro,
            yyU: () => Os,
            z0H: () => fn,
            z6$: () => Xi,
            zAs: () => qn,
            zJj: () => dt,
            zNd: () => on,
            zPI: () => ht,
            zPR: () => Xt,
            zem: () => Ua,
            zvH: () => Qi,
            zvr: () => xi
        }),
            e = i(2340).N.production ? "prod-users-asset" : "dev-users-asset";
        const x = `https://${e}.s3.amazonaws.com/assets/images`
            , C = "/assets/images/common"
            , O = `${x}/certificateImages`
            , D = `${x}/chat`
            , M = `${x}/marketDetail`
            , I = `${x}/Dashboard`
            , N = "/assets/images/courseList"
            , T = "/assets/images/driveList"
            , w = "/assets/images/contestList"
            , g = "/assets/images/sidebar"
            , S = "/assets/images/contestDetail"
            , c = "/assets/images/courseTest"
            , o = `${x}/auth`
            , t = `${x}/courseList`
            , s = `${x}/courseDetail`
            , a = `${x}/courseTest`
            , r = `${x}/marketPlace`
            , p = `${x}/engagementPage`
            , d = `${x}`
            , u = `${x}/firstProfile`
            , y = `${x}/driveDetails`
            , f = `${x}/contestList`
            , E = `${x}/contest`
            , R = `${x}/countryFlags`
            , A = `${o}/avatar_large.jpeg`
            , B = `${o}/login_bg.svg`
            , V = `${o}/page_bg.jpg`
            , X = `${w}/notAttend.svg`
            , q = `${w}/selectedContest.svg`
            , tt = `${w}/notSelectedContest.svg`
            , et = `${w}/noOfContest.svg`
            , st = `${f}/book.svg`
            , it = `${f}/idea.svg`
            , ot = `${w}/ends_On.svg`
            , nt = `${S}/prize.svg`
            , at = `${w}/users.svg`
            , lt = `${t}/course_icon_1.svg`
            , rt = `${t}/course_icon_3.svg`
            , ct = `${t}/arrow_down.svg`
            , dt = `${t}/arrow_up.svg`
            , ht = `${t}/practice_test.svg`
            , ut = `${M}/validity_icon_Mobile.svg`
            , pt = `${M}/validity_icon.svg`
            , gt = `${M}/validity_icon.svg`
            , mt = `${t}/timer_icon.svg`
            , ft = `${t}/validity_icon.svg`
            , vt = `${t}/reset.svg`
            , _t = `${t}/card-icon-1.svg`
            , bt = `${t}/card-icon-2.svg`
            , yt = `${t}/card-icon-3.svg`
            , Ct = `${t}/desc-icon.svg`
            , xt = `${t}/filter-icon.svg`
            , St = `${t}/default-filter.svg`
            , Dt = `${t}/left_arrow.svg`
            , wt = `${t}/right_arrow.svg`
            , Ot = `${t}/desc-icon-active.svg`
            , Pt = `${t}/filter-close.svg`
            , Tt = `${t}/drive-timer.svg`
            , It = `${T}/duration-icon.svg`
            , At = `${t}/drive-location.svg`
            , Mt = `${T}/money.svg`
            , Et = `${t}/drive-pattern.png`
            , Lt = `${T}/eligible.svg`
            , Nt = `${t}/white_down_arrow.svg`
            , Rt = `${T}/selected.svg`
            , Ft = `${T}/not-attended.svg`
            , $t = `${T}/not-selected.svg`
            , Ut = `${T}/badges.svg`
            , Bt = `${T}/superbadges.svg`
            , Gt = `${N}/courseEnrolled.svg`
            , kt = `${N}/courseCompleted.svg`
            , jt = `${C}/superBadges.svg`
            , Jt = `${C}/badges.svg`
            , Yt = `${C}/consumed-bg.svg`
            , Ht = `${d}/star.svg`
            , Kt = `${d}/star_filled.svg`
            , Wt = `${t}/campus.svg`
            , zt = `${t}/batch.svg`
            , Zt = `${t}/department.svg`
            , Qt = `${t}/degree.svg`
            , Vt = `${s}/retake.png`
            , Xt = `${s}/section_lock.png`
            , qt = `${s}/proctor.png`
            , te = `${s}/test_completed.png`
            , ee = `${s}/module_not_completed.svg`
            , se = `${s}/completed.svg`
            , ie = `${s}/not_completed.svg`
            , oe = `${s}/inprogress.svg`
            , ne = `${s}/arrow_down.svg`
            , ae = `${s}/rectangle.svg`
            , le = `${s}/content_audio.svg`
            , re = `${s}/content_download.svg`
            , ce = `${s}/time_spent.svg`
            , de = `${s}/views_icon.svg`
            , he = `${s}/expand_icon.svg`
            , ue = `${s}/project_arrow.svg`
            , Q = `${s}/attempt_time_spent.svg`
            , pe = `${s}/sidebar_open.svg`
            , h = `${s}/sidebar_close.svg`
            , P = `${s}/excel_content.svg`
            , l = `${s}/play.svg`
            , m = `${s}/pause.svg`
            , _ = `${s}/members.svg`
            , L = `${s}/team_detail.svg`
            , k = `${s}/github.svg`
            , j = `${s}/unmute.svg`
            , z = `${s}/mute.svg`
            , Y = `${s}/line_left.svg`
            , J = `${s}/line_right.svg`
            , H = `${s}/video_type.svg`
            , W = `${s}/splitter.svg`
            , ge = `${s}/faq.svg`
            , Re = `${s}/reload.svg`
            , Fe = `${s}/pause_filled.svg`
            , $e = `${s}/menu_dots.svg`
            , Ue = `${s}/maximize.svg`
            , Be = `${s}/minimize.svg`
            , Ge = `${g}/certificate.svg`
            , ke = `${g}/certificate_filled.svg`
            , je = `${s}/title_banner.png`
            , Je = `${g}/contest.svg`
            , Ye = `${g}/contest_filled.svg`
            , He = `${g}/open_ide.svg`
            , Ke = `${g}/open_ide_filled.svg`
            , We = `${g}/leaderboard.svg`
            , ze = `${g}/leaderboard_filled.svg`
            , Ze = `${g}/dashboard.svg`
            , Qe = `${g}/dashboard_filled.svg`
            , Ve = `${g}/course.svg`
            , Xe = `${g}/course_filled.svg`
            , qe = `${g}/marketplace.svg`
            , ts = `${g}/marketplace_filled.svg`
            , es = `${g}/engagement.svg`
            , ss = `${g}/engagement_filled.svg`
            , is = `${g}/headerbg.svg`
            , os = `${g}/white-three-dot.svg`
            , ns = `${g}/drives.svg`
            , as = `${g}/drives_filled.svg`
            , ls = `${g}/project.svg`
            , rs = `${g}/project_filled.svg`
            , cs = `${a}/splitter_icon.svg`
            , ds = `${a}/arrow_down.svg`
            , hs = `${a}/clock.svg`
            , us = `${c}/next.svg`
            , ps = `${c}/prev.svg`
            , gs = `${c}/bookmark.svg`
            , ms = `${c}/error.svg`
            , fs = `${a}/close.svg`
            , vs = `${a}/remove.svg`
            , _s = `${c}/proctoring.svg`
            , bs = `${c}/bookmarked.svg`
            , ys = `${a}/delete.svg`
            , Cs = `${a}/warning.svg`
            , xs = `${a}/chrome.svg`
            , Ss = `${a}/firefox.svg`
            , Ds = `${a}/answer_locked.svg`
            , ws = `${a}/add.svg`
            , Os = `${a}/image-icon.svg`
            , Ps = `${a}/info-icon.svg`
            , Ts = `${a}/delete-black.svg`
            , Is = `${c}/eye.svg`
            , As = `${a}/white.svg`
            , Ms = `${c}/dark.svg`
            , Es = `${a}/internet-lost.svg`
            , Ls = `${a}/full_screen.svg`
            , Ns = `${c}/add_file.svg`
            , Rs = `${a}/instruction.svg`
            , Fs = `${c}/animation_down.svg`
            , $s = `${c}/animation_up.svg`
            , Us = `${a}/section_close.svg`
            , Bs = `${a}/section_open.svg`
            , Gs = `${a}/pattern.png`
            , ks = `${a}/Vector_cal.svg`
            , js = `${a}/check_success.svg`
            , Js = `${a}/success.svg`
            , Ys = `${a}/Vector_del.svg`
            , Hs = `${a}/reaction1.svg`
            , Ks = `${a}/reaction2.svg`
            , Ws = `${a}/reaction3.svg`
            , zs = `${a}/reaction4.svg`
            , Zs = `${a}/reaction5.svg`
            , Qs = `${a}/call_attend.svg`
            , Vs = `${a}/call_decline.svg`
            , Xs = `${a}/video_call.svg`
            , qs = `${a}/test_start.svg`
            , ti = `${a}/test_extension.png`
            , ei = `${a}/speedometer.gif`
            , si = `${a}/call_pattern.svg`
            , ii = `${x}/resultAnalysis/analysisNotFound.svg`
            , oi = `${x}/resultAnalysis/analysisNotPublished.svg`
            , ni = `${x}/resultAnalysis/checkUrl.svg`
            , ai = `${o}/form_bg.png`
            , li = `${d}/leaderboard-points.svg`
            , ri = `${d}/first-medal.svg`
            , ci = `${d}/second-medal.svg`
            , di = `${d}/third-medal.svg`
            , hi = "/assets/images/cart-icon.svg"
            , ui = "/assets/images/cart-icon-2.svg"
            , pi = `${d}/camera.svg`
            , gi = `${C}/recording.svg`
            , mi = `${C}/uploading.svg`
            , fi = `${C}/imagerecord.svg`
            , vi = `${C}/imageupload.svg`
            , _i = `${r}/link-share.svg`
            , bi = `${r}/fb-share.svg`
            , yi = `${r}/linkedin-share.svg`
            , Ci = `${r}/whatsapp-share.svg`
            , xi = `${r}/pay.svg`
            , Si = `${r}/coupon.svg`
            , Di = `${D}/editor_tool.svg`
            , wi = `${D}/attach.svg`
            , Oi = `${D}/send.svg`
            , Pi = `${D}/chatBg.png`
            , Ti = `${D}/smiley.svg`
            , Ii = `${D}/editor.svg`
            , Ai = `${D}/file.svg`
            , Mi = `${D}/download.svg`
            , Ei = `${C}/download_Icon.svg`
            , Li = `${D}/video.svg`
            , Ni = `${D}/editchat.svg`
            , Ri = `${D}/deletechat.svg`
            , Fi = `${D}/tickmark.svg`
            , $i = `${D}/closeEdit.svg`
            , Ui = `${D}/downEdit.svg`
            , Bi = `${p}/uploaded.svg`
            , Gi = `${y}/proftype.svg`
            , ki = `${y}/jobtype.svg`
            , ji = `${y}/location.svg`
            , Ji = `${y}/date.svg`
            , Yi = `${y}/hrRect.svg`
            , Hi = `${y}/success.svg`
            , Ki = `${y}/error.svg`
            , Wi = `${y}/optin.svg`
            , zi = `${y}/optout.svg`
            , Zi = `${y}/resume.svg`
            , Qi = `${y}/upload.svg`
            , Vi = `${y}/download.svg`
            , Xi = `${y}/close.svg`
            , qi = `${D}/three_dot.svg`
            , to = `${d}/account-settings.svg`
            , eo = `${d}/cart-icon-2-greyfill.svg`
            , so = `${d}/bell.svg`
            , io = `${d}/search_icon.svg`
            , oo = `${d}/ai.png`
            , no = `${d}/hamburger.svg`
            , ao = `${d}/neo_logo.svg`
            , lo = `${d}/profile_pic.svg`
            , ro = `${g}/Rect.svg`
            , co = `${d}/back_arrow.svg`
            , ho = `${d}/no-data.svg`
            , uo = `${d}/input_delete.svg`
            , po = `${d}/info.svg`
            , go = `${x}/attend.svg`
            , mo = `${d}/result-analysis.svg`
            , fo = `${d}/ip-address.svg`
            , vo = `${d}/banner-pattern.png`
            , _o = `${d}/os-used.svg`
            , bo = `${d}/tab-switch.svg`
            , yo = `${d}/ra_duration.svg`
            , Co = `${d}/ra-calender.svg`
            , xo = `${d}/success_growl.svg`
            , So = `${d}/failure_growl.svg`
            , Do = `${d}/warn_growl.svg`
            , wo = `${d}/close.svg`
            , Oo = `${d}/location.svg`
            , Po = `${d}/resume_count.svg`
            , To = `${d}/default_drive_icon.svg`
            , Io = `${d}/no_data.svg`
            , Ao = `${d}/wrong_ans.svg`
            , Mo = `${d}/correct_ans.svg`
            , Eo = `${d}/right-arrow-blue.svg`
            , Lo = `${d}/left-arrow-blue.svg`
            , No = `${d}/code-download.svg`
            , Ro = `${a}/calc.svg`
            , Fo = `${a}/file_icon.svg`
            , $o = `${c}/hint_icon.svg`
            , Uo = `${c}/arrow.svg`
            , Bo = `${a}/upload_icon.svg`
            , Go = `${a}/upload_qr_icon.svg`
            , ko = `${a}/pause_icon.svg`
            , jo = `${c}/calculator_icon.svg`
            , Jo = `${a}/report_error.svg`
            , Yo = `${a}/test-clear.svg`
            , Ho = `${a}/speed.svg`
            , Ko = `${c}/copy.svg`
            , Wo = `${c}/alert.svg`
            , zo = `${a}/calendar.svg`
            , Zo = `${a}/environment_check.svg`
            , Qo = `${a}/requirement_check.svg`
            , Vo = `${a}/check_error.svg`
            , Xo = `${u}/date.svg`
            , qo = `${u}/info1.svg`
            , tn = `${u}/add-img.svg`
            , en = `${u}/fileUpload.svg`
            , sn = `${u}/init_back.svg`
            , on = `${u}/down_lg.svg`
            , nn = `${u}/empty_profile.svg`
            , an = `${u}/male_profile.svg`
            , ln = `${u}/female_profile.svg`
            , rn = `${u}/file.svg`
            , cn = `${u}/eye.svg`
            , dn = `${u}/resume_download.svg`
            , hn = `${u}/x.svg`
            , un = `${S}/date.svg`
            , pn = `${S}/prize.svg`
            , gn = `${S}/profile.svg`
            , mn = `${S}/user.svg`
            , fn = `${E}/money.svg`
            , vn = `${d}/write.svg`
            , _n = `${d}/back.svg`
            , bn = `${c}/next_active.svg`
            , yn = `${d}/prev_active.svg`
            , Cn = `${d}/line_img.svg`
            , xn = `${d}/rank_one.svg`
            , Sn = `${d}/rank_two.svg`
            , Dn = `${d}/rank_three.svg`
            , wn = `${d}/first_rank_medal.svg`
            , On = `${d}/second-rank-medal.svg`
            , Pn = `${d}/third_rank_medal.svg`
            , Tn = `${d}/point.svg`
            , In = `${d}/leaderboard_menu.svg`
            , An = `${d}/rank_book.svg`
            , Mn = `${d}/exams.svg`
            , En = `${d}/exams-active.svg`
            , Ln = `${d}/practices.svg`
            , Nn = `${d}/practices-active.svg`
            , Rn = `${d}/learning-path.svg`
            , Fn = `${d}/learning-path-active.svg`
            , $n = `${d}/assessment.svg`
            , Un = `${d}/assessment-active.svg`
            , Bn = `${d}/labs.svg`
            , Gn = `${d}/labs-active.svg`
            , kn = `${d}/challenge.svg`
            , jn = `${d}/challenge-active.svg`
            , Jn = `${d}/company-specific-test.svg`
            , Yn = `${d}/company-specific-test-active.svg`
            , Hn = `${d}/quizzes.svg`
            , Kn = `${d}/quizzes-active.svg`
            , Wn = `${d}/hackathon.svg`
            , zn = `${d}/hackathon-active.svg`
            , Zn = `${d}/profile-bg-morn.svg`
            , Qn = `${d}/background-afternoon.png`
            , Vn = `${d}/background-evening.png`
            , Xn = `${d}/background-night.png`
            , qn = `${d}/profile-edit-icon.svg`
            , ta = `${d}/profile_lock.svg`
            , ea = `${d}/edit.svg`
            , sa = `${d}/background-morning-desktop.svg`
            , ia = `${d}/background-noon-desktop.png`
            , oa = `${d}/background-evening-desktop.png`
            , na = `${d}/background-night-desktop.png`
            , aa = `${d}/toast_pattern.svg`
            , la = `${C}/start_Date.svg`
            , ra = `${C}/end_Date.svg`
            , ca = `${N}/assessment.svg`
            , da = `${N}/practice_test.svg`
            , ha = `${C}/back_Button.svg`
            , ua = "/assets/images/no_internet.svg"
            , pa = "/assets/images/not_available.svg"
            , ga = "/assets/images/courseBanner.png"
            , ma = `${C}/badgesBlue.svg`
            , fa = `${C}/endDateRed.svg`
            , va = `${I}/completed.svg`
            , _a = `${I}/enrolled.svg`
            , ba = `${I}/expired.svg`
            , ya = `${I}/inProgress.svg`
            , Ca = `${I}/Eligible.svg`
            , xa = `${I}/Applied.svg`
            , Sa = `${I}/hand.svg`
            , Da = `${I}/placed.svg`
            , wa = `${I}/waiting.svg`
            , Oa = `${I}/rejected.svg`
            , Pa = `${I}/Location.svg`
            , Ta = `${C}/startDateGreen.svg`
            , Ia = `${C}/testBlue.svg`
            , Aa = `${M}/cost.svg`
            , Ma = `${M}/clock.svg`
            , Ea = `${M}/validity.svg`
            , La = `${C}/background.svg`
            , Na = `${M}/payment.svg`
            , Ra = `${M}/line.svg`
            , Fa = `${M}/cart.svg`
            , $a = `${M}/bestseller.svg`
            , Ua = `${M}/assessment_Test.svg`
            , Ba = `${O}/certificate_icon_1.svg`
            , Ga = `${C}/superBadgesOrange.svg`
            , ka = `${c}/header_banner.png`
            , ja = `${O}/rectangle.png`
            , Ja = `${O}/Fileicon.svg`
            , Ya = `${O}/orange.svg`
            , Ha = "/assets/images/common/coe-timer.svg"
            , Ka = "/assets/images/common/waiting-for-approval.svg"
            , Wa = "/assets/images/common/coe-approve-tik.svg"
            , za = `${M}/backgroundMarket.svg`
            , Za = `${M}/testMarket.svg`
            , Qa = `${M}/testMarketMobile.svg`
            , Va = `${M}/timers.svg`
            , Xa = `${M}/timersMobile.svg`
            , qa = `${M}/marketAssessment.svg`
            , tl = `${M}/marketAssessmentMobile.svg`
            , el = "/assets/images/common/reload.svg"
            , sl = `${D}/teams-chat.svg`
            , il = "/assets/images/github_img.png"
            , ol = "/assets/images/verifyBg.png"
            , nl = "/assets/images/storage_icon.svg"
            , al = "/assets/images/git_synced.svg"
            , ll = "/assets/images/git_synced_hover.svg"
            , rl = "/assets/images/git_unsynced.svg"
            , cl = "/assets/images/git_unsynced_hover.svg"
            , dl = `${C}/green_ans.svg`
            , hl = `${C}/red_wrong_ans.svg`
            , ul = `${C}/resetGrid.svg`
            , pl = "/assets/images/speed_checker.svg"
            , gl = "/assets/images/sync_icon.svg"
            , ml = "/assets/images/test_curve.svg"
            , fl = `${C}/party.svg`
            , vl = `${C}/reward.svg`
            , _l = `${C}/verified.svg`
            , bl = `${C}/res_verify.svg`
            , yl = "/assets/images/qr-code.gif"
            , Cl = `${C}/overall_image.jpg`
            , xl = `${C}/flag_icon.svg`
            , Sl = `${C}/accuracy_green.svg`
            , Dl = `${C}/accuracy_red.svg`
            , wl = `${C}/accuracy_yellow.svg`
            , Ol = `${C}/skill-score-outline.svg`
            , Pl = `${C}/skill-score-outline-small.svg`
    }
    ,
    2340: (G, $, i) => {
        "use strict";
        i.d($, {
            N: () => n
        });
        const n = {
            production: !0,
            HOST: {
                COOKIE_LINK: "https://api.examly.io/api",
                link: "https://api.examly.io/api",
                link2: "https://service-fb-examly-io-7tvaoi4e5q-uk.a.run.app/api",
                HOST_LINK: "https://api.examly.io/api",
                SOCKET_LINK: "wss://qqpy0fj9dj.execute-api.us-east-1.amazonaws.com/prod",
                IDE_domain: "examlyiopb.examly.io",
                RECOGN_LINK: "https://audio-recognition-7tvaoi4e5q-uk.a.run.app",
                MS_drives: "https://drives.examly.io/api",
                COE_HOST_LINK: "https://coe-service-7tvaoi4e5q-uk.a.run.app/api",
                CLOUD_PROVIDER: "https://cloud-question-provider-handler-7tvaoi4e5q-uk.a.run.app",
                EXTENSION_NAME: "NeoExamShield",
                EXTENSION_URL: "https://chrome.google.com/webstore/detail/neoexamshield/deojfdehldjjfmcjcfaojgaibalafifc?hl=en-GB",
                PDF_VALIDATOR: "https://us-central1-examly-events.cloudfunctions.net/pdf-validator"
            },
            notifications: "https://notifications.examly.io/notifications",
            FireBaseKeys: {
                apiKey: "AIzaSyAkr8brtk7ROyrQKwJJ3VllLonn7eF5gPM",
                authDomain: "examly-push.firebaseapp.com",
                databaseURL: "https://examly-push.firebaseio.com",
                projectId: "examly-push",
                storageBucket: "examly-push.appspot.com",
                messagingSenderId: "41726353840",
                appId: "1:41726353840:web:fc55659a4eff056a",
                measurementId: "G-XGJ11LD7BG",
                vapidKey: "BBIyvhzXbfxhv7lr_JlxAF00v7tCJ6IWe3eFAeRhofJbW3LP5fTxLyv2O-8a03g5RchXwgdzxkyT9SPdzWWXnJo"
            },
            cloud_provider_queue: {
                QueueUrl: "https://sqs.us-east-1.amazonaws.com/691795667509/examly-cloud-provider-prod",
                region: "us-east-1"
            },
            event_stream: {
                StreamName: "examly-prod-stream-event",
                region: "us-east-1"
            },
            submit_stream: {
                StreamName: "examly-prod-stream-submit",
                region: "us-east-1"
            },
            vi_stream: {
                StreamName: "examly-prod-vi-submit",
                region: "us-east-1"
            },
            program_compiler_handler: {
                azureUrl: "https://compiler-handler.thankfulocean-7a1f3200.centralindia.azurecontainerapps.io",
                cloudUrl: "https://compiler-handler-7tvaoi4e5q-uk.a.run.app"
            },
            program_compile_queue: {
                QueueUrl: "https://sqs.us-east-1.amazonaws.com/691795667509/examly-prod-program-compile",
                region: "us-east-1"
            },
            essay_compile_queue: {
                QueueUrl: "https://sqs.us-east-1.amazonaws.com/691795667509/examly-prod-essay-compile",
                region: "us-east-1"
            },
            debugger_queue: {
                QueueUrl: "https://sqs.us-east-1.amazonaws.com/691795667509/examly-prod-debugger",
                region: "us-east-1"
            },
            speed_test: "https://us-east4-examly-events.cloudfunctions.net/ghj-cvbnm-uiop-prod-ghj-cvbnm-uiop",
            razorpay: {
                key: "rzp_live_uxjVE0KhCFdZeO"
            },
            instructionTime: 25,
            g_measurement_id: "G-0FNBXHRR67",
            network_speed: {
                DOWN_PROC_NETWORK_SPEED: 1,
                UP_PROC_NETWORK_SPEED: 1,
                DOWN_AV_PROC_NETWORK_SPEED: 3,
                UP_AV_PROC_NETWORK_SPEED: 2,
                DOWN_PROJ_NETWORK_SPEED: 3,
                UP_PROJ_NETWORK_SPEED: 2,
                NETWORK_SPEED: 2
            },
            s3ObjectPrefix: "https://s3.amazonaws.com/exams-media/",
            s3ObjectVerifiedPic: "https://s3.amazonaws.com/prod-student-verification-images/",
            s3Objectstudentassets: "https://s3.amazonaws.com/prod-users-asset/",
            s3ObjectDriveBucket: "https://s3.amazonaws.com/examly-data/",
            s3ObjectProctorBucket: "https://s3.amazonaws.com/prod-proctoring-screen/",
            lpuProctorBucket: "https://s3.amazonaws.com/lpu-proctoring-screenshot/",
            gitHub: {
                authURL: "https://github.com/login/oauth/authorize?scope=read:user%20repo%20write:public_key%20user%20read:user%20user:email%20repo&allow_signup=true&client_id=",
                clientID: "fed95352b3a11893ccf8",
                returnURL: "https://neocoder.examly.io/githubredirect-handler?id=",
                organization_name: "iamneo-production"
            },
            aes_decrypt: {
                key: "k3QL95NjdP!cA34CsXL"
            },
            maintenance: {
                show: !1,
                startDate: "06-Oct-2024, 12:00AM",
                endDate: "06-Oct-2024, 05:00AM",
                closable: !0
            }
        }
    }
    ,
    2561: (G, $, i) => {
        "use strict";
        var n = i(2313)
            , e = i(5e3)
            , x = i(520)
            , C = i(6360)
            , O = i(151)
            , D = i(532)
            , M = i(4120);
        let I = (() => {
            class h {
                constructor(l, m) {
                    this.loginservice = l,
                        this.router = m
                }
                canActivate(l, m) {
                    return this.loginservice.networkStatus().subscribe(_ => !0, _ => (this.router.navigateByUrl("/no-network"),
                        !1)),
                        !0
                }
            }
            return h.\u0275fac = function (l) {
                return new (l || h)(e.LFG(M.r), e.LFG(D.F0))
            }
                ,
                h.\u0275prov = e.Yz7({
                    token: h,
                    factory: h.\u0275fac
                }),
                h
        }
        )();
        var N = i(7465)
            , T = i(2511);
        let w = (() => {
            class h {
                constructor(l, m, _, L) {
                    this.globalService = l,
                        this.testService = m,
                        this.loginservice = _,
                        this.router = L
                }
                canActivate(l, m) {
                    let _ = this.loginservice.loginStatus();
                    if (_) {
                        if (localStorage.getItem("noRedirect"))
                            return !1;
                        if (JSON.parse(localStorage.getItem("school_details")),
                            localStorage.getItem("redirect"),
                            this.loginservice.schoolId || this.loginservice.branchId || this.loginservice.instituteType || (_ = JSON.parse(_),
                                _ && _.school_branch_department_users && _.school_branch_department_users.length && (this.loginservice.schoolId = _.school_branch_department_users[0].school_id,
                                    this.loginservice.branchId = _.school_branch_department_users.map(j => j.branch_id),
                                    this.loginservice.instituteType = _.institute_type)),
                            !this.schoolMetaData) {
                            const j = JSON.parse(localStorage.getItem("school_details"));
                            this.schoolMetaData = j && j.schools_metadata ? j.schools_metadata : void 0
                        }
                        return !this.schoolMetaData || !(m.url.includes("type=mycourses") && !this.schoolMetaData.allow_courses || m.url.includes("type=myprojects") && !this.schoolMetaData.allow_course_projects || m.url.includes("type=myquizzes") && !this.schoolMetaData.allow_quizzes || m.url.includes("type=myexams") && !this.schoolMetaData.allow_exams || m.url.includes("type=mypractices") && !this.schoolMetaData.allow_practices || m.url.includes("type=mylearningpaths") && !this.schoolMetaData.allow_learning_paths || m.url.includes("type=myhackathons") && !this.schoolMetaData.allow_hackathons || m.url.includes("type=myassessments") && !this.schoolMetaData.allow_assessments || m.url.includes("type=mylabs") && !this.schoolMetaData.allow_lab_courses || m.url.includes("type=mychallenges") && !this.schoolMetaData.allow_challenges || m.url.includes("type=mytests") && !this.schoolMetaData.allow_company_specific_tests || m.url.includes("drive") && !this.schoolMetaData.allow_drives || m.url.includes("contest") && !this.schoolMetaData.allow_contest || m.url.includes("feeds") && !this.schoolMetaData.allow_feeds || m.url.includes("dashboard") && !this.schoolMetaData.allow_dashboard || m.url.includes("leaderboard") && !this.schoolMetaData.allow_leaderboard || m.url.includes("attendancesettings") && !this.schoolMetaData.allow_attendance || m.url.includes("chat") && !this.schoolMetaData.allow_engagement || m.url.includes("certificates") && !this.schoolMetaData.allow_certificates || m.url.includes("profile") && this.schoolMetaData.disableProfile) || (this.router.navigateByUrl(this.globalService.defaultRedirection()),
                            !1)
                    }
                    return this.testService.removeCopyPasteHandler(),
                        this.router.navigateByUrl("/login"),
                        !1
                }
            }
            return h.\u0275fac = function (l) {
                return new (l || h)(e.LFG(N.U), e.LFG(T.q), e.LFG(M.r), e.LFG(D.F0))
            }
                ,
                h.\u0275prov = e.Yz7({
                    token: h,
                    factory: h.\u0275fac
                }),
                h
        }
        )()
            , g = (() => {
                class h {
                    constructor(l, m) {
                        this.globalService = l,
                            this.router = m
                    }
                    canActivate(l, m) {
                        if (!this.schoolMetaData) {
                            const _ = JSON.parse(localStorage.getItem("school_details"));
                            this.schoolMetaData = _ && _.schools_metadata ? _.schools_metadata : void 0
                        }
                        if (!this.enableFeatures) {
                            const _ = JSON.parse(localStorage.getItem("school_details"));
                            this.enableFeatures = _ && _.enable_features ? _.enable_features : void 0
                        }
                        return this.schoolMetaData && this.enableFeatures ? !(m.url.includes("course") && !this.schoolMetaData.allow_public_buying || m.url.includes("home") && !this.schoolMetaData.allow_public_feeds) || (this.router.navigate([this.globalService.publicNavigation(this.schoolMetaData, this.enableFeatures)]),
                            !1) : (localStorage.setItem("path", m.url),
                                !1)
                    }
                }
                return h.\u0275fac = function (l) {
                    return new (l || h)(e.LFG(N.U), e.LFG(D.F0))
                }
                    ,
                    h.\u0275prov = e.Yz7({
                        token: h,
                        factory: h.\u0275fac
                    }),
                    h
            }
            )();
        var S = i(5227);
        let c = (() => {
            class h {
                constructor(l, m, _, L) {
                    this.loginservice = l,
                        this.router = m,
                        this.serv = _,
                        this.globalService = L
                }
                canActivate(l, m) {
                    if (!this.schoolMetaData) {
                        const _ = JSON.parse(localStorage.getItem("school_details"));
                        this.schoolMetaData = _ && _.schools_metadata ? _.schools_metadata : void 0
                    }
                    if (this.schoolMetaData && this.schoolMetaData.disableProfile)
                        return new Promise(_ => {
                            localStorage.removeItem("noRedirect"),
                                this.serv.noRedirect.next({
                                    status: !1
                                });
                            const L = this.globalService.defaultRedirection();
                            this.router.navigateByUrl(L),
                                _(!1)
                        }
                        );
                    if (this.serv.isRedirected)
                        return this.serv.isRedirected = !1,
                            Promise.resolve(!0);
                    {
                        let _ = JSON.parse(localStorage.getItem("token"));
                        return new Promise(L => {
                            this.loginservice.userPermissionList(_).subscribe(k => {
                                localStorage.setItem("branches", JSON.stringify(k.branches)),
                                    this.serv.getGenericMandatoryFields(_).subscribe(j => {
                                        let z = j;
                                        localStorage.setItem("formData", JSON.stringify(z));
                                        const Y = JSON.stringify(z.student_ppa_profiles[0]);
                                        localStorage.setItem("ppaData", Y),
                                            this.serv.getAllCustomFields(_, _.school_branch_department_users, JSON.parse(localStorage.getItem("school_details")).school_id).subscribe(J => {
                                                let H = [];
                                                for (const W of J) {
                                                    if (!(W.studentCustomFields.student_custom_fields.fields && W.studentCustomFields.student_custom_fields.fields.length > 0))
                                                        return "";
                                                    H.push(W.studentCustomFields.student_custom_fields.fields)
                                                }
                                                this.serv.checkRedirect(j, H, _.school_branch_department_users, z, _).subscribe(W => {
                                                    J = !0,
                                                        L(!0),
                                                        "personal" !== W && "acad" !== W && "custom" !== W && (J = !0,
                                                            L(!1))
                                                }
                                                )
                                            }
                                            )
                                    }
                                    )
                            }
                            )
                        }
                        )
                    }
                }
            }
            return h.\u0275fac = function (l) {
                return new (l || h)(e.LFG(M.r), e.LFG(D.F0), e.LFG(S.H), e.LFG(N.U))
            }
                ,
                h.\u0275prov = e.Yz7({
                    token: h,
                    factory: h.\u0275fac
                }),
                h
        }
        )();
        var o = i(4351)
            , t = i(8835);
        let s = (() => {
            class h {
                constructor(l, m, _) {
                    this.active = l,
                        this.teamsService = m,
                        this.router = _
                }
                ngOnInit() {
                    this.active.queryParamMap.pipe((0,
                        o.b)(l => this.teamsService.getGitAcessToken(l.get("code")))).subscribe(l => {
                            window.close()
                        }
                        )
                }
            }
            return h.\u0275fac = function (l) {
                return new (l || h)(e.Y36(D.gz), e.Y36(t.U), e.Y36(D.F0))
            }
                ,
                h.\u0275cmp = e.Xpm({
                    type: h,
                    selectors: [["app-github-redirect"]],
                    decls: 2,
                    vars: 0,
                    template: function (l, m) {
                        1 & l && (e.TgZ(0, "h2"),
                            e._uU(1, "Redirecting..."),
                            e.qZA())
                    },
                    styles: [""]
                }),
                h
        }
        )()
            , a = (() => {
                class h {
                    constructor(l) {
                        this.activedRouter = l
                    }
                    ngOnInit() {
                        this.activedRouter.queryParams.subscribe(l => {
                            let m = l.id.split("_");
                            window.location.href = `${m[0]}/mycourses/details?id=${m[1]}&code=${l.code}`
                        }
                        )
                    }
                }
                return h.\u0275fac = function (l) {
                    return new (l || h)(e.Y36(D.gz))
                }
                    ,
                    h.\u0275cmp = e.Xpm({
                        type: h,
                        selectors: [["app-github-redirect-handler"]],
                        decls: 2,
                        vars: 0,
                        template: function (l, m) {
                            1 & l && (e.TgZ(0, "h2"),
                                e._uU(1, "Redirecting..."),
                                e.qZA())
                        },
                        styles: ["h2[_ngcontent-%COMP%]{color:#000}"]
                    }),
                    h
            }
            )();
        var r = i(9646);
        const p = new e.OlP("REQUEST_IDLE_CALLBACK");
        let u = (() => {
            class h {
                constructor(l, m) {
                    this._ngZone = l,
                        this.requestIdleCallback = m,
                        this.loadingRoute = new Set,
                        this.loading = !0
                }
                preload(l, m) {
                    this.loadingRoute.has(l) && (this.loading = !1);
                    const _ = "undefined" != typeof navigator ? navigator.connection : void 0;
                    if (_ && ((_.effectiveType || "").includes("2g") || (_.effectiveType || "").includes("3g") || _.saveData) && (this.loading = !1),
                        this.loading && l.data && l.data.preload)
                        return this.requestIdleCallback(m),
                            (0,
                                r.of)(null)
                }
            }
            return h.\u0275fac = function (l) {
                return new (l || h)(e.LFG(e.R0b), e.LFG(p))
            }
                ,
                h.\u0275prov = e.Yz7({
                    token: h,
                    factory: h.\u0275fac
                }),
                h
        }
        )();
        const v = [{
            provide: u,
            useClass: u,
            deps: [e.R0b, p]
        }]
            , y = [{
                provide: p,
                useFactory: function d(h) {
                    if ("undefined" == typeof window)
                        return l => setTimeout(l);
                    let P = window;
                    return P.requestIdleCallback ? l => P.requestIdleCallback(l) : l => h.runOutsideAngular(() => P.setTimeout(l, 10))
                },
                deps: [e.R0b]
            }];
        let f = (() => {
            class h {
                static forRoot(l = {}) {
                    return {
                        ngModule: h,
                        providers: [...!1 === l.requestIdleCallback ? [] : y, ...v]
                    }
                }
                static IdleStrategy() {
                    return u
                }
            }
            return h.\u0275fac = function (l) {
                return new (l || h)
            }
                ,
                h.\u0275mod = e.oAB({
                    type: h
                }),
                h.\u0275inj = e.cJS({}),
                h
        }
        )();
        const E = [{
            path: "login",
            loadChildren: () => Promise.all([i.e(778), i.e(4157), i.e(7911), i.e(5346), i.e(8592), i.e(6184)]).then(i.bind(i, 596)).then(h => h.LoginModule),
            canActivate: [I]
        }, {
            path: "pwd",
            loadChildren: () => Promise.all([i.e(778), i.e(4157), i.e(7911), i.e(5346), i.e(8592), i.e(6184)]).then(i.bind(i, 596)).then(h => h.LoginModule)
        }, {
            path: "otp",
            loadChildren: () => Promise.all([i.e(778), i.e(4157), i.e(7911), i.e(5346), i.e(8592), i.e(6184)]).then(i.bind(i, 596)).then(h => h.LoginModule)
        }, {
            path: "resendotp",
            loadChildren: () => Promise.all([i.e(778), i.e(4157), i.e(7911), i.e(5346), i.e(8592), i.e(6184)]).then(i.bind(i, 596)).then(h => h.LoginModule)
        }, {
            path: "signup",
            loadChildren: () => Promise.all([i.e(778), i.e(4157), i.e(7911), i.e(5346), i.e(8592), i.e(6184)]).then(i.bind(i, 596)).then(h => h.LoginModule)
        }, {
            path: "forgot",
            loadChildren: () => Promise.all([i.e(778), i.e(4157), i.e(7911), i.e(5346), i.e(8592), i.e(6184)]).then(i.bind(i, 596)).then(h => h.LoginModule)
        }, {
            path: "resetpassword",
            loadChildren: () => Promise.all([i.e(778), i.e(4157), i.e(7911), i.e(5346), i.e(8592), i.e(6184)]).then(i.bind(i, 596)).then(h => h.LoginModule)
        }, {
            path: "setpassword",
            loadChildren: () => Promise.all([i.e(778), i.e(4157), i.e(7911), i.e(5346), i.e(8592), i.e(6184)]).then(i.bind(i, 596)).then(h => h.LoginModule)
        }, {
            path: "activation",
            loadChildren: () => Promise.all([i.e(778), i.e(4157), i.e(7911), i.e(5346), i.e(8592), i.e(6184)]).then(i.bind(i, 596)).then(h => h.LoginModule)
        }, {
            path: "contest",
            loadChildren: () => Promise.all([i.e(778), i.e(4157), i.e(7911), i.e(8592), i.e(3062)]).then(i.bind(i, 5867)).then(h => h.ContestRegistrationModule)
        }, {
            path: "create-profile",
            loadChildren: () => Promise.all([i.e(778), i.e(4157), i.e(7911), i.e(8592), i.e(9317)]).then(i.bind(i, 7616)).then(h => h.InitFormModule),
            canActivate: [c]
        }, {
            path: "feeds",
            loadChildren: () => Promise.all([i.e(3482), i.e(5024), i.e(4330)]).then(i.bind(i, 4330)).then(h => h.FeedsModule),
            canActivate: [I, w]
        }, {
            path: "course/product",
            loadChildren: () => Promise.all([i.e(3482), i.e(1927), i.e(5024), i.e(5346), i.e(3731), i.e(8470), i.e(4441)]).then(i.bind(i, 3404)).then(h => h.CourselayoutModule),
            canActivate: [I],
            data: {
                preload: !0
            }
        }, {
            path: "course",
            loadChildren: () => Promise.all([i.e(3482), i.e(1927), i.e(5024), i.e(2059), i.e(9638), i.e(2237), i.e(5040), i.e(7489), i.e(7413), i.e(9178), i.e(8598)]).then(i.bind(i, 8598)).then(h => h.CourselistModule),
            canActivate: [I],
            data: {
                preload: !0
            }
        }, {
            path: "mycourses",
            loadChildren: () => Promise.all([i.e(3482), i.e(4157), i.e(1927), i.e(2059), i.e(9638), i.e(2237), i.e(57), i.e(5040), i.e(7413), i.e(9178), i.e(8592), i.e(2448)]).then(i.bind(i, 824)).then(h => h.MycourseModule),
            canActivate: [I, w],
            data: {
                preload: !0
            }
        }, {
            path: "cart",
            loadChildren: () => Promise.all([i.e(778), i.e(4157), i.e(1927), i.e(7911), i.e(2059), i.e(1175)]).then(i.bind(i, 8533)).then(h => h.CartModule),
            canActivate: [I]
        }, {
            path: "home",
            loadChildren: () => Promise.all([i.e(3482), i.e(5024), i.e(4330)]).then(i.bind(i, 4330)).then(h => h.FeedsModule),
            canActivate: [I, g]
        }, {
            path: "dashboard",
            loadChildren: () => Promise.all([i.e(3482), i.e(778), i.e(4157), i.e(1927), i.e(7703), i.e(4255), i.e(57), i.e(111), i.e(8592), i.e(178)]).then(i.bind(i, 1670)).then(h => h.DashboardModule),
            canActivate: [w],
            data: {
                preload: !0
            }
        }, {
            path: "profile",
            loadChildren: () => Promise.all([i.e(3482), i.e(778), i.e(4157), i.e(5024), i.e(7911), i.e(5346), i.e(9638), i.e(57), i.e(111), i.e(5690), i.e(8592), i.e(6135)]).then(i.bind(i, 9860)).then(h => h.ProfileModule),
            canActivate: [I, w]
        }, {
            path: "accountsettings",
            loadChildren: () => Promise.all([i.e(778), i.e(4157), i.e(7911), i.e(111), i.e(5690)]).then(i.bind(i, 3910)).then(h => h.AccountSettingsModule)
        }, {
            path: "no-network",
            loadChildren: () => i.e(9574).then(i.bind(i, 9574)).then(h => h.NoNetworkModule)
        }, {
            path: "certificate/:certificate_id",
            loadChildren: () => Promise.all([i.e(8592), i.e(4744)]).then(i.bind(i, 4744)).then(h => h.VerifyCertificateModule)
        }, {
            path: "test",
            loadChildren: () => Promise.all([i.e(3482), i.e(778), i.e(4157), i.e(1927), i.e(5024), i.e(7911), i.e(2059), i.e(5346), i.e(9638), i.e(7703), i.e(9802), i.e(5040), i.e(3578), i.e(5369), i.e(7489), i.e(820), i.e(7713), i.e(5956), i.e(4535), i.e(8592), i.e(9617)]).then(i.bind(i, 8539)).then(h => h.TestTakingModule),
            canActivate: [I, w]
        }, {
            path: "dualproctor-remote",
            loadChildren: () => Promise.all([i.e(9802), i.e(9306)]).then(i.bind(i, 9306)).then(h => h.dualproctorModule),
            canActivate: [I, w]
        }, {
            path: "compiler-instruction",
            loadChildren: () => i.e(5956).then(i.bind(i, 5956)).then(h => h.CompilerInstructionModule),
            canActivate: [I]
        }, {
            path: "result",
            loadChildren: () => Promise.all([i.e(3482), i.e(778), i.e(4157), i.e(1927), i.e(5024), i.e(5346), i.e(9638), i.e(2237), i.e(7703), i.e(4255), i.e(111), i.e(5040), i.e(3578), i.e(5369), i.e(7489), i.e(7713), i.e(4535), i.e(8592), i.e(8174)]).then(i.bind(i, 7090)).then(h => h.ResultAnalysisModule),
            canActivate: [I]
        }, {
            path: "project",
            loadChildren: () => Promise.all([i.e(3482), i.e(1927), i.e(5024), i.e(7713), i.e(8592), i.e(4942)]).then(i.bind(i, 4942)).then(h => h.ProjectModule),
            canActivate: [I, w]
        }, {
            path: "mycontest",
            loadChildren: () => Promise.all([i.e(3482), i.e(4157), i.e(1927), i.e(2059), i.e(9638), i.e(2237), i.e(57), i.e(5040), i.e(7413), i.e(9178), i.e(8592), i.e(2448)]).then(i.bind(i, 824)).then(h => h.MycourseModule),
            canActivate: [I, w]
        }, {
            path: "mycdetails",
            loadChildren: () => Promise.all([i.e(3482), i.e(778), i.e(4157), i.e(5024), i.e(7911), i.e(2059), i.e(57), i.e(9802), i.e(820), i.e(2190), i.e(8656), i.e(8592), i.e(450)]).then(i.bind(i, 450)).then(h => h.ContestDetailsModule),
            canActivate: [I, w],
            data: {
                preload: !0
            }
        }, {
            path: "drives",
            loadChildren: () => Promise.all([i.e(3482), i.e(4157), i.e(1927), i.e(2059), i.e(9638), i.e(2237), i.e(57), i.e(5040), i.e(7413), i.e(9178), i.e(8592), i.e(2448)]).then(i.bind(i, 824)).then(h => h.MycourseModule),
            canActivate: [I, w],
            data: {
                preload: !0
            }
        }, {
            path: "otpverification",
            loadChildren: () => i.e(3265).then(i.bind(i, 3265)).then(h => h.OtpVerificationModule),
            canActivate: [I, w],
            data: {
                preload: !0
            }
        }, {
            path: "mydrivedetails",
            loadChildren: () => Promise.all([i.e(3482), i.e(778), i.e(4157), i.e(5024), i.e(7911), i.e(2059), i.e(9638), i.e(2190), i.e(8592), i.e(5952)]).then(i.bind(i, 9997)).then(h => h.DriveDetailsModule),
            canActivate: [I, w],
            data: {
                preload: !0
            }
        }, {
            path: "loginredirect",
            loadChildren: () => Promise.all([i.e(778), i.e(4157), i.e(7911), i.e(5346), i.e(8592), i.e(6184)]).then(i.bind(i, 596)).then(h => h.LoginModule)
        }, {
            path: "loginredirect/QR-code-scanner",
            loadChildren: () => Promise.all([i.e(778), i.e(4157), i.e(7911), i.e(5346), i.e(8592), i.e(6184)]).then(i.bind(i, 596)).then(h => h.LoginModule)
        }, {
            path: "leaderboard",
            loadChildren: () => Promise.all([i.e(1927), i.e(2059), i.e(2237), i.e(4255), i.e(7413), i.e(1708), i.e(5888)]).then(i.bind(i, 300)).then(h => h.LeaderboardLayoutModule),
            canActivate: [I, w]
        }, {
            path: "examsandresults",
            loadChildren: () => Promise.all([i.e(3482), i.e(1927), i.e(4255), i.e(3578), i.e(98)]).then(i.bind(i, 4227)).then(h => h.ExamsResultsLayoutModule),
            canActivate: [I, w]
        }, {
            path: "chat",
            loadChildren: () => Promise.all([i.e(3482), i.e(5024), i.e(2237), i.e(8592), i.e(4815)]).then(i.bind(i, 4815)).then(h => h.ChatLayoutModule),
            canActivate: [I, w]
        }, {
            path: "chat/:channel_id",
            loadChildren: () => Promise.all([i.e(3482), i.e(5024), i.e(2237), i.e(8592), i.e(4815)]).then(i.bind(i, 4815)).then(h => h.ChatLayoutModule),
            canActivate: [I, w]
        }, {
            path: "certificates",
            loadChildren: () => Promise.all([i.e(1927), i.e(2059), i.e(2237), i.e(57), i.e(3731), i.e(8592), i.e(7910)]).then(i.bind(i, 7910)).then(h => h.CertificateLayoutModule),
            canActivate: [I, w]
        }, {
            path: "QR-code-scanner",
            loadChildren: () => i.e(7126).then(i.bind(i, 7126)).then(h => h.QRCodeScannerModule),
            canActivate: [I, w]
        }, {
            path: "ide",
            loadChildren: () => Promise.all([i.e(3482), i.e(778), i.e(4157), i.e(1927), i.e(5024), i.e(7911), i.e(5346), i.e(7703), i.e(3578), i.e(5369), i.e(5956), i.e(7616)]).then(i.bind(i, 8168)).then(h => h.IDEPlaygroundModule),
            canActivate: [I]
        }, {
            path: "githubredirect",
            component: s,
            canActivate: [I]
        }, {
            path: "githubredirect-handler",
            component: a,
            canActivate: [I]
        }, {
            path: "public-profile",
            loadChildren: () => i.e(4741).then(i.bind(i, 793)).then(h => h.PublicProfileModule),
            canActivate: [I]
        }, {
            path: "network-check",
            loadChildren: () => Promise.all([i.e(8592), i.e(9425)]).then(i.bind(i, 6967)).then(h => h.NetworkCheckModule),
            canActivate: [I]
        }, {
            path: "test-compatibility",
            loadChildren: () => Promise.all([i.e(8592), i.e(5003)]).then(i.bind(i, 4889)).then(h => h.TestCompatibilityModule),
            canActivate: [I]
        }];
        let R = (() => {
            class h {
            }
            return h.\u0275fac = function (l) {
                return new (l || h)
            }
                ,
                h.\u0275mod = e.oAB({
                    type: h
                }),
                h.\u0275inj = e.cJS({
                    imports: [[f.forRoot(), D.Bz.forRoot(E, {
                        relativeLinkResolution: "legacy",
                        preloadingStrategy: u
                    })], D.Bz]
                }),
                h
        }
        )();
        var A = i(7582)
            , B = i(2340)
            , b = i(2973)
            , U = i(9808)
            , F = i(9014)
            , K = i(8575)
            , Z = i(5123);
        const me = ["sidebar"]
            , V = ["iconList"]
            , fe = ["listLayout"];
        function X(h, P) {
            if (1 & h) {
                const l = e.EpF();
                e.TgZ(0, "div", 13),
                    e.NdJ("click", function () {
                        return e.CHM(l),
                            e.oxw().handlePopup()
                    }),
                    e.qZA()
            }
        }
        function q(h, P) {
            if (1 & h) {
                const l = e.EpF();
                e.TgZ(0, "div", 14),
                    e.NdJ("click", function () {
                        return e.CHM(l),
                            e.oxw().handleToggleBtn()
                    }),
                    e.qZA()
            }
        }
        function tt(h, P) {
            if (1 & h && e._UZ(0, "img", 15),
                2 & h) {
                const l = e.oxw();
                e.Q6J("src", l.schoolLogo, e.LSH)
            }
        }
        function et(h, P) {
            1 & h && e._UZ(0, "img", 16)
        }
        function st(h, P) {
            if (1 & h) {
                const l = e.EpF();
                e.TgZ(0, "img", 17),
                    e.NdJ("click", function () {
                        return e.CHM(l),
                            e.oxw().handleToggleBtn()
                    }),
                    e.qZA()
            }
            if (2 & h) {
                const l = e.oxw();
                e.Q6J("src", l.prevIcon, e.LSH)
            }
        }
        function it(h, P) {
            if (1 & h && e._UZ(0, "img", 24),
                2 & h) {
                const l = e.oxw(2);
                e.Q6J("src", l.rect, e.LSH)
            }
        }
        function ot(h, P) {
            if (1 & h && e._UZ(0, "img", 25),
                2 & h) {
                const l = e.oxw().$implicit;
                e.Q6J("src", l.icon, e.LSH)
            }
        }
        function nt(h, P) {
            if (1 & h && e._UZ(0, "img", 26),
                2 & h) {
                const l = e.oxw().$implicit;
                e.Q6J("src", l.activeIcon, e.LSH)
            }
        }
        const at = function (h, P, l) {
            return {
                "t-from-primary t-bg-gradient-to-br t-to-primary/10 t-text-white t-text-medium": h,
                "t-text-white/70": P,
                "!t-bg-none": l
            }
        };
        function lt(h, P) {
            if (1 & h) {
                const l = e.EpF();
                e.TgZ(0, "li", 18),
                    e.NdJ("click", function () {
                        const L = e.CHM(l).$implicit
                            , k = e.oxw();
                        return k.navigateToURL(L, L.subType),
                            k.moreListHide = !1
                    }),
                    e.TgZ(1, "a")(2, "div", 19),
                    e.YNc(3, it, 1, 1, "img", 20),
                    e.YNc(4, ot, 1, 1, "img", 21),
                    e.YNc(5, nt, 1, 1, "img", 22),
                    e.TgZ(6, "div", 23),
                    e._uU(7),
                    e.qZA()()()()
            }
            if (2 & h) {
                const l = P.$implicit
                    , m = e.oxw();
                e.xp6(2),
                    e.Q6J("ngClass", e.kEZ(5, at, !0 === l.active, !1 === l.active, !0 === m.cartClicked)),
                    e.xp6(1),
                    e.Q6J("ngIf", !0 === l.active && !1 === m.cartClicked),
                    e.xp6(1),
                    e.Q6J("ngIf", !1 === l.active || !0 === m.cartClicked),
                    e.xp6(1),
                    e.Q6J("ngIf", !0 === l.active && !1 === m.cartClicked),
                    e.xp6(2),
                    e.Oqu(l.text)
            }
        }
        function ve(h, P) {
            if (1 & h && e._UZ(0, "img", 25),
                2 & h) {
                const l = e.oxw(2).$implicit;
                e.Q6J("src", l.icon, e.LSH)
            }
        }
        function rt(h, P) {
            if (1 & h && e._UZ(0, "img", 26),
                2 & h) {
                const l = e.oxw(2).$implicit;
                e.Q6J("src", l.activeIcon, e.LSH)
            }
        }
        const _e = function (h, P) {
            return {
                "t-bg-primary t-text-white t-text-medium": h,
                "t-text-white/70": P
            }
        };
        function ct(h, P) {
            if (1 & h) {
                const l = e.EpF();
                e.TgZ(0, "li", 34),
                    e.NdJ("click", function () {
                        e.CHM(l);
                        const _ = e.oxw().$implicit;
                        return e.oxw(3).navigateToURL(_, _.subType)
                    }),
                    e.TgZ(1, "div", 35)(2, "div", 36),
                    e.YNc(3, ve, 1, 1, "img", 21),
                    e.YNc(4, rt, 1, 1, "img", 22),
                    e.qZA(),
                    e.TgZ(5, "div", 37),
                    e._uU(6),
                    e.qZA()()()
            }
            if (2 & h) {
                const l = e.oxw().$implicit;
                e.xp6(1),
                    e.Q6J("ngClass", e.WLB(4, _e, !0 === l.active, !1 === l.active)),
                    e.xp6(2),
                    e.Q6J("ngIf", !1 === l.active),
                    e.xp6(1),
                    e.Q6J("ngIf", !0 === l.active),
                    e.xp6(2),
                    e.hij(" ", l.text, " ")
            }
        }
        function dt(h, P) {
            if (1 & h && (e.ynx(0),
                e.YNc(1, ct, 7, 7, "li", 33),
                e.BQk()),
                2 & h) {
                const l = P.$implicit;
                e.xp6(1),
                    e.Q6J("ngIf", l.enableIcon)
            }
        }
        function be(h, P) {
            if (1 & h && (e.TgZ(0, "div", 30)(1, "ul", 31),
                e.YNc(2, dt, 2, 1, "ng-container", 32),
                e.qZA()()),
                2 & h) {
                const l = e.oxw(2);
                e.xp6(2),
                    e.Q6J("ngForOf", l.popupList)
            }
        }
        function ht(h, P) {
            if (1 & h) {
                const l = e.EpF();
                e.TgZ(0, "li", 18),
                    e.NdJ("click", function () {
                        return e.CHM(l),
                            e.oxw().handlePopup()
                    }),
                    e.TgZ(1, "a")(2, "div", 27),
                    e._UZ(3, "img", 28),
                    e.qZA()(),
                    e.YNc(4, be, 3, 1, "div", 29),
                    e.qZA()
            }
            if (2 & h) {
                const l = e.oxw();
                e.xp6(3),
                    e.Q6J("src", l.threeDotsIcon, e.LSH),
                    e.xp6(1),
                    e.Q6J("ngIf", l.moreListHide)
            }
        }
        function ye(h, P) {
            1 & h && e._UZ(0, "app-loader", 38),
                2 & h && e.Q6J("type", "type2")
        }
        const ut = function (h, P) {
            return {
                "t-block": h,
                "t-hidden": P
            }
        };
        let pt = (() => {
            class h {
                constructor(l, m, _, L, k, j, z) {
                    this.router = l,
                        this.route = m,
                        this.testService = _,
                        this.globalService = L,
                        this.loginService = k,
                        this.chatService = j,
                        this.driveService = z,
                        this.neoLogo = b.UfT,
                        this.prevIcon = b.c30,
                        this.threeDotsIcon = b.R2v,
                        this.sclMD = {},
                        this.navList = [],
                        this.popupList = [],
                        this.showList = [],
                        this.sideBarHidden = new e.vpe,
                        this.moreListHandle = new e.vpe,
                        this.rect = b.UL5,
                        this.isLoggedIn() && "serviceWorker" in navigator && navigator.serviceWorker.register("/firebase-messaging-sw.js")
                }
                get queryParameter() {
                    let l;
                    return this.route.queryParams.subscribe(m => l = m.type),
                        l
                }
                ngOnInit() {
                    var l, m;
                    return (0,
                        A.mG)(this, void 0, void 0, function* () {
                            this.path = window.location.pathname,
                                this.cartClicked = !1,
                                this.navHeight = this.sidebar.nativeElement.offsetHeight,
                                this.userData = JSON.parse(localStorage.getItem("token")),
                                this.localSchoolData = JSON.parse(localStorage.getItem("school_details")),
                                this.isLoggedIn() && (this.localSchoolData && this.localSchoolData.schools_metadata && (this.schoolLogo = this.localSchoolData.school_logo,
                                    this.sclMD = this.localSchoolData.schools_metadata,
                                    this.navList = [{
                                        text: "Dashboard",
                                        type: "dashboard",
                                        icon: b.f6r,
                                        activeIcon: b.lOc,
                                        active: !0,
                                        url: "/dashboard",
                                        enableIcon: this.sclMD.allow_dashboard
                                    }, {
                                        text: "Courses",
                                        type: "mycourse",
                                        subType: "mycourses",
                                        icon: b.qLk,
                                        activeIcon: b.EW7,
                                        active: !1,
                                        url: "/mycourses?type=mycourses",
                                        enableIcon: this.sclMD.allow_courses
                                    }, {
                                        text: "Contest",
                                        icon: b.G3S,
                                        activeIcon: b.lld,
                                        active: !1,
                                        url: "/mycontest",
                                        enableIcon: this.sclMD.allow_contest
                                    }, {
                                        text: "Labs",
                                        type: "mycourse",
                                        subType: "mylabs",
                                        icon: b.MY5,
                                        activeIcon: b.ic8,
                                        active: !1,
                                        url: "/mycourses?type=mylabs",
                                        enableIcon: this.sclMD.allow_lab_courses
                                    }, {
                                        text: this.driveService.drivesNameFormatView.drivesNamelist.label,
                                        type: "drives",
                                        icon: b.kBL,
                                        activeIcon: b.UD$,
                                        active: !1,
                                        url: "/drives",
                                        enableIcon: this.sclMD.allow_drives
                                    }, {
                                        text: "Projects",
                                        type: "mycourse",
                                        subType: "myprojects",
                                        icon: b.iV_,
                                        activeIcon: b.ibS,
                                        active: !1,
                                        url: "/mycourses?type=myprojects",
                                        enableIcon: this.sclMD.allow_course_projects
                                    }, {
                                        text: "Exams",
                                        type: "mycourse",
                                        subType: "myexams",
                                        icon: b.BAO,
                                        activeIcon: b.gZ7,
                                        active: !1,
                                        url: "/mycourses?type=myexams",
                                        enableIcon: this.sclMD.allow_exams
                                    }, {
                                        text: "Assessments",
                                        type: "mycourse",
                                        subType: "myassessments",
                                        icon: b.V_,
                                        activeIcon: b.l3z,
                                        active: !1,
                                        url: "/mycourses?type=myassessments",
                                        enableIcon: this.sclMD.allow_assessments
                                    }, {
                                        text: "Company Specific Test",
                                        type: "mycourse",
                                        subType: "mytests",
                                        icon: b.W5W,
                                        activeIcon: b.vAR,
                                        active: !1,
                                        url: "/mycourses?type=mytests",
                                        enableIcon: this.sclMD.allow_company_specific_tests
                                    }, {
                                        text: "Practices",
                                        type: "mycourse",
                                        subType: "mypractices",
                                        icon: b.j$B,
                                        activeIcon: b.QDz,
                                        active: !1,
                                        url: "/mycourses?type=mypractices",
                                        enableIcon: this.sclMD.allow_practices
                                    }, {
                                        text: "Open IDE",
                                        icon: b.l9j,
                                        activeIcon: b.G40,
                                        active: !1,
                                        url: "/ide",
                                        enableIcon: this.sclMD.allow_openide
                                    }, {
                                        text: "Leaderboard",
                                        icon: b.J0b,
                                        activeIcon: b.cDC,
                                        active: !1,
                                        url: "/leaderboard",
                                        enableIcon: this.sclMD.allow_leaderboard
                                    }, {
                                        text: "Challenges",
                                        type: "mycourse",
                                        subType: "mychallenges",
                                        icon: b.VJN,
                                        activeIcon: b.XTj,
                                        active: !1,
                                        url: "/mycourses?type=mychallenges",
                                        enableIcon: this.sclMD.allow_challenges
                                    }, {
                                        text: "Quizzes",
                                        type: "mycourse",
                                        subType: "myquizzes",
                                        icon: b.S6u,
                                        activeIcon: b.eKE,
                                        active: !1,
                                        url: "/mycourses?type=myquizzes",
                                        enableIcon: this.sclMD.allow_quizzes
                                    }, {
                                        text: "Learning Paths",
                                        type: "mycourse",
                                        subType: "mylearningpaths",
                                        icon: b.I6h,
                                        activeIcon: b.XDr,
                                        active: !1,
                                        url: "/mycourses?type=mylearningpaths",
                                        enableIcon: this.sclMD.allow_learning_paths
                                    }, {
                                        text: "Hackathons",
                                        type: "mycourse",
                                        subType: "myhackathons",
                                        icon: b.e4F,
                                        activeIcon: b.Nj,
                                        active: !1,
                                        url: "/mycourses?type=myhackathons",
                                        enableIcon: this.sclMD.allow_hackathons
                                    }, {
                                        text: "Engagement",
                                        icon: b.Yg2,
                                        activeIcon: b.i4G,
                                        active: !1,
                                        url: "/chat",
                                        enableIcon: this.sclMD.allow_engagement
                                    }, {
                                        text: "Academics & Examination",
                                        type: "examsandresults",
                                        icon: b.f6r,
                                        activeIcon: b.lOc,
                                        active: !1,
                                        url: "/examsandresults",
                                        enableIcon: this.sclMD.allow_coe
                                    }, {
                                        text: "Certificates",
                                        icon: b.MgP,
                                        activeIcon: b.nsm,
                                        active: !1,
                                        url: "/certificates",
                                        enableIcon: this.sclMD.allow_certificates
                                    }, {
                                        text: "Go to NERD",
                                        type: "neoPAT",
                                        subType: "neoPAT",
                                        icon: b.f6r,
                                        activeIcon: b.lOc,
                                        active: !1,
                                        url: "neoPAT",
                                        enableIcon: this.sclMD.allow_neoPAT
                                    }, {
                                        text: "Marketplace",
                                        icon: b.V5p,
                                        activeIcon: b.ctV,
                                        active: !1,
                                        url: "/course",
                                        enableIcon: !1
                                    }],
                                    this.popupList = [],
                                    this.afterIconList = this.navList.filter(_ => _.enableIcon).length),
                                    this.navList.forEach(_ => {
                                        _.enableIcon && this.showList.push(_)
                                    }
                                    ),
                                    this.path.includes("mycourses") ? this.changeActiveState(`/mycourses?type=${this.queryParameter || "mycourses"}`) : this.changeActiveState(this.path),
                                    (null === (l = this.localSchoolData) || void 0 === l ? void 0 : l.allow_engagement) && (null === (m = this.userData.enable_features) || void 0 === m ? void 0 : m.allow_engagement) && (this.chatService.setUserData(),
                                        yield this.chatService.getPubNub().then(_ => {
                                            !this.path.includes("chat") && _ && this.chatService.getSubscriptionList()
                                        }
                                        )),
                                    this.adjustScreen()),
                                this.router.events.subscribe(_ => {
                                    _ instanceof D.m2 && (_.url.includes("mycourses") ? this.changeActiveState(`/mycourses?type=${this.queryParameter || "mycourses"}`) : "/profile" === _.url ? this.changeActiveState(_.url) : _.url.includes("/mydrivedetails") ? this.changeActiveState("/drives") : _.url.includes("/mycdetails") ? this.changeActiveState("/mycontest") : _.url.includes("/leaderboard") && this.changeActiveState("/leaderboard"))
                                }
                                )
                        })
                }
                ngOnChanges() {
                    return (0,
                        A.mG)(this, void 0, void 0, function* () {
                            this.navHeight = this.sidebar.nativeElement.offsetHeight,
                                this.adjustScreen(),
                                this.cartClicked = this.cart.isTrusted
                        })
                }
                adjustScreen() {
                    let l = this.showList.concat(this.popupList);
                    if (this.navHeight < 640) {
                        let m = 6 - Math.round((690 - this.navHeight) / 150);
                        m < 2 && (m = 2),
                            this.popupList = [],
                            this.popupList = l.splice(m, l.length),
                            this.showList = l
                    }
                    !this.mobile && this.navHeight >= 640 ? (this.popupList = l.splice(8, l.length),
                        this.showList = l) : this.popupList.length > 0 && this.mobile && (this.showList = this.showList.concat(this.popupList),
                            this.popupList = []),
                        this.mobile || (this.toggleBtn = !1),
                        this.updateNavPopup()
                }
                isLoggedIn() {
                    return !!JSON.parse(this.loginService.loginStatus())
                }
                navigateToURL(l, m) {
                    this.cartClicked = !1;
                    const { url: _, type: L } = l;
                    "mycourse" === L ? (this.router.navigateByUrl(_),
                        this.changeActiveState(_)) : "/ide" === _ ? window.open(window.location.protocol + _, "_blank") : "neoPAT" === _ ? this.neoPATRedirection() : (this.router.navigateByUrl(_),
                            this.changeActiveState(_)),
                        this.sideBarHidden.emit(!1),
                        this.moreListHide && this.moreListHandle.emit(this.moreListHide)
                }
                updateNavPopup() {
                    this.popupList.length > 0 && this.popupList.forEach((l, m) => {
                        if (!0 === l.active) {
                            const _ = this.popupList.splice(m, 1)
                                , L = this.showList.pop();
                            this.showList.push(_[0]),
                                this.popupList.unshift(L)
                        }
                    }
                    )
                }
                changeActiveState(l) {
                    this.showList.forEach(m => {
                        m.active = l === m.url || "/mydrivedetails" === l && "/drives" === m.url || "/mycdetails" === l && "/mycontest" === m.url
                    }
                    ),
                        this.popupList.length > 0 && this.popupList.forEach(m => {
                            m.active = l === m.url
                        }
                        ),
                        this.updateNavPopup()
                }
                neoPATRedirection() {
                    this.loader = !0;
                    const { user_id: l, school_id: m, email: _ } = this.userData
                        , L = {
                            user_id: l,
                            school_id: m,
                            school_code: this.localSchoolData.school_code,
                            email: _
                        };
                    this.globalService.getCaptchaToken("qrcodefileupload").then(k => (0,
                        A.mG)(this, void 0, void 0, function* () {
                            const j = yield this.testService.getCryptoJS()
                                , z = {
                                    a: k,
                                    b: j.AES.encrypt(JSON.stringify(L), "up4dywqpkBd7ykuw?kr*Ru>*+B5!s@&kKUZVTu").toString()
                                };
                            this.globalService.neoPATRedirection(z).subscribe(Y => {
                                if (Y && Y.success)
                                    try {
                                        const J = j.AES.decrypt(Y.data, "VAN@?Ydm<E*FrBv^9t~B*2r>+zY9eTGZ8uN$xSw2")
                                            , H = JSON.parse(J.toString(j.enc.Utf8));
                                        if (H && H.tokenid) {
                                            this.loader = !1;
                                            const W = document.createElement("a");
                                            document.body.appendChild(W),
                                                W.href = `https://neopat.examly.io/loginredirect?email=${this.userData.email}&tokenid=${H.tokenid}`,
                                                W.target = "_blank",
                                                W.click(),
                                                this.path = window.location.pathname,
                                                this.path.includes("mycourses") ? this.changeActiveState(`/mycourses?type=${this.queryParameter || "mycourses"}`) : this.changeActiveState(this.path),
                                                document.body.removeChild(W)
                                        } else
                                            this.normalNeoPATRedirect()
                                    } catch (J) {
                                        this.normalNeoPATRedirect()
                                    }
                                else
                                    this.normalNeoPATRedirect()
                            }
                                , Y => {
                                    this.normalNeoPATRedirect()
                                }
                            )
                        }))
                }
                normalNeoPATRedirect() {
                    this.loader = !1,
                        this.globalService.commonGrowl.next({
                            severity: "error",
                            summary: "Attention!",
                            detail: "You are not enrolled."
                        }),
                        this.path = window.location.pathname,
                        this.path.includes("mycourses") ? this.changeActiveState(`/mycourses?type=${this.queryParameter || "mycourses"}`) : this.changeActiveState(this.path)
                }
                handleToggleBtn() {
                    this.sideBarHidden.emit(!1)
                }
                handlePopup() {
                    this.moreListHide = !this.moreListHide,
                        this.moreListHandle.emit(this.moreListHide)
                }
            }
            return h.\u0275fac = function (l) {
                return new (l || h)(e.Y36(D.F0), e.Y36(D.gz), e.Y36(T.q), e.Y36(N.U), e.Y36(M.r), e.Y36(F.a), e.Y36(K.w))
            }
                ,
                h.\u0275cmp = e.Xpm({
                    type: h,
                    selectors: [["app-sidebar"]],
                    viewQuery: function (l, m) {
                        if (1 & l && (e.Gf(me, 7),
                            e.Gf(V, 7),
                            e.Gf(fe, 7)),
                            2 & l) {
                            let _;
                            e.iGM(_ = e.CRH()) && (m.sidebar = _.first),
                                e.iGM(_ = e.CRH()) && (m.iconList = _.first),
                                e.iGM(_ = e.CRH()) && (m.listLayout = _.first)
                        }
                    },
                    inputs: {
                        toggleBtn: "toggleBtn",
                        moreListHide: "moreListHide",
                        mobile: "mobile",
                        cart: "cart",
                        screenHeight: "screenHeight"
                    },
                    outputs: {
                        sideBarHidden: "sideBarHidden",
                        moreListHandle: "moreListHandle"
                    },
                    features: [e.TTD],
                    decls: 13,
                    vars: 12,
                    consts: [["class", "t-absolute t-inset-0 t-w-full t-transition-shadow  t-z-[26]", 3, "click", 4, "ngIf"], ["class", "t-absolute t-inset-0 t-w-full t-transition-shadow t-shadow-black t-bg-black/50 t-z-[26] t-overflow-y-hidden", 3, "click", 4, "ngIf"], ["data-simplebar", "true", 1, "t-w-208", "t-py-10", "t-fixed", "t-inset-y-0", "t-left-0", "t-z-[26]", "t-bg-secondary", "lg:t-px-0", "lg:t-w-75", "lg:t-block", "t-flex", "t-flex-col", 3, "ngClass"], ["sidebar", ""], [1, "t-pt-10", "t-flex", "t-items-center", "t-justify-between", "t-pb-20", "t-pl-20", "lg:t-pl-5", "t-pr-5", "lg:t-justify-center"], [1, "t-flex", "t-items-center", "t-justify-between", "t-px-4", "t-w-36", "t-h-36", "lg:t-w-46", "lg:t-h-46", "t-bg-white", "t-border", "t-rounded-md"], ["alt", "", "class", "t-object-contain t-w-38 t-h-36 lg:t-w-full lg:t-h-full lg:t-max-w-[unset]", 3, "src", 4, "ngIf"], ["src", "./assets/favicons/192.png", "alt", "", "class", "t-object-contain t-w-38 t-h-36 lg:t-w-full lg:t-h-full lg:t-max-w-[unset]", 4, "ngIf"], ["alt", "arrow-img", "class", "t-cursor-pointer t-mr-20", 3, "src", "click", 4, "ngIf"], [1, "t-list-none", "t-h-full", "t-overflow-y-auto", "lg:t-overflow-y-hidden"], [3, "click", 4, "ngFor", "ngForOf"], [3, "click", 4, "ngIf"], [3, "type", 4, "ngIf"], [1, "t-absolute", "t-inset-0", "t-w-full", "t-transition-shadow", "t-z-[26]", 3, "click"], [1, "t-absolute", "t-inset-0", "t-w-full", "t-transition-shadow", "t-shadow-black", "t-bg-black/50", "t-z-[26]", "t-overflow-y-hidden", 3, "click"], ["alt", "", 1, "t-object-contain", "t-w-38", "t-h-36", "lg:t-w-full", "lg:t-h-full", "lg:t-max-w-[unset]", 3, "src"], ["src", "./assets/favicons/192.png", "alt", "", 1, "t-object-contain", "t-w-38", "t-h-36", "lg:t-w-full", "lg:t-h-full", "lg:t-max-w-[unset]"], ["alt", "arrow-img", 1, "t-cursor-pointer", "t-mr-20", 3, "src", "click"], [3, "click"], [1, "t-flex", "t-items-center", "t-py-12", "t-pl-20", "lg:t-pl-0", "hover:t-text-white", "hover:t-from-primary", "hover:t-bg-gradient-to-br", "hover:t-to-primary/10", "t-relative", "lg:t-cursor-pointer", "lg:t-flex-col", "lg:t-justify-center", "lg:t-my-0", "lg:t-mx-auto", "lg:t-px-0", "lg:t-text-center", "lg:t-mb-2", "t-h-48", "lg:t-h-64", 3, "ngClass"], ["alt", "rect", "class", "t-absolute t-left-0 t-h-full", 3, "src", 4, "ngIf"], ["class", "t-mr-4 lg:t-mr-0 t-inline-block t-w-20 t-h-20 t-m-0 t-text-center t-text-small lg:t-mb-2", "alt", "image", 3, "src", 4, "ngIf"], ["class", "t-mr-4 lg:t-mr-0 t-inline-block t-w-20 t-text-white t-h-20 t-m-0 t-text-center t-text-small lg:t-mb-2", "alt", "image", 3, "src", 4, "ngIf"], [1, "t-inline-block", "t-text-big", "lg:t-pl-2", "t-px-20", "lg:t-pr-0", "lg:t-text-small", "lg:t-mt-6", "lg:t-text-center"], ["alt", "rect", 1, "t-absolute", "t-left-0", "t-h-full", 3, "src"], ["alt", "image", 1, "t-mr-4", "lg:t-mr-0", "t-inline-block", "t-w-20", "t-h-20", "t-m-0", "t-text-center", "t-text-small", "lg:t-mb-2", 3, "src"], ["alt", "image", 1, "t-mr-4", "lg:t-mr-0", "t-inline-block", "t-w-20", "t-text-white", "t-h-20", "t-m-0", "t-text-center", "t-text-small", "lg:t-mb-2", 3, "src"], [1, "t-flex", "t-text-white", "t-items-center", "t-py-20", "t-cursor-pointer", "t-justify-center"], ["alt", "image", 3, "src"], ["class", "t-absolute t-overflow-y-auto t-overflow-x-hidden t-max-h-160 t-w-288 t-ml-80 t-bg-secondary t-border t-rounded-md", "style", "margin-top: -160px;", 4, "ngIf"], [1, "t-absolute", "t-overflow-y-auto", "t-overflow-x-hidden", "t-max-h-160", "t-w-288", "t-ml-80", "t-bg-secondary", "t-border", "t-rounded-md", 2, "margin-top", "-160px"], [1, "t-grid", "t-grid-cols-3"], [4, "ngFor", "ngForOf"], ["class", "app-item", 3, "click", 4, "ngIf"], [1, "app-item", 3, "click"], [1, "t-h-80", "t-p-10", "t-cursor-pointer", "t-text-white/70", "hover:t-text-white", "hover:t-bg-primary", 3, "ngClass"], [1, "t-flex", "t-justify-center", "t-pb-10", "t-pt-6"], [1, "t-flex", "t-justify-center", "t-text-small", "lg:t-text-center"], [3, "type"]],
                    template: function (l, m) {
                        1 & l && (e.YNc(0, X, 1, 0, "div", 0),
                            e.YNc(1, q, 1, 0, "div", 1),
                            e.TgZ(2, "div", 2, 3)(4, "div", 4)(5, "div", 5),
                            e.YNc(6, tt, 1, 1, "img", 6),
                            e.YNc(7, et, 1, 0, "img", 7),
                            e.qZA(),
                            e.YNc(8, st, 1, 1, "img", 8),
                            e.qZA(),
                            e.TgZ(9, "ul", 9),
                            e.YNc(10, lt, 8, 9, "li", 10),
                            e.YNc(11, ht, 5, 2, "li", 11),
                            e.qZA()(),
                            e.YNc(12, ye, 1, 1, "app-loader", 12)),
                            2 & l && (e.Q6J("ngIf", m.moreListHide),
                                e.xp6(1),
                                e.Q6J("ngIf", m.toggleBtn),
                                e.xp6(1),
                                e.Q6J("ngClass", e.WLB(9, ut, m.toggleBtn, !m.toggleBtn)),
                                e.xp6(4),
                                e.Q6J("ngIf", m.schoolLogo),
                                e.xp6(1),
                                e.Q6J("ngIf", !m.schoolLogo),
                                e.xp6(1),
                                e.Q6J("ngIf", m.toggleBtn),
                                e.xp6(2),
                                e.Q6J("ngForOf", m.showList),
                                e.xp6(1),
                                e.Q6J("ngIf", !m.mobile && m.popupList.length),
                                e.xp6(1),
                                e.Q6J("ngIf", m.loader))
                    },
                    directives: [U.O5, U.mk, U.sg, Z.R],
                    styles: ["@media screen and (max-width: 768px){.ui.grid[_ngcontent-%COMP%] > .column[_ngcontent-%COMP%]:not(.row){padding-top:0;padding-bottom:0}.title[_ngcontent-%COMP%]{padding-left:10px}.ui.grid[_ngcontent-%COMP%] > .column[_ngcontent-%COMP%]:not(.row), .ui.grid[_ngcontent-%COMP%] > .row[_ngcontent-%COMP%] > .column[_ngcontent-%COMP%]{padding-left:0;padding-right:0}.not-hide[_ngcontent-%COMP%]{display:block}.sidebar[_ngcontent-%COMP%]{width:60%;display:none}.panel-item[_ngcontent-%COMP%]   .item-content[_ngcontent-%COMP%]{display:revert}i[_ngcontent-%COMP%]{cursor:pointer}.list-card[_ngcontent-%COMP%]{padding:0}.SidebarContent[_ngcontent-%COMP%]{width:100%!important}.list-styles[_ngcontent-%COMP%]   .list-header[_ngcontent-%COMP%]   .ai-logo[_ngcontent-%COMP%]{height:3.5rem}.list-styles[_ngcontent-%COMP%]   .list-header[_ngcontent-%COMP%]   .close-icon[_ngcontent-%COMP%]{cursor:pointer}}@media screen and (max-width: 1024px){.modals.dimmer[_ngcontent-%COMP%]   .ui.scrolling.modal[_ngcontent-%COMP%]{margin:0;background:#FFFFFF}.ui.fullscreen.modal[_ngcontent-%COMP%]{margin:0;position:absolute;inset:0;width:100%!important;border-radius:0}.ui.fullscreen.modal[_ngcontent-%COMP%]   .notification-modal[_ngcontent-%COMP%]{border:none}}@media only screen and (min-width: 512px) and (max-width: 768px){.sidebar[_ngcontent-%COMP%]{width:50%}.modals.dimmer[_ngcontent-%COMP%]   .ui.c.modal[_ngcontent-%COMP%]{margin:0;background:#FFFFFF}}@media only screen and (min-width: 768px) and (max-width: 1200px){.not-hide[_ngcontent-%COMP%]{display:block}.sidebar[_ngcontent-%COMP%]{width:20rem;display:none}.title[_ngcontent-%COMP%]{padding-left:10px}.icon-split[_ngcontent-%COMP%]{display:flex}.resp-modal-view[_ngcontent-%COMP%]{width:50%!important}.list-styles[_ngcontent-%COMP%]   .list-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:1rem 2rem 2rem}.list-styles[_ngcontent-%COMP%]   .list-header[_ngcontent-%COMP%]   .ai-logo[_ngcontent-%COMP%]{height:3.5rem}.list-styles[_ngcontent-%COMP%]   .list-header[_ngcontent-%COMP%]   .close-icon[_ngcontent-%COMP%]{cursor:pointer}}@media (min-width: 1200px){.close-icon[_ngcontent-%COMP%]{display:none}}[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:#111643;border-radius:10px}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:#3456FF;border-radius:9999px;width:1px}"]
                }),
                h
        }
        )();
        var gt = i(910)
            , mt = i(2069)
            , ft = i(2501)
            , vt = i(2401)
            , Ce = i(8545);
        function xe(h, P) {
            if (1 & h && e._UZ(0, "img", 12),
                2 & h) {
                const l = e.oxw(2);
                e.Q6J("src", l.schoolLogo, e.LSH)
            }
        }
        function _t(h, P) {
            1 & h && e._UZ(0, "img", 13)
        }
        function bt(h, P) {
            if (1 & h && (e.TgZ(0, "div", 9),
                e.YNc(1, xe, 1, 1, "img", 10),
                e.YNc(2, _t, 1, 0, "img", 11),
                e.qZA()),
                2 & h) {
                const l = e.oxw();
                e.xp6(1),
                    e.Q6J("ngIf", l.schoolLogo),
                    e.xp6(1),
                    e.Q6J("ngIf", !l.schoolLogo)
            }
        }
        const yt = function (h) {
            return {
                "t-py-10 lg:t-py-0": h
            }
        }
            , Ct = function (h) {
                return {
                    "t-hidden": h
                }
            };
        function Se(h, P) {
            if (1 & h) {
                const l = e.EpF();
                e.TgZ(0, "div", 14)(1, "div", 15)(2, "div", 16)(3, "app-search-bar", 17),
                    e.NdJ("emitSearch", function (_) {
                        return e.CHM(l),
                            e.oxw().listenForSearch(_)
                    }),
                    e.qZA()()()()
            }
            if (2 & h) {
                const l = e.oxw();
                e.Q6J("ngClass", e.VKq(6, yt, "/create-profile" !== l.path)),
                    e.xp6(2),
                    e.Q6J("ngClass", e.VKq(8, Ct, l.hideSearch)),
                    e.xp6(1),
                    e.Q6J("background", l.searchBg)("borderColor", l.searchBorder)("type", l.type)("width", l.width)
            }
        }
        function De(h, P) {
            if (1 & h) {
                const l = e.EpF();
                e.TgZ(0, "div", 30)(1, "img", 31),
                    e.NdJ("click", function () {
                        return e.CHM(l),
                            e.oxw(2).handleToggleBtn()
                    }),
                    e.qZA()()
            }
            if (2 & h) {
                const l = e.oxw(2);
                e.xp6(1),
                    e.Q6J("src", l.hamburger, e.LSH)
            }
        }
        function we(h, P) {
            if (1 & h && e._UZ(0, "img", 32),
                2 & h) {
                const l = e.oxw(2);
                e.Q6J("src", l.schoolLogo, e.LSH)
            }
        }
        function xt(h, P) {
            1 & h && e._UZ(0, "img", 33)
        }
        function St(h, P) {
            if (1 & h) {
                const l = e.EpF();
                e.TgZ(0, "div", 34)(1, "img", 35),
                    e.NdJ("click", function () {
                        return e.CHM(l),
                            e.oxw(2).onPushClick()
                    }),
                    e.qZA()()
            }
            if (2 & h) {
                const l = e.oxw(2);
                e.xp6(1),
                    e.Q6J("src", l.notificationIcon, e.LSH)
            }
        }
        function Dt(h, P) {
            if (1 & h && (e.TgZ(0, "span", 39),
                e._uU(1),
                e.qZA()),
                2 & h) {
                const l = e.oxw(3);
                e.xp6(1),
                    e.hij(" ", l.cartTotalItems, "")
            }
        }
        function wt(h, P) {
            if (1 & h) {
                const l = e.EpF();
                e.TgZ(0, "div", 36),
                    e.NdJ("click", function () {
                        return e.CHM(l),
                            e.oxw(2).gotoCart()
                    }),
                    e._UZ(1, "img", 37),
                    e.YNc(2, Dt, 2, 1, "span", 38),
                    e.qZA()
            }
            if (2 & h) {
                const l = e.oxw(2);
                e.xp6(1),
                    e.Q6J("src", l.cartIcon2GreyFill, e.LSH),
                    e.xp6(1),
                    e.Q6J("ngIf", l.cartTotalItems > 0)
            }
        }
        function Ot(h, P) {
            if (1 & h) {
                const l = e.EpF();
                e.TgZ(0, "div", 40),
                    e.NdJ("click", function () {
                        return e.CHM(l),
                            e.oxw(2).showprofile()
                    }),
                    e.qZA()
            }
        }
        function Pt(h, P) {
            if (1 & h) {
                const l = e.EpF();
                e.TgZ(0, "div", 48),
                    e.NdJ("click", function () {
                        return e.CHM(l),
                            e.oxw(4).navHam("profile")
                    }),
                    e._uU(1, "Profile"),
                    e.qZA()
            }
        }
        function Tt(h, P) {
            if (1 & h) {
                const l = e.EpF();
                e.TgZ(0, "div", 45),
                    e.YNc(1, Pt, 2, 0, "div", 46),
                    e.TgZ(2, "div", 47),
                    e.NdJ("click", function () {
                        return e.CHM(l),
                            e.oxw(3).logout()
                    }),
                    e._uU(3, "Logout"),
                    e.qZA()()
            }
            if (2 & h) {
                const l = e.oxw(3);
                e.xp6(1),
                    e.Q6J("ngIf", "/create-profile" !== l.path)
            }
        }
        function It(h, P) {
            if (1 & h) {
                const l = e.EpF();
                e.TgZ(0, "div", 41)(1, "div", 42)(2, "img", 43),
                    e.NdJ("click", function () {
                        return e.CHM(l),
                            e.oxw(2).showprofile()
                    }),
                    e.qZA()(),
                    e.YNc(3, Tt, 4, 1, "div", 44),
                    e.qZA()
            }
            if (2 & h) {
                const l = e.oxw(2);
                e.xp6(2),
                    e.s9C("src", l.userImage, e.LSH),
                    e.xp6(1),
                    e.Q6J("ngIf", l.showprof)
            }
        }
        function At(h, P) {
            if (1 & h) {
                const l = e.EpF();
                e.TgZ(0, "app-button", 51),
                    e.NdJ("but", function () {
                        const L = e.CHM(l).$implicit;
                        return e.oxw(3).navHam(L.type)
                    }),
                    e.qZA()
            }
            if (2 & h) {
                const l = P.$implicit;
                e.Q6J("btnProperties", l)("classNames", l.className)("fontSize", "14px")
            }
        }
        function Mt(h, P) {
            if (1 & h && (e.TgZ(0, "div", 49),
                e.YNc(1, At, 1, 3, "app-button", 50),
                e.qZA()),
                2 & h) {
                const l = e.oxw(2);
                e.xp6(1),
                    e.Q6J("ngForOf", l.publicButtons)
            }
        }
        function Et(h, P) {
            if (1 & h && (e.TgZ(0, "div")(1, "div", 18)(2, "div", 19),
                e.YNc(3, De, 2, 1, "div", 20),
                e.TgZ(4, "div", 21),
                e.YNc(5, we, 1, 1, "img", 22),
                e.YNc(6, xt, 1, 0, "img", 23),
                e.qZA()(),
                e.TgZ(7, "div", 24)(8, "div")(9, "div"),
                e.YNc(10, St, 2, 1, "div", 25),
                e.qZA()(),
                e.TgZ(11, "div"),
                e.YNc(12, wt, 3, 2, "div", 26),
                e.qZA(),
                e.YNc(13, Ot, 1, 0, "div", 27),
                e.YNc(14, It, 4, 2, "div", 28),
                e.qZA(),
                e.YNc(15, Mt, 2, 1, "ng-template", null, 29, e.W1O),
                e.qZA()()),
                2 & h) {
                const l = e.MAs(16)
                    , m = e.oxw();
                e.xp6(3),
                    e.Q6J("ngIf", "/create-profile" !== m.path && m.isLog),
                    e.xp6(2),
                    e.Q6J("ngIf", m.schoolLogo),
                    e.xp6(1),
                    e.Q6J("ngIf", !m.schoolLogo),
                    e.xp6(4),
                    e.Q6J("ngIf", "/create-profile" !== m.path),
                    e.xp6(2),
                    e.Q6J("ngIf", "/create-profile" !== m.path),
                    e.xp6(1),
                    e.Q6J("ngIf", m.showprof),
                    e.xp6(1),
                    e.Q6J("ngIf", m.isLog)("ngIfElse", l)
            }
        }
        function Lt(h, P) {
            if (1 & h) {
                const l = e.EpF();
                e.TgZ(0, "div", 59)(1, "div")(2, "div", 34)(3, "img", 60),
                    e.NdJ("click", function () {
                        return e.CHM(l),
                            e.oxw(2).onPushClick()
                    }),
                    e.qZA()()()()
            }
            if (2 & h) {
                const l = e.oxw(2);
                e.xp6(3),
                    e.Q6J("src", l.notificationIcon, e.LSH)
            }
        }
        function Nt(h, P) {
            if (1 & h && (e.TgZ(0, "span", 64),
                e._uU(1),
                e.qZA()),
                2 & h) {
                const l = e.oxw(3);
                e.xp6(1),
                    e.hij(" ", l.cartTotalItems, "")
            }
        }
        function Rt(h, P) {
            if (1 & h) {
                const l = e.EpF();
                e.TgZ(0, "div", 61)(1, "div", 36),
                    e.NdJ("click", function () {
                        return e.CHM(l),
                            e.oxw(2).gotoCart()
                    }),
                    e._UZ(2, "img", 62),
                    e.YNc(3, Nt, 2, 1, "span", 63),
                    e.qZA()()
            }
            if (2 & h) {
                const l = e.oxw(2);
                e.xp6(2),
                    e.Q6J("src", l.cartIcon2GreyFill, e.LSH),
                    e.xp6(1),
                    e.Q6J("ngIf", l.cartTotalItems > 0)
            }
        }
        function Ft(h, P) {
            if (1 & h && (e.TgZ(0, "div", 65)(1, "div", 66),
                e._UZ(2, "img", 67),
                e.qZA()()),
                2 & h) {
                const l = e.oxw(2);
                e.xp6(2),
                    e.s9C("src", l.userImage, e.LSH)
            }
        }
        function $t(h, P) {
            if (1 & h) {
                const l = e.EpF();
                e.TgZ(0, "div", 40),
                    e.NdJ("click", function () {
                        return e.CHM(l),
                            e.oxw(2).showprofile()
                    }),
                    e.qZA()
            }
        }
        function Ut(h, P) {
            if (1 & h) {
                const l = e.EpF();
                e.TgZ(0, "div", 48),
                    e.NdJ("click", function () {
                        e.CHM(l);
                        const _ = e.oxw(4);
                        return _.navHam("profile"),
                            _.showprof = !_.showprof
                    }),
                    e._uU(1, "Profile"),
                    e.qZA()
            }
        }
        function Bt(h, P) {
            if (1 & h) {
                const l = e.EpF();
                e.TgZ(0, "div", 73)(1, "div", 74),
                    e.YNc(2, Ut, 2, 0, "div", 46),
                    e.TgZ(3, "div", 75),
                    e.NdJ("click", function () {
                        e.CHM(l);
                        const _ = e.oxw(3);
                        return _.logout(),
                            _.showprof = !_.showprof
                    }),
                    e._uU(4, "Logout"),
                    e.qZA()()()
            }
            if (2 & h) {
                const l = e.oxw(3);
                e.xp6(2),
                    e.Q6J("ngIf", "/create-profile" !== l.path)
            }
        }
        function Gt(h, P) {
            if (1 & h) {
                const l = e.EpF();
                e.TgZ(0, "div", 68),
                    e.NdJ("click", function () {
                        return e.CHM(l),
                            e.oxw(2).showprofile()
                    }),
                    e.TgZ(1, "button", 69),
                    e._uU(2),
                    e.qZA(),
                    e.TgZ(3, "div", 70),
                    e._UZ(4, "img", 71),
                    e.qZA(),
                    e.YNc(5, Bt, 5, 1, "div", 72),
                    e.qZA()
            }
            if (2 & h) {
                const l = e.oxw(2);
                e.xp6(2),
                    e.hij(" ", l.userName, " "),
                    e.xp6(2),
                    e.s9C("src", l.arrowDownIcon, e.LSH),
                    e.xp6(1),
                    e.Q6J("ngIf", l.showprof)
            }
        }
        function kt(h, P) {
            if (1 & h) {
                const l = e.EpF();
                e.TgZ(0, "app-button", 51),
                    e.NdJ("but", function () {
                        const L = e.CHM(l).$implicit;
                        return e.oxw(3).navHam(L.type)
                    }),
                    e.qZA()
            }
            if (2 & h) {
                const l = P.$implicit;
                e.Q6J("btnProperties", l)("classNames", l.className)("fontSize", "14px")
            }
        }
        function jt(h, P) {
            if (1 & h && (e.TgZ(0, "div", 49),
                e.YNc(1, kt, 1, 3, "app-button", 50),
                e.qZA()),
                2 & h) {
                const l = e.oxw(2);
                e.xp6(1),
                    e.Q6J("ngForOf", l.publicButtons)
            }
        }
        function Jt(h, P) {
            if (1 & h && (e.TgZ(0, "div", 52)(1, "div", 53),
                e.YNc(2, Lt, 4, 1, "div", 54),
                e.YNc(3, Rt, 4, 2, "div", 55),
                e.TgZ(4, "div", 56),
                e.YNc(5, Ft, 3, 1, "div", 57),
                e.YNc(6, $t, 1, 0, "div", 27),
                e.YNc(7, Gt, 6, 3, "div", 58),
                e.qZA()(),
                e.YNc(8, jt, 2, 1, "ng-template", null, 29, e.W1O),
                e.qZA()),
                2 & h) {
                const l = e.MAs(9)
                    , m = e.oxw();
                e.xp6(2),
                    e.Q6J("ngIf", "/create-profile" !== m.path),
                    e.xp6(1),
                    e.Q6J("ngIf", "/create-profile" !== m.path),
                    e.xp6(2),
                    e.Q6J("ngIf", m.isLog)("ngIfElse", l),
                    e.xp6(1),
                    e.Q6J("ngIf", m.showprof),
                    e.xp6(1),
                    e.Q6J("ngIf", m.isLog)
            }
        }
        function Yt(h, P) {
            1 & h && (e.TgZ(0, "div", 80)(1, "div", 81),
                e._uU(2, "1. Click on the lock icon in the address bar above"),
                e.qZA(),
                e.TgZ(3, "div", 81),
                e._uU(4, "2. Locate the Notification setting"),
                e.qZA(),
                e.TgZ(5, "div", 81),
                e._uU(6, "3. Change it to 'Ask'"),
                e.qZA()())
        }
        function Ht(h, P) {
            if (1 & h && (e.TgZ(0, "div", 80),
                e._uU(1),
                e.qZA()),
                2 & h) {
                const l = e.oxw(3);
                e.xp6(1),
                    e.hij(" ", l.pushDialog.pushText, " ")
            }
        }
        const Kt = function (h) {
            return {
                "t-rounded-t-2xl t-shadow-[0_-3px_11px_rgba(0,_0,_0,_0.05)] sm:t-rounded-none ": h
            }
        };
        function Wt(h, P) {
            if (1 & h) {
                const l = e.EpF();
                e.TgZ(0, "div", 82)(1, "div")(2, "app-button", 83),
                    e.NdJ("but", function () {
                        return e.CHM(l),
                            e.oxw(3).dialogClose(null)
                    }),
                    e.qZA()(),
                    e.TgZ(3, "div", 84)(4, "app-button", 85),
                    e.NdJ("but", function () {
                        return e.CHM(l),
                            e.oxw(3).submitDialog("push", null)
                    }),
                    e.qZA()()()
            }
            if (2 & h) {
                const l = e.oxw(3);
                e.Q6J("ngClass", e.VKq(10, Kt, l.showLine)),
                    e.xp6(2),
                    e.Q6J("btnProperties", l.pushDialog.btn1)("background", "var(--three)")("fontSize", "14px")("classNames", "btn-styles outlined-btn-color  allow-width")("id", l.pushDoLater),
                    e.xp6(2),
                    e.Q6J("classNames", "btn-styles primary-btn-color allow-width")("btnProperties", l.pushDialog.btn2)("fontSize", "14px")("id", l.pushAllow)
            }
        }
        function zt(h, P) {
            if (1 & h && (e.TgZ(0, "div")(1, "div", 77),
                e.YNc(2, Yt, 7, 0, "div", 78),
                e.YNc(3, Ht, 2, 1, "div", 78),
                e.YNc(4, Wt, 5, 12, "div", 79),
                e.qZA()()),
                2 & h) {
                const l = e.oxw(2);
                e.xp6(2),
                    e.Q6J("ngIf", "pushBlocked" === l.dialogContentData),
                    e.xp6(1),
                    e.Q6J("ngIf", "push" === l.dialogContentData),
                    e.xp6(1),
                    e.Q6J("ngIf", "push" === l.dialogContentData)
            }
        }
        function Zt(h, P) {
            if (1 & h) {
                const l = e.EpF();
                e.TgZ(0, "app-dialog-sidebar", 76),
                    e.NdJ("visibleChange", function (_) {
                        return e.CHM(l),
                            e.oxw().dialogVisible = _
                    })("submitDialog", function (_) {
                        e.CHM(l);
                        const L = e.oxw();
                        return L.submitDialog(L.dialogContentData, _)
                    })("visibleChange", function (_) {
                        return e.CHM(l),
                            e.oxw().dialogClose(_)
                    }),
                    e.YNc(1, zt, 5, 3, "div", 5),
                    e.qZA()
            }
            if (2 & h) {
                const l = e.oxw();
                e.Q6J("visible", l.dialogVisible)("contentData", l.dialogContentData)("header", l.dialogHeader)("screenSize", l.screenSize),
                    e.xp6(1),
                    e.Q6J("ngIf", "push" === l.dialogContentData || "pushBlocked" === l.dialogContentData)
            }
        }
        function Qt(h, P) {
            if (1 & h) {
                const l = e.EpF();
                e.TgZ(0, "app-dialog-sidebar", 86)(1, "div")(2, "span", 87),
                    e._uU(3, "You have already logged in to another device!! Please logout or exit from another device and retry after 5 minutes."),
                    e.qZA()(),
                    e.TgZ(4, "div", 88)(5, "app-button", 89),
                    e.NdJ("but", function () {
                        return e.CHM(l),
                            e.oxw().confiormLogedOff()
                    }),
                    e.qZA()()()
            }
            if (2 & h) {
                const l = e.oxw();
                e.Q6J("visible", l.visible)("header", "Already Logged in")("isClose", !1),
                    e.xp6(5),
                    e.Q6J("classNames", "btn-styles primary-btn-color")("btnProperties", l.okButton)
            }
        }
        const Vt = function (h, P) {
            return {
                "t-shadow-[0_8px_24px_0_#0000000A]": h,
                "!t-py-0": P
            }
        };
        let Xt = (() => {
            class h {
                constructor(l, m, _, L, k, j, z, Y, J) {
                    this.elementRef = l,
                        this.chatService = m,
                        this.router = _,
                        this.globalService = L,
                        this.testService = k,
                        this.loginservice = j,
                        this.cartservice = z,
                        this.serv = Y,
                        this.driveService = J,
                        this.toggleBtn = new e.vpe,
                        this.cart = new e.vpe,
                        this.userData = JSON.parse(localStorage.getItem("token")),
                        this.sclMD = {},
                        this.cartTotalItems = 0,
                        this.currentNav = "",
                        this.emptyProfile = b.ezd,
                        this.notificationArray = [],
                        this.dialogVisible = !1,
                        this.pushDialog = {},
                        this.notificationPermission = !1,
                        this.headerbg = b.nm4,
                        this.showBg = !1,
                        this.type = "header",
                        this.searchBg = "accent3",
                        this.searchBorder = "neutral2",
                        this.headerPlaceholder = b.cvn,
                        this.notificationIcon = b.UFu,
                        this.searchIcon = b.RL9,
                        this.hamburger = b.M0o,
                        this.neoLogo = b.UfT,
                        this.cartIcon2GreyFill = b.NQL,
                        this.backArrowImg = b.CYc,
                        this.mobile = !1,
                        this.showprof = !1,
                        this.arrowDownIcon = b.MWc,
                        this.showSearch = !0,
                        this.visible = !1,
                        this.confirmFlag = !1,
                        this.ngStyleClass = {
                            width: "500px"
                        },
                        this.screenSize = "560",
                        this.okButton = {
                            btnName: "Ok",
                            id: "logOffID",
                            width: "140px"
                        },
                        this.isLog = this.isLogged(),
                        this.serv.noRedirect.subscribe(H => {
                            this.noRedirect = !!(localStorage.getItem("noRedirect") || localStorage.getItem("redirect") || H && H.status)
                        }
                        ),
                        localStorage.getItem("token") && (localStorage.removeItem("cart"),
                            this.cartTotalItems = 0,
                            this.cartservice.getUserCartList(this.userData),
                            this.materialDailogData = "Refersh"),
                        this.globalService.triggerMethod$.subscribe(() => {
                            this.handleimageTrigger()
                        }
                        )
                }
                onPageClick(l) {
                    this.elementRef.nativeElement.contains(l) || this.showprof && (this.showprof = !this.showprof)
                }
                getScreenSize() {
                    this.screenWidth = window.innerWidth,
                        this.setSize()
                }
                handleimageTrigger() {
                    let l = [];
                    setTimeout(() => {
                        l = JSON.parse(localStorage.getItem("token")),
                            l && l.name && (this.userName = l.name.split("$"),
                                this.userName = this.userName.length ? this.userName[0] : this.userName),
                            this.userImage = b.ezd;
                        const m = document.querySelector("#userProfileImg");
                        this.userImage = m && m.src ? m.src : l.profile_pic
                    }
                        , 1e3)
                }
                setSize() {
                    this.screenWidth >= 1600 ? this.width = "650px" : this.screenWidth >= 1024 ? (this.width = "400px",
                        this.mobile = !1,
                        this.showBg = !1) : (this.width = "93vw",
                            this.mobile = !0,
                            this.showBg = !0)
                }
                readPath() {
                    this.path = window.location.pathname,
                        this.showSearch = !("/create-profile" === this.path || "/chat" === this.path && this.mobile)
                }
                ngOnInit() {
                    return (0,
                        A.mG)(this, void 0, void 0, function* () {
                            this.screenWidth = window.innerWidth,
                                this.setSize(),
                                this.readPath(),
                                this.screenWidth = document.documentElement.clientWidth,
                                this.setSize(),
                                this.isLog || this.loadPublicButtons(),
                                this.localSchoolData = JSON.parse(localStorage.getItem("school_details")),
                                this.localSchoolData && this.localSchoolData.schools_metadata && (this.sclMD = this.localSchoolData.schools_metadata),
                                this.globalService.search.subscribe(m => {
                                    var _;
                                    this.searchTerm = null !== (_ = m.value) && void 0 !== _ ? _ : ""
                                }
                                ),
                                this.globalService.cartTotalItems.subscribe(m => {
                                    this.cartTotalItems = m
                                }
                                ),
                                this.globalService.logoutTrigger.subscribe(m => {
                                    this.cartTotalItems = 0
                                }
                                );
                            const l = JSON.parse(localStorage.getItem("cart"));
                            l && (this.cartTotalItems = l.length),
                                this.globalService.confirmFlag.subscribe(m => {
                                    m && (this.visible = !0,
                                        this.confirmFlag = !0)
                                }
                                )
                        })
                }
                ngOnChanges() {
                    this.readPath()
                }
                ngAfterViewInit() {
                    this.localSchoolData = JSON.parse(localStorage.getItem("school_details")),
                        this.localSchoolData && this.localSchoolData.school_logo && (this.schoolLogo = this.localSchoolData.school_logo)
                }
                showprofile() {
                    this.showprof = !this.showprof
                }
                handleToggleBtn() {
                    this.hambuergerToggle = !this.hambuergerToggle,
                        this.toggleBtn.emit(this.hambuergerToggle)
                }
                getRandomColor() {
                    return "#" + ("000000" + Math.floor(16777216 * Math.random()).toString(16)).slice(-6)
                }
                isLogged() {
                    const l = JSON.parse(this.loginservice.loginStatus())
                        , m = JSON.parse(localStorage.getItem("basicFiels"));
                    let _ = !1;
                    return m && m.length && m.forEach(L => {
                        L && "Profile Picture" === L.label && (_ = !!L.hide)
                    }
                    ),
                        !!l && (this.userName = l.name ? l.name.split("$")[0] : "",
                            this.userName || (this.userName = l.email),
                            l.profile_pic && _ && (this.userImage = this.globalService.changeS3bucket(l.profile_pic, this.globalService.assets_bucket)),
                            this.userImage || (this.userImage = b.ezd),
                            !0)
                }
                dialogClose(l) {
                    this.dialogVisible = !1,
                        this.dialogHeader = void 0,
                        this.dialogContentData = void 0
                }
                submitDialog(l) {
                    "push" === this.dialogContentData && this.openNotificationPermission()
                }
                openNotificationPermission() {
                    return (0,
                        A.mG)(this, void 0, void 0, function* () {
                            const l = JSON.parse(localStorage.getItem("token"))
                                , _ = (yield this.testService.getFirebase()).messaging();
                            this.dialogClose(null),
                                this.localSchoolData.push_enabled && ("denied" === Notification.permission ? (this.dialogVisible = !0,
                                    this.dialogContentData = "pushBlocked",
                                    this.dialogHeader = "Instruction") : _.requestPermission().then(() => {
                                        _.getToken().then(L => {
                                            L && (this.globalService.sendPushToken({
                                                school_id: l.school_id,
                                                user_id: l.user_id,
                                                token: L
                                            }).subscribe(j => { }
                                            ),
                                                this.notificationPermission = !0)
                                        }
                                        ).catch(function (L) { })
                                    }
                                    ).catch(function (L) { }))
                        })
                }
                onPushClick() {
                    this.dialogVisible = !0,
                        this.dialogContentData = "push",
                        this.dialogHeader = "Push notification",
                        this.pushDialog.pushText = window.location.hostname.split("/")[0] + " wants to start sending you push notifications. Click allow to subscribe",
                        this.pushDialog.btn1 = {
                            btnName: "I'll do this later",
                            background: "var(--three)",
                            fontColor: "var(--seven)",
                            border: "1px solid var(--seven)"
                        },
                        this.pushDialog.btn2 = {
                            btnName: "Allow"
                        },
                        this.dialogheaderStyle = {
                            "border-bottom": "2px solid var(--ten)"
                        }
                }
                logout() {
                    const l = {};
                    if (this.userData && this.userData.user_id && (l.user_id = this.userData.user_id,
                        l.school_id = this.userData.school_id,
                        l.user_role = "student",
                        l.email = this.userData.email),
                        navigator.userAgent.includes("SEB")) {
                        const m = document.createElement("a");
                        document.body.appendChild(m),
                            m.target = "_blank",
                            m.href = window.location.origin + "/logout",
                            m.click(),
                            document.body.removeChild(m)
                    } else
                        this.loginservice.logout(l).subscribe(m => {
                            if (this.isLog = !1,
                                this.globalService.clearLocalStorage(),
                                this.serv.noRedirect.next({
                                    status: !1
                                }),
                                this.testService.removeCopyPasteHandler(),
                                this.sclMD && this.sclMD.redirection_url) {
                                this.redirection_url = this.sclMD.redirection_url.includes("http://") || this.sclMD.redirection_url.includes("https://") ? this.sclMD.redirection_url : "https://" + this.sclMD.redirection_url;
                                const _ = document.createElement("a");
                                document.body.appendChild(_),
                                    _.href = this.redirection_url,
                                    _.click(),
                                    document.body.removeChild(_)
                            } else {
                                const _ = this.globalService.publicNavigation(this.sclMD, this.userData.enable_features);
                                this.router.navigateByUrl(_)
                            }
                            this.isLog || this.loadPublicButtons()
                        }
                        )
                }
                navHam(l) {
                    this.noRedirect || (this.globalService.search.next({
                        path: "/" + l,
                        value: ""
                    }),
                        "profile" === l ? (this.currentNav = "profile",
                            this.router.navigateByUrl("/profile")) : "signup" === l ? this.router.navigateByUrl("/signup") : "login" === l && this.router.navigateByUrl("/login"))
                }
                listenForSearch(l) {
                    this.globalService.search.next({
                        path: window.location.pathname,
                        value: l.target.value,
                        search: l.target.value,
                        chips: ""
                    })
                }
                loadPublicButtons() {
                    const l = [{
                        multipleBtn: !1,
                        btnName: "Sign In",
                        className: "btn-styles outlined-btn-color",
                        type: "login"
                    }, {
                        multipleBtn: !1,
                        btnName: "Sign Up",
                        className: "btn-styles primary-btn-color",
                        marginleft: "10px",
                        type: "signup"
                    }];
                    this.globalService.isSignup.subscribe(m => {
                        this.publicButtons = m ? l : l.slice(0, 1)
                    }
                    )
                }
                gotoCart() {
                    this.router.navigateByUrl("/cart"),
                        this.cart.emit(event)
                }
                confiormLogedOff() {
                    this.globalService.confirmFlagLogOff.next(!0)
                }
            }
            return h.\u0275fac = function (l) {
                return new (l || h)(e.Y36(e.SBq), e.Y36(F.a), e.Y36(D.F0), e.Y36(N.U), e.Y36(T.q), e.Y36(M.r), e.Y36(gt.N), e.Y36(S.H), e.Y36(K.w))
            }
                ,
                h.\u0275cmp = e.Xpm({
                    type: h,
                    selectors: [["app-header"]],
                    hostBindings: function (l, m) {
                        1 & l && e.NdJ("click", function (L) {
                            return m.onPageClick(L.target)
                        }, !1, e.evT)("resize", function (L) {
                            return m.getScreenSize(L)
                        }, !1, e.Jf7)
                    },
                    inputs: {
                        hambuergerToggle: "hambuergerToggle",
                        shadow: "shadow",
                        hideSearch: "hideSearch",
                        path: "path"
                    },
                    outputs: {
                        toggleBtn: "toggleBtn",
                        cart: "cart"
                    },
                    features: [e.TTD],
                    decls: 9,
                    vars: 11,
                    consts: [[3, "data", "dataChange"], ["aria-labelledby", "header-whole-div", 1, "t-border", "t-rounded-b-lg", "t-relative", "t-top-48", "lg:t-rounded-none", "t-flex", "t-justify-center", "t-w-full", "t-py-10", "lg:t-py-0", "lg:t-px-0", "t-bg-white", "lg:t-top-0", "lg:t-h-75", "lg:t-items-center", "t-z-0", 3, "ngClass"], ["class", "t-pl-32", 4, "ngIf"], ["aria-labelledby", "search-box-header", "class", "lg:t-h-48 lg:t-items-center lg:t-ml-32", 3, "ngClass", 4, "ngIf"], [1, "t-flex", "lg:t-justify-end", "lg:t-w-full"], [4, "ngIf"], ["class", "t-pr-40", 4, "ngIf"], [3, "visible", "contentData", "header", "screenSize", "visibleChange", "submitDialog", 4, "ngIf"], [3, "visible", "header", "isClose", 4, "ngIf"], [1, "t-pl-32"], ["class", "t-justify-center t-object-contain t-h-40", 3, "src", 4, "ngIf"], ["src", "./assets/favicons/192.png", "class", "t-justify-center t-object-contain t-h-40", 4, "ngIf"], [1, "t-justify-center", "t-object-contain", "t-h-40", 3, "src"], ["src", "./assets/favicons/192.png", 1, "t-justify-center", "t-object-contain", "t-h-40"], ["aria-labelledby", "search-box-header", 1, "lg:t-h-48", "lg:t-items-center", "lg:t-ml-32", 3, "ngClass"], [1, "t-w-full"], [1, "t-relative", "t-top-0", 3, "ngClass"], ["radius", "2px", "height", "2.875rem", 3, "background", "borderColor", "type", "width", "emitSearch"], ["aria-labelledby", "mobile-top-header", 1, "t-flex", "t-fixed", "t-inset-x-0", "t-top-0", "t-px-14", "t-h-48", "t-items-center", "t-bg-white"], [1, "t-flex", "t-gap-10"], ["class", "t-flex t-items-center", 4, "ngIf"], ["aria-labelledby", "company-logo", 1, "t-flex", "t-items-center"], ["alt", "", "class", "t-justify-center t-object-contain t-h-32 t-max-w-[20vw]", 3, "src", 4, "ngIf"], ["src", "./assets/favicons/192.png", "alt", "", "class", "t-justify-center t-object-contain t-h-32 t-max-w-[20vw]", 4, "ngIf"], [1, "t-flex", "t-justify-end", "t-gap-16", "t-flex-1", "t-items-center", "t-pl-16"], ["aria-labelledby", "notification-icon", 4, "ngIf"], [3, "click", 4, "ngIf"], ["class", "t-absolute t-inset-0 t-w-full  t-transition-shadow t-z-[1]", 3, "click", 4, "ngIf"], ["class", "t-rounded-full", 4, "ngIf", "ngIfElse"], ["publicVisible", ""], [1, "t-flex", "t-items-center"], ["alt", "hamburger", 1, "t-w-20", "t-h-20", 3, "src", "click"], ["alt", "", 1, "t-justify-center", "t-object-contain", "t-h-32", "t-max-w-[20vw]", 3, "src"], ["src", "./assets/favicons/192.png", "alt", "", 1, "t-justify-center", "t-object-contain", "t-h-32", "t-max-w-[20vw]"], ["aria-labelledby", "notification-icon"], ["alt", "notificationIcon", 1, "t-w-18", "t-h-18", 3, "src", "click"], [3, "click"], ["alt", "cartIcon2GreyFill", 1, "t-w-18", "t-h-18", 3, "src"], ["class", "t-absolute t-top-28 t-ml-18 t-text-[8px] t-bg-error t-font-bold t-rounded-[50%] t-w-10 t-p-6 t-justify-center t-flex t-items-center t-h-10 t-text-accent-3", 4, "ngIf"], [1, "t-absolute", "t-top-28", "t-ml-18", "t-text-[8px]", "t-bg-error", "t-font-bold", "t-rounded-[50%]", "t-w-10", "t-p-6", "t-justify-center", "t-flex", "t-items-center", "t-h-10", "t-text-accent-3"], [1, "t-absolute", "t-inset-0", "t-w-full", "t-transition-shadow", "t-z-[1]", 3, "click"], [1, "t-rounded-full"], ["aria-labelledby", "user-image", 1, "t-w-26", "t-h-26", "t-flex", "t-items-center", "t-justify-center", "t-bg-accent-3", "t-rounded-full"], ["alt", "profile", 1, "t-w-22", "t-h-22", "t-rounded-full", 3, "src", "click"], ["aria-labelledby", "navbar-icon", "class", "t-absolute t-top-60 t-text-medium t-right-10 t-shadow-lg t-w-80 t-bg-accent-3 t-border t-rounded-md t-cursor-pointer t-z-50", 4, "ngIf"], ["aria-labelledby", "navbar-icon", 1, "t-absolute", "t-top-60", "t-text-medium", "t-right-10", "t-shadow-lg", "t-w-80", "t-bg-accent-3", "t-border", "t-rounded-md", "t-cursor-pointer", "t-z-50"], ["class", "t-px-10 t-py-14 t-border t-rounded-t-md hover:t-bg-primary hover:t-text-white", 3, "click", 4, "ngIf"], [1, "t-px-10", "t-py-14", "t-border", "t-rounded-b-md", "hover:t-bg-primary", "hover:t-text-white", 3, "click"], [1, "t-px-10", "t-py-14", "t-border", "t-rounded-t-md", "hover:t-bg-primary", "hover:t-text-white", 3, "click"], [1, "t-pl-10", "t-flex"], [3, "btnProperties", "classNames", "fontSize", "but", 4, "ngFor", "ngForOf"], [3, "btnProperties", "classNames", "fontSize", "but"], [1, "t-pr-40"], [1, "t-items-center", "t-gap-30", "t-flex"], ["class", "t-pt-4 t-cursor-pointer", 4, "ngIf"], ["class", "t-cursor-pointer", 4, "ngIf"], [1, "t-flex"], ["class", "t-rounded-full", "aria-", "", 4, "ngIf", "ngIfElse"], ["class", "t-pl-8 t-flex t-items-center", 3, "click", 4, "ngIf"], [1, "t-pt-4", "t-cursor-pointer"], ["alt", "", 1, "header-icons", 3, "src", "click"], [1, "t-cursor-pointer"], ["alt", "cartIcon2GreyFill", 1, "header-icons", 3, "src"], ["class", "t-absolute t-top-40 t-ml-24 t-text-[8px] t-bg-error t-font-bold t-rounded-[50%] t-w-10 t-p-6 t-justify-center t-flex t-items-center t-h-10 t-text-accent-3", 4, "ngIf"], [1, "t-absolute", "t-top-40", "t-ml-24", "t-text-[8px]", "t-bg-error", "t-font-bold", "t-rounded-[50%]", "t-w-10", "t-p-6", "t-justify-center", "t-flex", "t-items-center", "t-h-10", "t-text-accent-3"], ["aria-", "", 1, "t-rounded-full"], ["aria-labelledby", "user-image", 1, "t-rounded-full", "t-bg-accent-3", "t-w-40", "t-h-40", "t-flex", "t-items-center", "t-justify-center"], ["alt", "", 1, "t-h-32", "t-w-32", "t-rounded-full", 3, "src"], [1, "t-pl-8", "t-flex", "t-items-center", 3, "click"], ["tabindex", "0", "type", "button", "id", "profile-button", "aria-haspopup", "true", 1, "dropdown-toggle", "profile-container"], [1, "t-pl-10", "t-cursor-pointer"], ["alt", "down-arrow", 3, "src"], ["class", "t-absolute t-cursor-pointer t-right-24 t-top-56 t-w-100 t-flex t-justify-center t-border t-rounded-md t-bg-accent-3 t-z-50", 4, "ngIf"], [1, "t-absolute", "t-cursor-pointer", "t-right-24", "t-top-56", "t-w-100", "t-flex", "t-justify-center", "t-border", "t-rounded-md", "t-bg-accent-3", "t-z-50"], [1, "t-text-medium", "t-w-full", "t-rounded-md", "t-border-accent-3", "t-border", "t-shadow-md"], [1, "t-px-10", "t-py-14", "t-rounded-b-md", "hover:t-bg-primary", "hover:t-text-white", 3, "click"], [3, "visible", "contentData", "header", "screenSize", "visibleChange", "submitDialog"], [1, "accSet"], ["class", "t-px-16 lg:t-px-30 t-w-full t-pt-26 lg:t-pt-15 t-pb-15 lg:t-pb-15", 4, "ngIf"], ["class", "t-mx-auto sm:t-mx-0 t-flex t-justify-center t-gap-10 sm:t-justify-end t-max-w-[320px] sm:t-max-w-none t-pt-16 t-pb-32 sm:t-py-20 sm:t-px-16 lg:t-px-30", 3, "ngClass", 4, "ngIf"], [1, "t-px-16", "lg:t-px-30", "t-w-full", "t-pt-26", "lg:t-pt-15", "t-pb-15", "lg:t-pb-15"], [1, "t-mb-8", "xs:t-mb-5"], [1, "t-mx-auto", "sm:t-mx-0", "t-flex", "t-justify-center", "t-gap-10", "sm:t-justify-end", "t-max-w-[320px]", "sm:t-max-w-none", "t-pt-16", "t-pb-32", "sm:t-py-20", "sm:t-px-16", "lg:t-px-30", 3, "ngClass"], [3, "btnProperties", "background", "fontSize", "classNames", "id", "but"], [1, "dialog-allow"], [3, "classNames", "btnProperties", "fontSize", "id", "but"], [3, "visible", "header", "isClose"], [1, "t-text-neutral-1", "t-text-medium", "lg:t-text-big", "t-font-medium", "t-flex", "t-justify-center", "t-align-middle", "t-p-30"], [1, "t-pt-16", "t-pb-32", "t-flex", "t-justify-center", "t-gap-20", "sm:t-py-20", "sm:t-px-16", "lg:t-px-30", "sm:t-justify-end"], [3, "classNames", "btnProperties", "but"]],
                    template: function (l, m) {
                        1 & l && (e.TgZ(0, "app-banner", 0),
                            e.NdJ("dataChange", function (L) {
                                return m.materialDailogData = L
                            }),
                            e.qZA(),
                            e.TgZ(1, "div", 1),
                            e.YNc(2, bt, 3, 2, "div", 2),
                            e.YNc(3, Se, 4, 10, "div", 3),
                            e.TgZ(4, "div", 4),
                            e.YNc(5, Et, 17, 8, "div", 5),
                            e.YNc(6, Jt, 10, 6, "div", 6),
                            e.qZA()(),
                            e.YNc(7, Zt, 2, 5, "app-dialog-sidebar", 7),
                            e.YNc(8, Qt, 6, 5, "app-dialog-sidebar", 8)),
                            2 & l && (e.Q6J("data", m.materialDailogData),
                                e.xp6(1),
                                e.Q6J("ngClass", e.WLB(8, Vt, m.shadow, "/create-profile" === m.path || "/chat" === m.path)),
                                e.xp6(1),
                                e.Q6J("ngIf", !m.showSearch && !m.mobile || ("/course/product" === m.path || "/course" === m.path) && !m.isLog && !m.mobile),
                                e.xp6(1),
                                e.Q6J("ngIf", m.showSearch),
                                e.xp6(2),
                                e.Q6J("ngIf", m.mobile),
                                e.xp6(1),
                                e.Q6J("ngIf", !m.mobile),
                                e.xp6(1),
                                e.Q6J("ngIf", m.dialogVisible && !m.notificationPermission && !m.confirmFlag),
                                e.xp6(1),
                                e.Q6J("ngIf", m.confirmFlag))
                    },
                    directives: [mt.S, U.mk, U.O5, ft.N, U.sg, vt.r, Ce.c],
                    styles: ["@media screen and (max-width: 768px){.ui.grid[_ngcontent-%COMP%] > .column[_ngcontent-%COMP%]:not(.row){padding-top:0;padding-bottom:0}.title[_ngcontent-%COMP%]{padding-left:10px}.ui.grid[_ngcontent-%COMP%] > .column[_ngcontent-%COMP%]:not(.row), .ui.grid[_ngcontent-%COMP%] > .row[_ngcontent-%COMP%] > .column[_ngcontent-%COMP%]{padding-left:0;padding-right:0}.not-hide[_ngcontent-%COMP%]{display:block}.sidebar[_ngcontent-%COMP%]{width:60%;display:none}.panel-item[_ngcontent-%COMP%]   .item-content[_ngcontent-%COMP%]{display:revert}i[_ngcontent-%COMP%]{cursor:pointer}.list-card[_ngcontent-%COMP%]{padding:0}.SidebarContent[_ngcontent-%COMP%]{width:100%!important}.list-styles[_ngcontent-%COMP%]   .list-header[_ngcontent-%COMP%]   .ai-logo[_ngcontent-%COMP%]{height:3.5rem}.list-styles[_ngcontent-%COMP%]   .list-header[_ngcontent-%COMP%]   .close-icon[_ngcontent-%COMP%]{cursor:pointer}}@media screen and (max-width: 1024px){.modals.dimmer[_ngcontent-%COMP%]   .ui.scrolling.modal[_ngcontent-%COMP%]{margin:0;background:#FFFFFF}.ui.fullscreen.modal[_ngcontent-%COMP%]{margin:0;position:absolute;inset:0;width:100%!important;border-radius:0}.ui.fullscreen.modal[_ngcontent-%COMP%]   .notification-modal[_ngcontent-%COMP%]{border:none}}@media only screen and (min-width: 512px) and (max-width: 768px){.sidebar[_ngcontent-%COMP%]{width:50%}.modals.dimmer[_ngcontent-%COMP%]   .ui.c.modal[_ngcontent-%COMP%]{margin:0;background:#FFFFFF}}@media only screen and (min-width: 768px) and (max-width: 1200px){.not-hide[_ngcontent-%COMP%]{display:block}.sidebar[_ngcontent-%COMP%]{width:20rem;display:none}.title[_ngcontent-%COMP%]{padding-left:10px}.icon-split[_ngcontent-%COMP%]{display:flex}.resp-modal-view[_ngcontent-%COMP%]{width:50%!important}.list-styles[_ngcontent-%COMP%]   .list-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:1rem 2rem 2rem}.list-styles[_ngcontent-%COMP%]   .list-header[_ngcontent-%COMP%]   .ai-logo[_ngcontent-%COMP%]{height:3.5rem}.list-styles[_ngcontent-%COMP%]   .list-header[_ngcontent-%COMP%]   .close-icon[_ngcontent-%COMP%]{cursor:pointer}}@media (min-width: 1200px){.close-icon[_ngcontent-%COMP%]{display:none}}.dialog-overlay[_ngcontent-%COMP%]{position:fixed;inset:0;background-color:#00000080;z-index:999;transition:all .5s}.dialog-container[_ngcontent-%COMP%]{z-index:1000;position:fixed;right:0;left:0;top:39%;margin:0 auto;min-height:167px;width:90%;max-width:632px;background-color:var(--three);padding-left:0;padding-top:0;padding-right:0;box-shadow:0 7px 8px -4px #0003,0 13px 19px 2px #00000024,0 5px 24px 4px #0000001f}.dialog-header[_ngcontent-%COMP%]{display:flex;height:47px;background:#F0F0F0;padding:11px;font-weight:600;color:#083640;font-size:19px}"]
                }),
                h
        }
        )();
        const qt = ["growlcard"];
        function Oe(h, P) {
            if (1 & h && (e.TgZ(0, "div", 11),
                e._uU(1),
                e.qZA()),
                2 & h) {
                const l = e.oxw();
                e.xp6(1),
                    e.hij(" ", l.data ? l.data.detail : "", " ")
            }
        }
        function Pe(h, P) {
            if (1 & h && (e.TgZ(0, "div", 11),
                e._uU(1),
                e.qZA()),
                2 & h) {
                const l = e.oxw();
                e.xp6(1),
                    e.hij(" ", l.data ? l.data.note : "", " ")
            }
        }
        const Te = function (h) {
            return {
                "background-image": h
            }
        };
        let te = (() => {
            class h {
                constructor(l) {
                    this.renderer = l,
                        this.id = "growl-card",
                        this.data = {
                            icon: "",
                            severity: "",
                            summary: "",
                            detail: "",
                            time: 0,
                            note: ""
                        },
                        this.dataChange = new e.vpe,
                        this.growlCloseIcon = b.gRD,
                        this.toastPatternIcon = b.utp
                }
                ngOnChanges(l) {
                    for (let m in l)
                        "data" === m && this.data && this.show()
                }
                show() {
                    switch (this.intervalSub && clearTimeout(this.intervalSub),
                    this.data.severity) {
                        case "success":
                            this.data.icon = b.QO8,
                                this.renderer.setStyle(this.growlCardElement.nativeElement, "background-color", "#55BA45");
                            break;
                        case "error":
                            this.data.icon = b.bXt,
                                this.renderer.setStyle(this.growlCardElement.nativeElement, "background-color", "#FF5E5B");
                            break;
                        default:
                            this.data.icon = b.h$R,
                                this.renderer.setStyle(this.growlCardElement.nativeElement, "background-color", "#FFAD3A")
                    }
                    this.renderer.addClass(this.growlCardElement.nativeElement, "show");
                    const l = (this.data.time ? this.data.time - 500 : 2500) / 1e3;
                    this.renderer.setStyle(this.growlCardElement.nativeElement, "-webkit-animation", "fadein 0.5s, fadeout 0.5s " + l + "s"),
                        this.renderer.setStyle(this.growlCardElement.nativeElement, "animation", "fadein 0.5s, fadeout 0.5s " + l + "s"),
                        this.intervalSub = setTimeout(() => {
                            this.renderer.removeClass(this.growlCardElement.nativeElement, "severity-" + (this.data.severity ? this.data.severity : "warn")),
                                this.renderer.removeClass(this.growlCardElement.nativeElement, "show"),
                                this.renderer.removeStyle(this.growlCardElement.nativeElement, "-webkit-animation"),
                                this.renderer.removeStyle(this.growlCardElement.nativeElement, "animation"),
                                this.dataChange.emit(void 0)
                        }
                            , this.data.time ? this.data.time : 4e3)
                }
                close() {
                    this.renderer.removeClass(this.growlCardElement.nativeElement, "show")
                }
            }
            return h.\u0275fac = function (l) {
                return new (l || h)(e.Y36(e.Qsj))
            }
                ,
                h.\u0275cmp = e.Xpm({
                    type: h,
                    selectors: [["app-growl"]],
                    viewQuery: function (l, m) {
                        if (1 & l && e.Gf(qt, 5),
                            2 & l) {
                            let _;
                            e.iGM(_ = e.CRH()) && (m.growlCardElement = _.first)
                        }
                    },
                    inputs: {
                        id: "id",
                        data: "data"
                    },
                    outputs: {
                        dataChange: "dataChange"
                    },
                    features: [e.TTD],
                    decls: 13,
                    vars: 9,
                    consts: [[1, "position"], [1, "growl-card", 3, "id", "ngStyle"], ["growlcard", ""], [1, "t-flex", "t-justify-between", "t-mr-15"], ["aria-labelledby", "logo-1", 1, "t-w-200", "t-max-w-[18px]", "t-h-18", "lg:t-w-[400px]", "lg:t-max-w-[25px]", "lg:t-h-[25px]", "t-mr-8", "lg:t-mr-20", "t-relative", "t-top-0", "lg:t-top-2"], ["alt", "img", 3, "src"], ["aria-labelledby", "content", 1, "t-flex", "t-flex-col"], ["aria-labelledby", "summary", 1, "t-font-medium", "t-text-big", "lg:t-text-large"], ["aria-labelledby", "detail", "class", "t-text-medium lg:t-text-big t-pt-10 lg:t-pt-15 lg:t-max-w-270 t-flex t-flex-wrap t-top-2 lg:t-top-0", 4, "ngIf"], ["aria-labelledby", "logo-2", 1, "t-flex", "t-items-center"], ["alt", "close", 1, "t-cursor-pointer", "t-w-100", "t-max-w-[10px]", "t-h-10", "lg:t-w-100", "lg:t-max-w-[12px]", "lg:t-h-12", 3, "src", "click"], ["aria-labelledby", "detail", 1, "t-text-medium", "lg:t-text-big", "t-pt-10", "lg:t-pt-15", "lg:t-max-w-270", "t-flex", "t-flex-wrap", "t-top-2", "lg:t-top-0"]],
                    template: function (l, m) {
                        1 & l && (e.TgZ(0, "div", 0)(1, "div", 1, 2)(3, "div", 3)(4, "div", 4),
                            e._UZ(5, "img", 5),
                            e.qZA(),
                            e.TgZ(6, "div", 6)(7, "div", 7),
                            e._uU(8),
                            e.qZA(),
                            e.YNc(9, Oe, 2, 1, "div", 8),
                            e.YNc(10, Pe, 2, 1, "div", 8),
                            e.qZA()(),
                            e.TgZ(11, "div", 9)(12, "img", 10),
                            e.NdJ("click", function () {
                                return m.close()
                            }),
                            e.qZA()()()()),
                            2 & l && (e.xp6(1),
                                e.s9C("id", m.id),
                                e.Q6J("ngStyle", e.VKq(7, Te, "url(" + m.toastPatternIcon + ")")),
                                e.xp6(4),
                                e.Q6J("src", m.data ? m.data.icon : "", e.LSH),
                                e.xp6(3),
                                e.hij(" ", m.data ? m.data.summary : "", " "),
                                e.xp6(1),
                                e.Q6J("ngIf", m.data && m.data.detail),
                                e.xp6(1),
                                e.Q6J("ngIf", m.data && m.data.note),
                                e.xp6(2),
                                e.Q6J("src", m.growlCloseIcon, e.LSH))
                    },
                    directives: [U.PC, U.O5],
                    styles: [".position[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}.growl-card[_ngcontent-%COMP%]{visibility:hidden;display:flex;align-items:flex-start;justify-content:space-between;max-width:400px;width:100%;color:var(--three);border-radius:10px;padding:20px;position:fixed;z-index:2000;top:30px;box-shadow:0 4px 12px #00000029;right:20px}.show[_ngcontent-%COMP%]{visibility:visible!important}.flex[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between}@media screen and (min-device-width: 0px) and (max-device-width: 768px){.position[_ngcontent-%COMP%]{justify-content:center;align-items:center;width:100%}.growl-card[_ngcontent-%COMP%]{top:unset;bottom:40px;right:10px;left:10px;padding:15px;width:95%;margin:auto}}"]
                }),
                h
        }
        )();
        function ee(h, P) {
            if (1 & h) {
                const l = e.EpF();
                e.TgZ(0, "app-sidebar", 9),
                    e.NdJ("sideBarHidden", function (_) {
                        return e.CHM(l),
                            e.oxw(2).handleSideBarHidden(_)
                    }),
                    e.qZA()
            }
            if (2 & h) {
                const l = e.oxw(2);
                e.Q6J("toggleBtn", l.toggleBtn)("mobile", l.mobile)("screenHeight", l.screenHeight)("cart", l.cartClicked)
            }
        }
        const se = function (h) {
            return {
                width: h
            }
        };
        function ie(h, P) {
            if (1 & h) {
                const l = e.EpF();
                e.TgZ(0, "app-header", 10),
                    e.NdJ("toggleBtn", function (_) {
                        return e.CHM(l),
                            e.oxw(2).handletoggleBtn(_)
                    })("cart", function (_) {
                        return e.CHM(l),
                            e.oxw(2).cart(_)
                    }),
                    e.qZA()
            }
            if (2 & h) {
                const l = e.oxw(2);
                e.Q6J("shadow", !0)("path", l.path)("ngStyle", e.VKq(4, se, "/create-profile" !== l.path && l.isLogin ? l.width + "px" : "100%"))("hambuergerToggle", l.toggleBtn)
            }
        }
        function oe(h, P) {
            if (1 & h) {
                const l = e.EpF();
                e.TgZ(0, "div", 11)(1, "span", 12),
                    e.NdJ("click", function () {
                        return e.CHM(l),
                            e.oxw(2).navigateToSystemCheck()
                    }),
                    e._uU(2, "Are You Interested in trying a System Compatibility check ? "),
                    e.qZA(),
                    e.TgZ(3, "span", 13),
                    e.NdJ("click", function () {
                        return e.CHM(l),
                            e.oxw(2).hidePopLayout()
                    }),
                    e._uU(4, "\u2715"),
                    e.qZA()()
            }
        }
        const ne = function (h, P) {
            return {
                "lg:t-left-75 !t-relative": h,
                "t-w-[100vw] lg:t-w-[calc(100vw-75px)]": P
            }
        }
            , Ie = function (h, P, l, m, _, L, k) {
                return {
                    "t-p-0 !t-top-0 !t-h-full !t-w-full !t-fixed !t-overflow-auto": h,
                    "t-px-8 xs:t-px-16 lg:t-px-30 t-py-20": P,
                    "!t-overflow-y-hidden": l,
                    "!t-w-full !t-fixed !t-overflow-y-hidden !t-p-0 !t-pt-20 !t-h-[calc(100vh-45px)]": m,
                    "lg:!t-top-75": _,
                    "!t-top-40": L,
                    "!t-top-50 lg:!t-top-75 !t-h-[calc(100vh-55px)] !t-overflow-hidden lg:!t-h-[calc(100vh-75px)] !t-pt-20 !t-p-0 lg:!t-px-30": k
                }
            };
        function Ae(h, P) {
            if (1 & h && (e.TgZ(0, "div", 3),
                e.YNc(1, ee, 1, 4, "app-sidebar", 4),
                e.TgZ(2, "div", 5),
                e.YNc(3, ie, 1, 6, "app-header", 6),
                e.YNc(4, oe, 5, 0, "div", 7),
                e.TgZ(5, "div", 8),
                e._UZ(6, "router-outlet"),
                e.qZA()()()),
                2 & h) {
                const l = e.oxw();
                e.xp6(1),
                    e.Q6J("ngIf", l.showTop && "/create-profile" !== l.path && l.isLogin),
                    e.xp6(1),
                    e.Q6J("ngClass", e.WLB(5, ne, l.showTop && "/create-profile" !== l.path && l.isLogin, l.showTop && l.isLogin)),
                    e.xp6(1),
                    e.Q6J("ngIf", l.showTop),
                    e.xp6(1),
                    e.Q6J("ngIf", "/course" === l.path && l.isVisible),
                    e.xp6(1),
                    e.Q6J("ngClass", e.Hh0(8, Ie, !l.showTop, l.showTop && "/create-profile" !== l.path, "/chat" === l.path, "/create-profile" === l.path, "/create-profile" === l.path && !l.mobile, "/create-profile" === l.path && l.mobile, "/chat" === l.path))
            }
        }
        function ae(h, P) {
            1 & h && (e.TgZ(0, "div", 14),
                e._uU(1, " Please use latest version of Google Chrome or Mozilla Firefox for better compatibility. This Browser will be supported soon.\n"),
                e.qZA())
        }
        let le = (() => {
            class h {
                constructor(l, m, _) {
                    let L;
                    this.globalService = l,
                        this.router = m,
                        this.loginService = _,
                        this.clientLogo = b.xXL,
                        this.hideSearch = !1,
                        this.mobile = !1,
                        this.isSmallMobile = !1,
                        this.isVisible = !0;
                    const k = localStorage.getItem("school_details");
                    L = B.N.production ? "https://images.examly.io/icons2/examly.css" : "https://images.examly.net/icons2/examly.css",
                        this.router.events.subscribe(j => {
                            j instanceof D.m2 && (this.isLogin = this.loginService.loginStatus(),
                                this.path = window.location.pathname)
                        }
                        ),
                        this.globalService.loadScript("link", L, "text/css", "", "customIcons"),
                        k && "randstadindia288" === JSON.parse(k).school_code && (L = "https://images.examly.io/randstadindia288/randstadStudentCustom.css",
                            this.globalService.loadScript("link", L, "text/css", "", "customCss"))
                }
                getScreenSize(l) {
                    this.screenWidth = window.innerWidth,
                        this.screenHeight = window.innerHeight,
                        this.setSize()
                }
                setSize() {
                    this.screenWidth < 1024 ? (this.width = this.screenWidth,
                        this.martop = 48,
                        this.mobile = !0,
                        this.hideSearch = !0) : (this.width = this.screenWidth - 75,
                            this.martop = 0,
                            this.mobile = !1,
                            this.hideSearch = !1),
                        this.isSmallMobile = this.screenWidth < 1024
                }
                ngOnInit() {
                    return (0,
                        A.mG)(this, void 0, void 0, function* () {
                            if (this.screenWidth = window.innerWidth,
                                this.setSize(),
                                this.path = window.location.pathname,
                                "/loginredirect" === window.location.pathname && localStorage.setItem("ssologin", "true"),
                                "/loginredirect" === window.location.pathname && window.location.href.includes("stageId")) {
                                const z = window.location.href
                                    , Y = new URLSearchParams(z.substring(z.indexOf("?") + 1))
                                    , J = Y.get("candidateName")
                                    , H = Y.get("candidateId");
                                Y.get("jobId") ? localStorage.setItem("jobId", Y.get("jobId")) : Y.get("eventId") && localStorage.setItem("eventId", Y.get("eventId")),
                                    localStorage.setItem("stageId", Y.get("stageId")),
                                    Y.get("ide") && localStorage.setItem("hireIDE", "true"),
                                    J ? localStorage.setItem("candidateName", J) : localStorage.setItem("candidateName", null),
                                    H ? localStorage.setItem("candidateId", H) : localStorage.setItem("candidateId", null)
                            }
                            const l = "undefined" != typeof InstallTrigger
                                , m = -1 === navigator.userAgent.indexOf("Edg")
                                , _ = !window.opr
                                , L = window.chrome || navigator.userAgent.indexOf("CriOS") > 0
                                , k = navigator.userAgent.indexOf("Safari") > 0;
                            let j = !0;
                            if (window.parent.postMessage(JSON.stringify({
                                subject: "lti.frameResize",
                                height: 650
                            }), "*"),
                                !L && k && (j = !1),
                                j && _ && (l || L || !m)) {
                                this.isBrowserSupported = !0,
                                    localStorage.removeItem("path"),
                                    this.router.events.subscribe(J => {
                                        J instanceof D.OD && (this.isLogin = this.loginService.loginStatus(),
                                            this.globalService.inIframe() && localStorage.getItem("einit") && !["/project", "/test", "/result", "/login", "/loginredirect"].includes(location.pathname) && this.globalService.clearLocalStorage())
                                    }
                                    );
                                const z = localStorage.getItem("einit")
                                    , Y = localStorage.getItem("formData");
                                if (Y) {
                                    const H = {
                                        uid: JSON.parse(Y).users_domain_id
                                    };
                                    this.loginService.checkIfStudentExist(H).subscribe(W => {
                                        null !== W.deletedAt && localStorage.clear()
                                    }
                                    )
                                }
                                z && !this.globalService.inIframe() && !["/test"].includes(location.pathname) && (this.globalService.commonGrowl.next({
                                    time: 3e4,
                                    severity: "warning",
                                    summary: "Direct login access has been disabled."
                                }),
                                    this.globalService.sleep(1e3).then(() => {
                                        this.globalService.clearLocalStorage()
                                    }
                                    ),
                                    this.globalService.sleep(1e3).then(() => {
                                        this.router.navigateByUrl("login")
                                    }
                                    )),
                                    yield this.redirection(),
                                    this.globalService.showTop.subscribe(J => {
                                        this.showTop !== J && (this.showTop = J)
                                    }
                                    ),
                                    this.globalService.showHeader.subscribe(J => {
                                        this.showHeader = J
                                    }
                                    ),
                                    this.globalService.commonGrowl.subscribe(J => {
                                        const H = Object.keys(J).length;
                                        J && H && (this.growlData = J)
                                    }
                                    ),
                                    this.globalService.addGoogleAnalytics()
                            }
                        })
                }
                ngOnChanges(l) {
                    return (0,
                        A.mG)(this, void 0, void 0, function* () { })
                }
                redirection() {
                    return new Promise((l, m) => {
                        this.loginService.getSchoolLoginDetails().subscribe(_ => (0,
                            A.mG)(this, void 0, void 0, function* () {
                                if (_ && _.data)
                                    if (localStorage.removeItem("redirect"),
                                        yield this.loginService.setLocalstorage(_),
                                        this.setLocalStorage = !0,
                                        _.data.school_logo && this.globalService.schoolLogo.next(_.data.school_logo),
                                        _.data.school_name && this.globalService.schoolName.next(_.data.school_name),
                                        _.data.schools_metadata && _.data.school_status) {
                                        const L = _.data.schools_metadata
                                            , k = _.data.enable_features;
                                        if (L && L.allowsignup && this.globalService.isSignup.next(!0),
                                            this.globalService.updateLoginURLS(L, k),
                                            this.globalService.publicNavigation(L, k),
                                            this.globalService.resetToken(),
                                            this.loginService.loginStatus())
                                            localStorage.getItem("noRedirect") && "/ide" != window.location.pathname ? this.router.navigateByUrl("create-profile") : "/" === location.pathname && this.router.navigateByUrl(this.globalService.defaultRedirection());
                                        else if (localStorage.getItem("path"))
                                            this.router.navigateByUrl(localStorage.getItem("path"));
                                        else if ("/" === location.pathname) {
                                            const j = this.globalService.publicNavigation(L, k);
                                            this.router.navigateByUrl(j)
                                        }
                                    } else
                                        this.router.navigateByUrl("/login"),
                                            this.loginRoute = !1,
                                            this.showGrowl(3e3, "error", "Inactive account", "Please contact the administrator for more details");
                                l(!0)
                            }), () => {
                                l(!1)
                            }
                        )
                    }
                    )
                }
                navigateToSystemCheck() {
                    this.router.navigateByUrl("/test-compatibility")
                }
                hidePopLayout() {
                    this.isVisible = !1
                }
                cart(l) {
                    this.cartClicked = l
                }
                handletoggleBtn(l) {
                    this.toggleBtn = l
                }
                handleSideBarHidden(l) {
                    this.toggleBtn = l
                }
                closeDropDown(l) {
                    const m = [];
                    l && l.path && l.path.length && l.path.forEach((_, L) => {
                        m.push(_.localName)
                    }
                    ),
                        m.includes("app-select-dropdown") || this.globalService.toggleVisibility()
                }
                showGrowl(l, m, _, L) {
                    this.globalService.commonGrowl.next({
                        time: l,
                        severity: m,
                        summary: _,
                        detail: L
                    })
                }
            }
            return h.\u0275fac = function (l) {
                return new (l || h)(e.Y36(N.U), e.Y36(D.F0), e.Y36(M.r))
            }
                ,
                h.\u0275cmp = e.Xpm({
                    type: h,
                    selectors: [["app-root"]],
                    hostBindings: function (l, m) {
                        1 & l && e.NdJ("resize", function (L) {
                            return m.getScreenSize(L)
                        }, !1, e.Jf7)
                    },
                    features: [e.TTD],
                    decls: 3,
                    vars: 3,
                    consts: [["class", "t-flex t-flex-row t-h-[100vh] t-w-[100vw]", 4, "ngIf"], ["class", "browser_message", 4, "ngIf"], [3, "data", "dataChange"], [1, "t-flex", "t-flex-row", "t-h-[100vh]", "t-w-[100vw]"], [3, "toggleBtn", "mobile", "screenHeight", "cart", "sideBarHidden", 4, "ngIf"], [1, "t-flex", "t-flex-col", "t-box-border", "t-w-full", 3, "ngClass"], ["class", "t-fixed t-z-[9] t-flex-row t-w-[96%] t-flex-grow-0 t-m-0 t-max-w-full t-basis-full lg:t-basis-11/12", 3, "shadow", "path", "ngStyle", "hambuergerToggle", "toggleBtn", "cart", 4, "ngIf"], ["class", "popBanner", 4, "ngIf"], [1, "t-flex-row", "t-flex-grow-0", "t-relative", "t-overflow-x-hidden", "t-overflow-y-scroll", "t-top-[117px]", "t-m-0", "t-bottom-0", "t-max-w-full", "t-h-[calc(100vh-7.4rem)]", "lg:t-top-75", "lg:t-h-[calc(100vh-75px)]", "t-bg-accent-3", 3, "ngClass"], [3, "toggleBtn", "mobile", "screenHeight", "cart", "sideBarHidden"], [1, "t-fixed", "t-z-[9]", "t-flex-row", "t-w-[96%]", "t-flex-grow-0", "t-m-0", "t-max-w-full", "t-basis-full", "lg:t-basis-11/12", 3, "shadow", "path", "ngStyle", "hambuergerToggle", "toggleBtn", "cart"], [1, "popBanner"], [3, "click"], [1, "bannerCross", 3, "click"], [1, "browser_message"]],
                    template: function (l, m) {
                        1 & l && (e.YNc(0, Ae, 7, 16, "div", 0),
                            e.YNc(1, ae, 2, 0, "div", 1),
                            e.TgZ(2, "app-growl", 2),
                            e.NdJ("dataChange", function (L) {
                                return m.growlData = L
                            }),
                            e.qZA()),
                            2 & l && (e.Q6J("ngIf", m.isBrowserSupported && m.setLocalStorage),
                                e.xp6(1),
                                e.Q6J("ngIf", !m.isBrowserSupported),
                                e.xp6(1),
                                e.Q6J("data", m.growlData))
                    },
                    directives: [U.O5, pt, U.mk, Xt, U.PC, D.lC, te],
                    styles: ["@media screen and (max-width: 768px){.ui.grid[_ngcontent-%COMP%] > .column[_ngcontent-%COMP%]:not(.row){padding-top:0;padding-bottom:0}.title[_ngcontent-%COMP%]{padding-left:10px}.ui.grid[_ngcontent-%COMP%] > .column[_ngcontent-%COMP%]:not(.row), .ui.grid[_ngcontent-%COMP%] > .row[_ngcontent-%COMP%] > .column[_ngcontent-%COMP%]{padding-left:0;padding-right:0}.not-hide[_ngcontent-%COMP%]{display:block}.sidebar[_ngcontent-%COMP%]{width:60%;display:none}.panel-item[_ngcontent-%COMP%]   .item-content[_ngcontent-%COMP%]{display:revert}i[_ngcontent-%COMP%]{cursor:pointer}.list-card[_ngcontent-%COMP%]{padding:0}.SidebarContent[_ngcontent-%COMP%]{width:100%!important}.list-styles[_ngcontent-%COMP%]   .list-header[_ngcontent-%COMP%]   .ai-logo[_ngcontent-%COMP%]{height:3.5rem}.list-styles[_ngcontent-%COMP%]   .list-header[_ngcontent-%COMP%]   .close-icon[_ngcontent-%COMP%]{cursor:pointer}}@media screen and (max-width: 1024px){.modals.dimmer[_ngcontent-%COMP%]   .ui.scrolling.modal[_ngcontent-%COMP%]{margin:0;background:#FFFFFF}.ui.fullscreen.modal[_ngcontent-%COMP%]{margin:0;position:absolute;inset:0;width:100%!important;border-radius:0}.ui.fullscreen.modal[_ngcontent-%COMP%]   .notification-modal[_ngcontent-%COMP%]{border:none}}@media only screen and (min-width: 512px) and (max-width: 768px){.sidebar[_ngcontent-%COMP%]{width:50%}.modals.dimmer[_ngcontent-%COMP%]   .ui.c.modal[_ngcontent-%COMP%]{margin:0;background:#FFFFFF}}@media only screen and (min-width: 768px) and (max-width: 1200px){.not-hide[_ngcontent-%COMP%]{display:block}.sidebar[_ngcontent-%COMP%]{width:20rem;display:none}.title[_ngcontent-%COMP%]{padding-left:10px}.icon-split[_ngcontent-%COMP%]{display:flex}.resp-modal-view[_ngcontent-%COMP%]{width:50%!important}.list-styles[_ngcontent-%COMP%]   .list-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:1rem 2rem 2rem}.list-styles[_ngcontent-%COMP%]   .list-header[_ngcontent-%COMP%]   .ai-logo[_ngcontent-%COMP%]{height:3.5rem}.list-styles[_ngcontent-%COMP%]   .list-header[_ngcontent-%COMP%]   .close-icon[_ngcontent-%COMP%]{cursor:pointer}}@media (min-width: 1200px){.close-icon[_ngcontent-%COMP%]{display:none}}.popBanner[_ngcontent-%COMP%]{background:#060d1a;color:#fff;text-align:center;padding:10px;width:100%;top:4.6875rem;position:relative;z-index:100;cursor:pointer}.bannerCross[_ngcontent-%COMP%]{position:absolute;right:15px;cursor:pointer}"]
                }),
                h
        }
        )();
        var Me = i(6873)
            , re = i(6979)
            , ce = i(9653)
            , de = i(4538);
        let he = (() => {
            class h {
                constructor(l) {
                    this.globalService = l
                }
                handleError(l) {
                    console.error(l),
                        /Loading chunk [\d]+ failed/.test(l.message) && window.location.reload(),
                        this.globalService.eventEmitterGA("exception", {
                            description: l,
                            fatal: !0
                        })
                }
            }
            return h.\u0275fac = function (l) {
                return new (l || h)(e.LFG(N.U))
            }
                ,
                h.\u0275prov = e.Yz7({
                    token: h,
                    factory: h.\u0275fac
                }),
                h
        }
        )();
        var ue = i(1424)
            , Ee = i(345)
            , Le = i(9749)
            , Ne = i(8620);
        const Q = [n.b2, R, x.JF, C.PW, Me.D, ce.q, re.h, ue.j, de.B, Ee.S, Le.P, Ne.s];
        navigator.userAgent.includes("SEB") || Q.push(O.Wr.register("ngsw-worker.js", {
            enabled: !0
        }));
        let pe = (() => {
            class h {
            }
            return h.\u0275fac = function (l) {
                return new (l || h)
            }
                ,
                h.\u0275mod = e.oAB({
                    type: h,
                    bootstrap: [le]
                }),
                h.\u0275inj = e.cJS({
                    providers: [w, g, I, c, {
                        provide: e.qLn,
                        useClass: he
                    }],
                    imports: [Q]
                }),
                h
        }
        )();
        B.N.production && (0,
            e.G48)(),
            n.q6().bootstrapModule(pe).then(() => {
                "serviceWorker" in navigator && !navigator.userAgent.includes("SEB") && navigator.serviceWorker.register("/ngsw-worker.js")
            }
            ).catch(h => console.log(h))
    }
    ,
    9879: () => { }
    ,
    9332: () => { }
    ,
    1434: () => { }
    ,
    5756: () => { }
    ,
    9961: () => { }
    ,
    6108: () => { }
}, G => {
    G.O(0, [4736], () => G(G.s = 2561)),
        G.O()
}
]);
