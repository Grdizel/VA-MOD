(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
	[46774, 71402, 25597, 1867, 83912], {
		860779: () = > {},
		745269: (e, t, n) = > {
			"use strict";
			n.d(t, {
				dur: () = > i,
				easingFunc: () = > s,
				CubicBezier: () = > o,
				color: () = > r
			});
			const i = 350,
			s = {
				linear: e = > e,
				easeInQuad: e = > e * e,
				easeOutQuad: e = > e * (2 - e),
				easeInOutQuad: e = > e < .5 ? 2 * e * e : (4 - 2 * e) * e - 1,
				easeInCubic: e = > e * e * e,
				easeOutCubic: e = > --e * e * e + 1,
				easeInOutCubic: e = > e < .5 ? 4 * e * e * e : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1,
				easeInQuart: e = > e * e * e * e,
				easeOutQuart: e = > 1 - --e * e * e * e,
				easeInOutQuart: e = > e < .5 ? 8 * e * e * e * e : 1 - 8 * --e * e * e * e,
				easeInQuint: e = > e * e * e * e * e,
				easeOutQuint: e = > 1 + --e * e * e * e * e,
				easeInOutQuint: e = > e < .5 ? 16 * e * e * e * e * e : 1 + 16 * --e * e * e * e * e
			};
			class o {
				constructor(e, t, n, i) {
					this._mX1 = e,
					this._mY1 = t,
					this._mX2 = n,
					this._mY2 = i
				}
				easingFunc(e) {
					return this._mX1 === this._mY1 && this._mX2 === this._mY2 ? e : this._calcBezier(this._getTForX(e))
				}
				_a(e, t) {
					return 1 - 3 * t + 3 * e
				}
				_b(e, t) {
					return 3 * t - 6 * e
				}
				_c(e) {
					return 3 * e
				}
				_calcBezier(e) {
					return ((this._a(this._mY1, this._mY2) * e + this._b(this._mY1, this._mY2)) * e + this._c(this._mY1)) * e
				}
				_getSlope(e) {
					return 3 * this._a(this._mX1, this._mX2) * e * e + 2 * this._b(this._mX1, this._mX2) * e + this._c(this._mX1)
				}
				_getTForX(e) {
					let t = e;
					for (let n = 0; n < 4; ++n) {
						const n = this._getSlope(t);
						if (0 === n) return t;
						t -= (this._calcBezier(t) - e) / n
					}
					return t
				}
			}
			const r = {
				black70: "#4A4A4A",
				black80: "#535353"
			}
		},
		83436: (e, t, n) = > {
			"use strict";
			n.d(t, {
				Icon: () = > s
			});
			var i = n(559496);
			const s = i.forwardRef((e, t) = > {
				const {
					icon: n = "",
					...s
				} = e;
				return i.createElement("span", {...s,
					ref: t,
					dangerouslySetInnerHTML: {
						__html: n
					}
				})
			})
		},
		223124: (e, t, n) = > {
			"use strict";
			n.d(t, {
				makeCancelable: () = > s,
				isCancelled: () = > o
			});
			class i {}
			function s(e) {
				let t = !1;
				return {
					promise: new Promise((n, s) = > {
						e.then(e = > t ? s(new i) : n(e)),
						e.
						catch (e = > s(t ? new i : e))
					}),
					cancel() {
						t = !0
					}
				}
			}
			function o(e) {
				return e instanceof i
			}
		},
		554433: (e, t, n) = > {
			"use strict";
			n.d(t, {
				VisibilityApi: () = > o
			});
			var i = n(262325),
				s = n.n(i);
			class o {
				constructor(e) {
					let t;
					this.isVisible = new(s())(!0);
					let n = null;
					for (const i of["", "moz", "ms", "webkit"]) {
						const s = i ? i + "Hidden" : "hidden";
						if (s in e) {
							t = i + "visibilitychange",
							n = () = > {
								this.isVisible.setValue(!e[s])
							},
							n(),
							e.addEventListener(t, n, !1);
							break
						}
					}
					this.destroy = () = > {
						n && (e.removeEventListener(t, n, !1), n = null)
					}
				}
			}
		},
		84119: (e, t, n) = > {
			"use strict";
			n.d(t, {
				followSymbol: () = > s
			});
			var i = n(883721);

			function s(e) {
				return (0, i.handleJSONRequest)({
					path: "/social/follow-the-symbol/",
					requestData: {
						body: e,
						method: "POST"
					}
				})
			}
		},
		761850: (e, t, n) = > {
			"use strict";
			var i = n(270617).declareClassAsPureInterface;

			function s() {}
			TradingView.WEB_SOCKET_WAS_CONNECTED = !1,
			s.REBIND_STUDY_STANDALONE_TO_CHILD = 1,
			s.REBIND_STUDY_CHILD_TO_STANDALONE = 2,
			s.prototype.defaultWatchlistSymbols = function () {},
			s.prototype.defaultResolutions = function () {},
			s.prototype.availableCurrencies = function () {},
			s.prototype.availableUnits = function () {},
			s.prototype.supportedSymbolsTypes = function () {},
			s.prototype.supportedExchangesList = function () {},
			s.prototype.symbolsGrouping = function () {},
			s.prototype.quoteCreateSession = function (e) {},
			s.prototype.quoteDeleteSession = function (e) {},
			s.prototype.quoteSetFields = function (e, t) {},
			s.prototype.quoteAddSymbols = function (e, t) {},
			s.prototype.quoteRemoveSymbols = function (e, t) {},
			s.prototype.quoteFastSymbols = function (e, t) {},
			s.prototype.depthCreateSession = function (e, t, n) {},
			s.prototype.depthDeleteSession = function (e) {},
			s.prototype.depthSetSymbol = function (e, t) {},
			s.prototype.depthClearSymbol = function (e) {},
			s.prototype.depthSetScale = function (e, t) {},
			s.prototype.chartCreateSession = function (e, t) {},
			s.prototype.chartDeleteSession = function (e) {},
			s.prototype.createSession = function (e, t) {},
			s.prototype.removeSession = function (e) {},
			s.prototype.connected = function () {},
			s.prototype.connect = function () {},
			s.prototype.disconnect = function () {},
			s.prototype.switchTimezone = function (e, t) {},
			s.prototype.resolveSymbol = function (e, t, n, i) {},
			s.prototype.createSeries = function (e, t, n, i, s, o, r, a) {},
			s.prototype.removeSeries = function (e, t, n) {},
			s.prototype.modifySeries = function (e, t, n, i, s, o, r) {},
			s.prototype.requestMoreData = function (e, t, n, i) {},
			s.prototype.requestMetadata = function (e, t, n) {},
			s.prototype.isCanCreateStudy = function (e, t) {},
			s.prototype.createStudy = function (e, t, n, i, s, o, r) {},
			s.prototype.rebindStudy = function (e, t, n, i, s, o, r, a) {},
			s.prototype.removeStudy = function (e, t, n) {},
			s.prototype.modifyStudy = function (e, t, n, i, s) {},
			s.prototype.createPointset = function (e, t, n, i, s, o, r) {},
			s.prototype.modifyPointset = function (e, t, n, i, s) {},
			s.prototype.removePointset = function (e, t, n) {},
			s.prototype.requestMoreTickmarks = function (e, t, n, i) {},
			s.prototype.requestFirstBarTime = function (e, t, n, i) {},
			s.prototype._invokeHandler = function (e, t) {},
			s.prototype._sendRequest = function (e, t) {},
			s.prototype._onMessage = function (e) {},
			s.prototype._dispatchNotification = function (e) {},
			s.prototype._invokeNotificationHandler = function (e, t, n) {},
			s.prototype._notifySessions = function (e) {},
			s.prototype.unpack = function (e) {},
			s.prototype.searchSymbols = function (e, t, n, i, s, o, r, a, c, l) {},
			s.prototype.serverTimeOffset = function () {},
			s.prototype.getMarks = function (e, t, n, i, s) {},
			s.prototype.getTimescaleMarks = function (e, t, n, i, s) {},
			i(s, "ChartApiInterface"),
			e.exports.HandlerInfo = function (e, t) {
				this.handler = e,
				this.customId = t
			},
			e.exports.ChartApiInterface = s
		},
		285055: (e, t, n) = > {
			"use strict";
			var i, s;

			function o(e, t) {
				return "period-back" === e.type && "period-back" === t.type ? e.value === t.value : "time-range" === e.type && "time-range" === t.type && (e.from === t.from && e.to === t.to)
			}
			n.d(t, {
				TIMEFRAMETYPE: () = > s,
				areEqualTimeFrames: () = > o
			}),


			function (e) {
				e.extractErrorReason = function (e) {
					return e.params[1]
				}
			}(i || (i = {})),


			function (e) {
				e.PeriodBack = "period-back",
				e.TimeRange = "time-range"
			}(s || (s = {}))
		},
		141802: (e, t, n) = > {
			"use strict";
			n.r(t),
			n.d(t, {
				QuoteCache: () = > s,
				QUOTE_FIELDS: () = > o,
				QUOTE_FIELDS_CACHE: () = > r
			});
			var i = n(588537);
			class s {
				constructor(e) {
					this._cache = new Map,
					this._fields = [...e.fields]
				}
				update(e, t, n) {
					const s = (0, i.ensureDefined)(e.symbolname);
					if (this._cache.has(s) || this._cache.set(s, {
						symbolname: s,
						status: e.status,
						values: {}
					}), "error" === e.status) return;
					const o = (0, i.ensureDefined)(this._cache.get(s));
					o.status = e.status;
					for (const i of this._fields) {
						if (!t.has(i)) continue;
						const s = e.values[i];
						(n || void 0 !== s) && (o.values[i] = s)
					}
				}
				get(e) {
					var t;
					return null !== (t = this._cache.get(e)) && void 0 !== t ? t : null
				}
				fields() {
					return this._fields
				}
			}
			const o = new Set(["pro_name", "logoid", "currency-logoid", "base-currency-logoid", "short_name", "description", "exchange", "type", "country_code", "provider_id", "sector", "type", "industry", "currency_id", "last_price", "fractional", "minmov", "minmove2", "pricescale", "change", "change_percent", "volume", "average_volume", "market_cap_basic", "total_revenue", "earnings_per_share_basic_ttm", "price_earnings_ttm", "beta_1_year", "dps_common_stock_prim_issue_fy", "dividends_yield", "earnings_release_next_date", "earnings_per_share_forecast_next_fq", "earnings_release_date", "earnings_per_share_fq", "fundamental_currency_code", "symbol-primaryname", "update_mode"]),
			r = new s({
				fields: o
			})
		},
		124418: (e, t, n) = > {
			"use strict";
			n.r(t),
			n.d(t, {
				getQuoteSessionInstance: () = > r,
				setQuoteSessionInstance: () = > a,
				getQuoteSessionNoEnsure: () = > c,
				destroyQuoteSessions: () = > l
			});
			var i = n(167904),
				s = n.n(i);
			const o = {};

			function r(e = "full") {
				return o[e] || a(e, new(s())(e)),
				o[e]
			}
			function a(e = "full", t) {
				o[e] = t
			}
			function c(e = "full") {
				return o[e]
			}
			function l() {
				for (const e in o) if (o.hasOwnProperty(e)) {
					const t = o[e];
					void 0 !== t && t.destroy(),
					delete o[e]
				}
			}
		},
		574764: (e, t, n) = > {
			"use strict";
			n.d(t, {
				QuoteSession: () = > s
			});
			var i = n(95935);
			class s {
				constructor(e, t = (0, i.randomHash)()) {
					this._sessionstarted = !1,
					this._globalHandler = null,
					this._chartApi = e,
					this._sessionid = "qs_" + t
				}
				destroy() {
					this._sessionstarted && (this._chartApi.quoteDeleteSession(this._sessionid), this._sessionstarted = !1)
				}
				connected() {
					return this._chartApi.connected()
				}
				connect(e) {
					this._globalHandler = e,
					this._chartApi.createSession(this._sessionid, this),
					this._chartApi.connect()
				}
				disconnect() {
					this._chartApi.disconnect()
				}
				quoteAddSymbols(e) {
					this._chartApi.quoteAddSymbols(this._sessionid, e)
				}
				quoteRemoveSymbols(e) {
					this._chartApi.quoteRemoveSymbols(this._sessionid, e)
				}
				quoteFastSymbols(e) {
					this._chartApi.quoteFastSymbols(this._sessionid, e)
				}
				quoteSetFields(e) {
					this._chartApi.quoteSetFields(this._sessionid, e)
				}
				onMessage(e) {
					var t;
					switch (e.method) {
					case "connected":
						this._sessionstarted || (this._chartApi.quoteCreateSession(this._sessionid), this._sessionstarted = !0);
						break;
					case "disconnected":
						this._sessionstarted = !1
					}
					null === (t = this._globalHandler) || void 0 === t || t.call(this, e)
				}
				quoteHibernateAll() {
					this._chartApi.quoteHibernateAll(this._sessionid)
				}
			}
			window.TradingView.QuoteSession = s
		},
		167904: (e, t, n) = > {
			"use strict";
			e = n.nmd(e);
			var i = n(97639),
				s = n(343370).
			default,
				o = n(12481).
			default,
				r = n(689765).PriceFormatter;
			const {
				uniq: a
			} = n(977809);
			var c = n(95935),
				l = n(461909).parseUpdateMode,
				u = n(198796).deepExtend;
			const {
				QUOTE_FIELDS_CACHE: d,
				QUOTE_FIELDS: h
			} = n(141802);
			var _;

			function m(e, t) {
				this.options = Object.assign({
					throttleTimeout: 125
				}, t),
				this._connected = !1,
				this._symbol_data = {},
				this._subscriptions = {},
				this.onConnect = new i,
				this.onDisconnect = new i,
				this._quoteApi = new _(window.ChartApiInstance),
				this._type = e || "full",
				this._delayUpdateFastSymbols = o(this._updateFastSymbols, 250),
				this._throttledSymbolData = {},
				this._formatterValuesCache = {},
				this._waitingForFormatters = {},
				this._snapshotValuesCache = {},
				this._waitingForSnapshot = {},
				this.connect()
			}
			_ = n(574764).QuoteSession,
			m.prototype.destroy = function () {
				this._quoteApi.destroy(),
				this._quoteApi = null,
				this._connected = !1,
				this.onDisconnect.fire()
			},
			m.prototype.typeFields = {},
			m.prototype.typeFields.simple = ["base-currency-logoid", "ch", "chp", "currency-logoid", "currency_code", "currency_id", "base_currency_id", "current_session", "description", "exchange", "format", "fractional", "is_tradable", "language", "local_description", "listed_exchange", "logoid", "lp", "lp_time", "minmov", "minmove2", "original_name", "pricescale", "pro_name", "short_name", "type", "typespecs", "update_mode", "volume"],
			m.prototype.typeFields.simpleDetailed = [].concat(m.prototype.typeFields.simple, ["ask", "bid", "fundamentals", "high_price", "is_tradable", "low_price", "open_price", "prev_close_price", "rch", "rchp", "rtc", "rtc_time", "status", "basic_eps_net_income", "beta_1_year", "earnings_per_share_basic_ttm", "industry", "market_cap_basic", "price_earnings_ttm", "sector", "volume", "dividends_yield", "timezone"]),
			m.prototype.typeFields.full = [],
			m.prototype.typeFields.watchlist = [].concat(m.prototype.typeFields.simple, ["rchp", "rtc", "country_code", "provider_id"]),
			m.prototype.typeFields.portfolio = ["pro_name", "short_name", "exchange", "listed_exchange", "description", "sector", "type", "typespecs", "industry", "currency_code", "currency_id", "ch", "chp", "logoid", "currency-logoid", "base-currency-logoid", "earnings_per_share_forecast_next_fq", "earnings_release_next_date", "earnings_release_date", "earnings_per_share_fq", "lp", "fractional", "minmov", "minmove2", "pricescale", "volume", "average_volume", "market_cap_basic", "total_revenue", "earnings_per_share_basic_ttm", "price_earnings_ttm", "beta_1_year", "dps_common_stock_prim_issue_fy", "dividends_yield", "fundamental_currency_code", "rates_mc", "rates_fy", "rates_ttm"],
			m.prototype.typeFields.notes = ["short_name", "pro_name", "logoid", "currency-logoid", "base-currency-logoid", "symbol-primaryname", "type", "typespecs"],
			m.prototype.connect = function (e) {
				this._quoteApi.connect(this.quoteHandler.bind(this))
			},
			m.prototype.quoteHandler = function (e) {
				var t = e.method,
					n = e.params;
				switch (t) {
				case "connected":
					this._connected || (this._connected = !0, this.onConnected());
					break;
				case "quote_list_fields":
					break;
				case "quote_symbol_data":
					this._connected && this.onSymbolData(n[0]);
					break;
				case "quote_completed":
					this._connected && this.onSymbolData({
						symbolname: n[0],
						complete: performance.now(),
						values: {}
					});
					break;
				case "disconnected":
					this._connected && (this._connected = !1, this.onDisconnect.fire())
				}
			},
			m.prototype.onConnected = function () {
				this.setFields();
				var e = Object.keys(this._symbol_data);
				e.length && (this._quoteApi.quoteAddSymbols(e), this._delayUpdateFastSymbols()),
				this.onConnect.fire()
			},
			m.prototype.setFields = function () {
				var e = m.prototype.typeFields[this._type];
				e && e.length && this._quoteApi.quoteSetFields(e)
			},
			m.prototype.onSymbolData = function (e) {
				try {
					e.status && d.update(e, h, !1)
				} catch (e) {}
				var t = e.symbolname,
					n = this._throttledSymbolData[t];
				n || (n = this._throttledSymbolData[t] = {
					fnDispatch: s(this.dipatchSymbolData.bind(this), this.options.throttleTimeout)
				}),
				n.cache ? u(n.cache, e) : n.cache = e,
				n.fnDispatch(t)
			},
			m.prototype._parseUpdateMode = function (e) {
				var t = l(e.update_mode);
				null !== t && (e.update_mode = t.mode, e.update_mode_seconds = t.interval)
			},
			m.prototype.dipatchSymbolData = function (e) {
				var t = this._symbol_data[e],
					n = this._throttledSymbolData[e].cache;
				if (delete this._throttledSymbolData[e].cache, this._symbol_data[e]) for (var i in u(t, n), t.values && this._parseUpdateMode(t.values), this._subscriptions) {
					var s = this._subscriptions[i];
					s.has(e) && s.get(e).forEach((function (e) {
						e(t, n)
					}))
				}
			},
			m.prototype.subscribe = function (e, t, n) {
				this._subscriptions[e] = this._subscriptions[e] || new Map;
				var i = this._subscriptions[e];
				t = [].concat(t);
				var s = [];
				t.forEach((function (e) {
					this._symbol_data[e] ? i && i.has(e) || this._symbol_data[e].subscribers_count++ : (this._symbol_data[e] = {
						subscribers_count: 1
					}, s.push(e)),
					i.has(e) || i.set(e, []),
					i.get(e).push(n),
					i.get(e).fast = !0,
					this._symbol_data[e] && this._symbol_data[e].values && n(this._symbol_data[e], this._symbol_data[e])
				}), this),
				s.length && this._connected && (this._quoteApi.quoteAddSymbols(s), this._delayUpdateFastSymbols())
			},
			m.prototype.unsubscribe = function (e, t, n) {
				t = [].concat(t);
				for (var i = this._subscriptions[e], s = [], o = 0; o < t.length; o++) {
					var r = t[o];
					if (i) if (i.has(r) && n) {
						var a = i.get(r).indexOf(n);~a && i.get(r).splice(a, 1),
						i.get(r).length || i.delete(r)
					} else i.delete(r);
					i && 0 === i.size && delete this._subscriptions[e],
					this._symbol_data.hasOwnProperty(r) && (i && !i.has(r) && this._symbol_data[r].subscribers_count--, this._symbol_data[r].subscribers_count || (delete this._symbol_data[r], s.push(r)))
				}
				s.length && this._connected && (this._quoteApi.quoteRemoveSymbols(s), this._delayUpdateFastSymbols())
			},
			m.prototype.setFastSymbols = function (e, t) {
				if (this._subscriptions[e]) for (var n = this._subscriptions[e], i = Array.from(n.keys()), s = 0; s < i.length; ++s) {
					var o = i[s];
					n.get(o).fast = -1 !== t.indexOf(o)
				}
				this._delayUpdateFastSymbols()
			},
			m.prototype._updateFastSymbols = function () {
				if (this._connected) {
					var e = this._fastSymbols();
					0 === e.length ? this._quoteApi.quoteHibernateAll() : this._quoteApi.quoteFastSymbols(e)
				}
			},
			m.prototype._delayUpdateFastSymbols = m.prototype._updateFastSymbols,
			m.prototype._fastSymbols = function () {
				var e = [];
				for (var t in this._subscriptions) for (var n = this._subscriptions[t], i = Array.from(n.keys()), s = 0; s < i.length; ++s) {
					var o = i[s];
					n.get(o).fast && e.push(o)
				}
				return e = a(e)
			},
			m.prototype.formatter = function (e, t) {
				var n = this;
				if (this._waitingForFormatters[e]) return this._waitingForFormatters[e];

				function i(e) {
					var n = t && !e.fractional ? 1 : e.minmov;
					return new r(e.pricescale, n, e.fractional, e.minmove2)
				}
				var s = new Promise((function (t, s) {
					if (n._formatterValuesCache[e]) t(i(n._formatterValuesCache[e]));
					else {
						var o = c.guid();
						n.subscribe(o, [e], (function (r) {
							"error" === r.status && (n._waitingForFormatters[e] = null, s("Quotes snapshot is not received")),


							function (e) {
								return e && null != e.pricescale && null != e.minmov
							}(r.values) && (n._waitingForFormatters[e] = null, n._formatterValuesCache[e] = r.values, t(i(r.values)), n.unsubscribe(o, e))
						}))
					}
				}));
				return this._waitingForFormatters[e] = s,
				s
			},
			m.prototype.snapshot = function (e) {
				var t = this;
				if (this._waitingForSnapshot[e]) return this._waitingForSnapshot[e];
				var n = new Promise((function (n, i) {
					if (t._snapshotValuesCache[e]) n(t._snapshotValuesCache[e]);
					else {
						var s = c.guid();
						t.subscribe(s, [e], (function (o) {
							"error" === o.status && (t._waitingForSnapshot[e] = null, i("Quotes snapshot is not received"));
							var r = o.values;
							r && r.minmov && r.pricescale && r.description && (t._waitingForSnapshot[e] = null, t._snapshotValuesCache[e] = r, n(r), t.unsubscribe(s, e))
						}))
					}
				}));
				return this._waitingForSnapshot[e] = n,
				n
			},
			TradingView.QuoteSessionMultiplexer = m,
			e && e.exports && (e.exports = m)
		},
		371856: (e, t, n) = > {
			"use strict";
			n.d(t, {
				japaneseChartStyles: () = > o,
				commonChartStyles: () = > r,
				allChartStyles: () = > a
			});
			var i = n(125226),
				s = n(611688);

			function o() {
				const e = [8];
				return s.enabled("japanese_chart_styles") && (e.push(4, 7, 5, 6), e.push(11)),
				e
			}
			function r() {
				const e = [0, 1, 9, 13, 2, 3, 10];
				return (0, i.isFeatureEnabled)("chart_style_hilo") && e.push(12),
				e
			}
			function a() {
				return r().concat(o())
			}
		},
		701336: (e, t, n) = > {
			"use strict";
			n.d(t, {
				NumericFormatter: () = > o
			});
			var i = n(689765),
				s = n(960521);
			class o {
				constructor(e) {
					this._precision = e
				}
				format(e) {
					return (void 0 !== this._precision ? e.toFixed(this._precision) : o.formatNoE(e)).replace(".", i.formatterOptions.decimalSign)
				}
				parse(e) {
					const t = e.replace(i.formatterOptions.decimalSign, ".");
					let n = parseFloat(t);
					return this._precision && (n = +n.toFixed(this._precision)),
					n
				}
				static formatNoE(e) {
					if (!Number.isFinite(e)) return String(e);
					const t = new s.Big(e);
					return t.lt(1) ? t.toFixed() : t.toString()
				}
			}
		},
		965513: (e, t, n) = > {
			"use strict";
			n.d(t, {
				PercentageFormatter: () = > o
			});
			var i = n(689765),
				s = n(143498);
			class o extends i.PriceFormatter {
				constructor(e) {
					super(e),
					this.type = "percentage"
				}
				state() {
					const e = i.PriceFormatter.prototype.state.call(this);
					return e.percent = !0,
					e
				}
				parse(e) {
					return e = e.replace("%", ""),
					super.parse(e)
				}
				format(e, t, n, i, o = !0) {
					const r = super.format(e, t, n, i, !1) + "%";
					return o ? (0, s.forceLTRStr)(r) : r
				}
				static serialize(e) {
					return e.state()
				}
				static deserialize(e) {
					return new o(e.priceScale)
				}
			}
		},
		591419: (e, t, n) = > {
			"use strict";
			n.d(t, {
				PLACE_HOLDER: () = > a,
				NOT_AVAILABLE_VOLUME_FORMATTER: () = > c,
				VolumeFormatter: () = > l
			});
			var i = n(787236),
				s = n(701336),
				o = n(270617),
				r = n(793751);
			const a = "---",
			c = 1e100;
			class l {
				constructor(e) {
					this.type = "volume",
					this._numericFormatter = new s.NumericFormatter,
					this._fractionalValues = void 0 !== e && e > 0,
					this._precision = e
				}
				state() {
					return {
						precision: this._precision
					}
				}
				format(e, t) {
					if (!(0, o.isNumber)(e)) return a;
					let n = "";
					return e < 0 ? (n = "−", e = -e) : e > 0 && t && (n = "+"),
					e >= c ? (0, i.t)("N/A") : (!this._fractionalValues || e >= 995 ? e = Math.round(e) : this._fractionalValues && (e = +e.toFixed(this._precision)), e < 995 ? n + this._formatNumber(e) : e < 999995 ? n + this._formatNumber(e / 1e3) + "K" : e < 999999995 ? (e = 1e3 * Math.round(e / 1e3), n + this._formatNumber(e / 1e6) + "M") : e < 999999999995 ? (e = 1e6 * Math.round(e / 1e6), n + this._formatNumber(e / 1e9) + "B") : (e = 1e9 * Math.round(e / 1e9), n + this._formatNumber(e / 1e12) + "T"))
				}
				parse(e) {
					if ("---" === e) return {
						error: "not a number",
						res: !1,
						value: NaN
					};
					const t = {
						K: 1e3,
						M: 1e6,
						B: 1e9
					},
					n = e.slice(-1);
					if (t.hasOwnProperty(n)) {
						const i = this._numericFormatter.parse(e.slice(0, -1));
						return (0, o.isNumber)(i) ? {
							res: !0,
							value: i * t[n]
						} : {
							error: "not a number",
							res: !1,
							value: NaN
						}
					} {
						const t = this._numericFormatter.parse(e);
						return (0, o.isNumber)(t) ? {
							res: !0,
							value: t
						} : {
							error: "not a number",
							res: !1,
							value: NaN
						}
					}
				}
				static serialize(e) {
					return e.state()
				}
				static deserialize(e) {
					return new l(e.precision)
				}
				_formatNumber(e) {
					return this._fractionalValues && (e = (0, r.fixComputationError)(e)),
					this._numericFormatter.format(e).replace(/(\.[1-9]*)0+$/, (e, t) = > t)
				}
			}
		},
		273044: (e, t, n) = > {
			"use strict";
			n.r(t),
			n.d(t, {
				ResolutionKind: () = > o,
				SpecialResolutionKind: () = > r,
				Interval: () = > u,
				isHour: () = > h
			});
			const i = /^(\d*)([TSHDWMR])$/,
			s = /^(\d+)$/;
			var o, r;
			!
			function (e) {
				e.Ticks = "ticks",
				e.Seconds = "seconds",
				e.Minutes = "minutes",
				e.Days = "days",
				e.Weeks = "weeks",
				e.Months = "months",
				e.Range = "range",
				e.Invalid = "invalid"
			}(o || (o = {})),


			function (e) {
				e.Hours = "hours"
			}(r || (r = {}));
			const a = {};
			a[o.Ticks] = 1e3,
			a[o.Seconds] = 1e3,
			a[o.Minutes] = 60 * a[o.Seconds],
			a[o.Days] = 1440 * a[o.Minutes],
			a[o.Weeks] = 7 * a[o.Days];
			const c = {
				T: o.Ticks,
				S: o.Seconds,
				D: o.Days,
				W: o.Weeks,
				M: o.Months,
				R: o.Range
			},
			l = new Set([o.Ticks, o.Seconds, o.Minutes]);
			class u {
				constructor(e, t) {
					this._kind = o.Invalid,
					this._multiplier = 0,
					e !== o.Invalid && t > 0 && (this._kind = e, this._multiplier = t)
				}
				kind() {
					return this._kind
				}
				multiplier() {
					return this._multiplier
				}
				isValid() {
					return this.kind() !== o.Invalid && this.multiplier() > 0
				}
				isDWM() {
					return this.isValid() && !this.isRange() && !this.isIntraday() && !this.isTicks()
				}
				isIntraday() {
					const e = l.has(this.kind());
					return this.isValid() && e
				}
				isSeconds() {
					return this.kind() === o.Seconds
				}
				isMinutes() {
					return this.kind() === o.Minutes
				}
				isMinuteHours() {
					return this.kind() === o.Minutes && h(this.multiplier())
				}
				isDays() {
					return this.kind() === o.Days
				}
				isWeeks() {
					return this.kind() === o.Weeks
				}
				isMonths() {
					return this.kind() === o.Months
				}
				isRange() {
					return this.kind() === o.Range
				}
				isTicks() {
					return this.kind() === o.Ticks
				}
				isTimeBased() {
					return !this.isRange()
				}
				letter() {
					return this.isValid() && this.kind() !== o.Minutes ? this.kind()[0].toUpperCase() : ""
				}
				value() {
					return this.isValid() ? this.kind() === o.Minutes ? this.multiplier() + "" : this.multiplier() + this.letter() : ""
				}
				isEqualTo(e) {
					if (!(e instanceof u)) throw new Error("Argument is not an Interval");
					return !(!this.isValid() || !e.isValid()) && (this.kind() === e.kind() && this.multiplier() === e.multiplier())
				}
				inMilliseconds(e = Date.now()) {
					if (!this.isValid() || this.isRange()) return NaN;
					if (this.isMonths()) {
						const t = new Date(e);
						t.setUTCMonth(t.getUTCMonth() + (this.multiplier() || 1));
						return +t - e
					}
					const t = this.multiplier();
					return a[this.kind()] * t
				}
				static isEqual(e, t) {
					return e === t || u.parse(e).isEqualTo(u.parse(t))
				}
				static parseExt(e) {
					e = (e + "").toUpperCase().split(",")[0];
					let t = i.exec(e);
					return null !== t ? "H" === t[2] ? {
						interval: new u(o.Minutes, 60 * d(t[1])),
						guiResolutionKind: r.Hours
					} : {
						interval: new u(c[t[2]], d(t[1])),
						guiResolutionKind: c[t[2]]
					} : (t = s.exec(e), null !== t ? {
						interval: new u(o.Minutes, d(t[1])),
						guiResolutionKind: o.Minutes
					} : {
						interval: new u(o.Invalid, 0),
						guiResolutionKind: o.Invalid
					})
				}
				static parse(e) {
					return u.parseExt(e).interval
				}
				static kind(e) {
					return u.parse(e).kind()
				}
				static isValid(e) {
					return u.parse(e).isValid()
				}
				static isDWM(e) {
					return u.parse(e).isDWM()
				}
				static isIntraday(e) {
					return u.parse(e).isIntraday()
				}
				static isSeconds(e) {
					return u.parse(e).isSeconds()
				}
				static isMinutes(e) {
					return u.parse(e).isMinutes()
				}
				static isMinuteHours(e) {
					return u.parse(e).isMinuteHours()
				}
				static isDays(e) {
					return u.parse(e).isDays()
				}
				static isWeeks(e) {
					return u.parse(e).isWeeks()
				}
				static isMonths(e) {
					return u.parse(e).isMonths()
				}
				static isRange(e) {
					return u.parse(e).isRange()
				}
				static isTicks(e) {
					return u.parse(e).isTicks()
				}
				static isTimeBased(e) {
					return u.parse(e).isTimeBased()
				}
				static normalize(e) {
					const t = u.parse(e);
					return t.isValid() ? t.value() : null
				}
			}
			function d(e) {
				return 0 === e.length ? 1 : parseInt(e, 10)
			}
			function h(e) {
				return e >= 60 && !(e % 60)
			}
		},
		195048: (e, t, n) = > {
			"use strict";
			n.r(t),
			n.d(t, {
				STATUS_OFFLINE: () = > i,
				STATUS_RESOLVING: () = > s,
				STATUS_LOADING: () = > o,
				STATUS_READY: () = > r,
				STATUS_INVALID_SYMBOL: () = > a,
				STATUS_SNAPSHOT: () = > c,
				STATUS_EOD: () = > l,
				STATUS_PULSE: () = > u,
				STATUS_DELAYED: () = > d,
				STATUS_DELAYED_STREAMING: () = > h,
				STATUS_NO_BARS: () = > _,
				STATUS_REPLAY: () = > m,
				STATUS_ERROR: () = > p,
				SERIES_STATUS_TEXT: () = > S,
				STYLE_LINE_TYPE_MARKERS: () = > f,
				STYLE_LINE_TYPE_STEP: () = > y,
				STYLE_LINE_TYPE_SIMPLE: () = > g,
				STYLE_BARS: () = > b,
				STYLE_CANDLES: () = > T,
				STYLE_LINE: () = > E,
				STYLE_AREA: () = > v,
				STYLE_RENKO: () = > C,
				STYLE_KAGI: () = > w,
				STYLE_PNF: () = > A,
				STYLE_PB: () = > R,
				STYLE_HEIKEN_ASHI: () = > I,
				STYLE_HOLLOW_CANDLES: () = > P,
				STYLE_BASELINE: () = > O,
				STYLE_RANGE: () = > L,
				STYLE_HILO: () = > D,
				STYLE_COLUMNS: () = > N,
				STYLE_SHORT_NAMES: () = > M,
				SYMBOL_STRING_DATA: () = > k
			});
			const i = 0,
			s = 1,
			o = 2,
			r = 3,
			a = 4,
			c = 5,
			l = 6,
			u = 7,
			d = 8,
			h = 9,
			_ = 10,
			m = 11,
			p = 12,
			S = {
				[i]: "connecting",
				[s]: "loading",
				[o]: "loading",
				[r]: "realtime",
				[a]: "invalid",
				[c]: "snapshot",
				[l]: "endofday",
				[u]: "endofday",
				[d]: "delayed",
				[h]: "delayed_streaming",
				[_]: "forbidden",
				[m]: "replay",
				[p]: "error"
			},
			f = 0,
			y = 1,
			g = 2,
			b = 0,
			T = 1,
			E = 2,
			v = 3,
			C = 4,
			w = 5,
			A = 6,
			R = 7,
			I = 8,
			P = 9,
			O = 10,
			L = 11,
			D = 12,
			N = 13,
			M = {
				0: "bar",
				1: "candle",
				9: "hollowCandle",
				2: "line",
				3: "area",
				4: "renko",
				7: "pb",
				5: "kagi",
				6: "pnf",
				8: "ha",
				10: "baseline",
				11: "range",
				12: "hilo",
				13: "column"
			},
			k = {
				4: {
					type: "BarSetRenko@tv-prostudies",
					basicStudyVersion: 40
				},
				7: {
					type: "BarSetPriceBreak@tv-prostudies",
					basicStudyVersion: 34
				},
				5: {
					type: "BarSetKagi@tv-prostudies",
					basicStudyVersion: 34
				},
				6: {
					type: "BarSetPnF@tv-prostudies",
					basicStudyVersion: 34
				},
				8: {
					type: "BarSetHeikenAshi@tv-basicstudies",
					basicStudyVersion: 60
				},
				11: {
					type: "BarSetRange@tv-basicstudies",
					basicStudyVersion: 72
				}
			}
		},
		749473: (e, t, n) = > {
			"use strict";
			n.r(t),
			n.d(t, {
				isRequiringRestartSeriesStyles: () = > g,
				isRangeBasedStyle: () = > b,
				isRangeStyle: () = > T,
				isTimeBasedStyle: () = > E,
				isValidStyle: () = > v,
				isSingleValueBasedStyle: () = > C,
				setLastUsedStyle: () = > w,
				getLastUsedStyle: () = > A,
				getLastUsedSingleValueBasedStyle: () = > R,
				getDefaultStyle: () = > I,
				getChartStyleByResolution: () = > P,
				chartStyleStudyId: () = > O,
				preparePriceAxisProperties: () = > L,
				hasProjection: () = > N,
				isPriceSourceStyle: () = > M,
				getSeriesPriceFormattingState: () = > k,
				createSeriesFormatter: () = > U,
				symbolCurrencyConvertible: () = > x,
				symbolCurrency: () = > F,
				symbolOriginalCurrency: () = > B,
				symbolBaseCurrency: () = > Y,
				isConvertedToOtherCurrency: () = > H,
				symbolUnitConvertible: () = > V,
				symbolUnit: () = > W,
				symbolOriginalUnit: () = > q,
				isConvertedToOtherUnit: () = > j,
				symbolUnitConvertibleGroupsIfExist: () = > $,
				symbolCurrentContract: () = > K,
				symbolHasPreOrPostMarket: () = > G,
				symbolHasSeveralSessions: () = > X,
				symbolHasEconomicEvents: () = > J,
				extractSymbolNameFromSymbolInfo: () = > z,
				symbolTitle: () = > Q,
				displayedSymbolName: () = > Z,
				displayedSymbolExchange: () = > ee,
				actualSymbol: () = > te,
				proSymbol: () = > ne,
				symbolForApi: () = > ie,
				isRegularSessionId: () = > se,
				isCloseBasedSymbol: () = > oe,
				isMeasureUnitSymbol: () = > re,
				measureUnitId: () = > ae,
				hasVolume: () = > ce,
				isEconomicSymbol: () = > le,
				getStudySymbolExchange: () = > ue,
				isFutureContinuousSymbolWithBackajustment: () = > de,
				isCryptoSymbol: () = > he
			});
			var i = n(62802),
				s = n(195048),
				o = n(273044),
				r = n(689765),
				a = n(611688),
				c = n(588537),
				l = n(591419),
				u = n(965513);
			const d = a.enabled("pay_attention_to_ticker_not_symbol"),
			h = a.enabled("uppercase_instrument_names"),
			_ = a.enabled("charting_library_single_symbol_request"),
			m = a.enabled("use_ticker_on_symbol_info_update"),
			p = [4, 5, 6, 7, 8],
			S = [4, 5, 6, 7, 11],
			f = [0, 1, 9, 2, 3, 10, 8, 13],
			y = [2, 10, 3, 13];

			function g(e) {
				return -1 !== p.indexOf(e)
			}
			function b(e) {
				return -1 !== S.indexOf(e)
			}
			function T(e) {
				return 11 === e
			}
			function E(e) {
				return -1 !== f.indexOf(e)
			}
			function v(e) {
				return b(e) || E(e)
			}
			function C(e) {
				switch (e) {
				case 3:
				case 10:
				case 2:
				case 13:
					return !0;
				default:
					return !1
				}
			}
			function w(e, t) {
				v(e) && (11 !== e && i.setValue("chart.lastUsedStyle", e), oe(t) && C(e) && i.setValue("chart.lastUsedSingleValueBasedStyle", e))
			}
			function A() {
				const e = i.getInt("chart.lastUsedStyle");
				return void 0 === e ? 1 : e
			}
			function R() {
				const e = i.getInt("chart.lastUsedSingleValueBasedStyle");
				return void 0 === e ? 2 : e
			}
			function I(e) {
				return e ? 11 : 1
			}
			function P(e, t) {
				const n = T(t),
				i = o.Interval.isRange(e);
				return !n && i ? I(!0) : n && !i ? I(!1) : t
			}
			function O(e, t) {
				const n = s.SYMBOL_STRING_DATA[e];
				return void 0 === n ? null : t ? `$ {
					n.type
				} - $ {
					n.basicStudyVersion
				}` : n.type
			}
			function L(e) {
				const t = e.priceAxisProperties,
				n = t.lockScale.value(),
				i = 6 === e.style.value();
				(i || n) && (t.log.setValue(!1), t.percentage.setValue(!1)),
				t.logDisabled.setValue(!(!i && !n)),
				t.percentageDisabled.setValue(!(!i && !n))
			}
			const D = [4, 7, 5, 6];

			function N(e) {
				return -1 !== D.indexOf(e)
			}
			function M(e) {
				return y.includes(e)
			}
			function k(e, t = "default", n = !1) {
				let i,
				s,
				o = 100,
				r = 1;
				if ("default" === t) null != e && (o = e.pricescale, r = e.minmov, i = e.fractional, s = e.minmove2);
				else {
					let e = t.split(",");
					3 !== e.length && (e = ["100", "1", "false"]),
					o = parseInt(e[0]),
					r = parseInt(e[1]),
					i = "true" === e[2]
				}
				return n && (r = 1),
				{
					priceScale: o,
					minMove: r,
					fractional: i,
					minMove2: s
				}
			}
			function U(e, t, n = !1) {
				if ("default" === t && null != e) {
					const t = e.formatter || e.format;
					if ("volume" === t) return new l.VolumeFormatter(2);
					if ("percent" === t) return new u.PercentageFormatter(e.pricescale)
				}
				const {
					priceScale: i,
					minMove: s,
					fractional: o,
					minMove2: a
				} = k(e, t, n);
				return new r.PriceFormatter(i, s, o, a)
			}
			function x(e) {
				return null !== e && "spread" !== e.type
			}
			function F(e, t, n) {
				if (null === e) return null;
				const i = !t || n ? e.currency_id : e.currency_code;
				return void 0 === i || "" === i || "pct" === i ? null : i
			}
			function B(e, t) {
				const n = t ? e.original_currency_code : e.original_currency_id;
				return "pct" === n ? null : null != n ? n : F(e, t)
			}
			function Y(e) {
				return e.base_currency_id || null
			}
			function H(e) {
				return !(null === e || !x(e)) && (void 0 !== e.original_currency_id && e.original_currency_id !== e.currency_id)
			}
			function V(e, t) {
				return t && null !== e && "spread" !== e.type
			}
			function W(e, t) {
				if (null === e || !t) return null;
				const n = e.unit_id;
				return void 0 === n || "" === n ? null : n
			}
			function q(e, t) {
				return t ? e.original_unit_id || W(e, t) : null
			}
			function j(e, t) {
				return !(null === e || !V(e, t)) && (void 0 !== e.original_unit_id && e.original_unit_id !== e.unit_id)
			}

			function $(e, t) {
				return null !== e && V(e, t) ? e.unit_conversion_types || null : []
			}
			function K(e) {
				return "futures" === e.type && e.front_contract || null
			}
			function G(e) {
				return null !== e && void 0 !== e.subsessions && e.subsessions.some(e = > "premarket" === e.id || "postmarket" === e.id)
			}
			function X(e) {
				return null !== e && void 0 !== e.subsessions && e.subsessions.filter(e = > !e.private).length > 1
			}
			function J(e) {
				return null !== e && ("forex" === e.type || "cfd" === e.type || he(e))
			}
			function z(e, t) {
				let n = e && (e.pro_name || e.full_name || e.name);
				return _ && t ? n = t : m && e && e.ticker && (n = e.ticker),
				h && n && (n = n.toUpperCase()),
				n
			}
			function Q(e, t, n = "exchange") {
				return t ? e.name : `$ {
					e.name
				},
				$ {
					e[n]
				}`
			}
			function Z(e) {
				let t = e && (K(e) || e.name) || "";
				return t.length > 40 && (t = t.substring(0, 37) + "..."),
				t.trim()
			}
			function ee(e) {
				const t = e ? e.exchange : "";
				return h ? t.toUpperCase() : t
			}
			function te(e, t) {
				return null !== e ? e.full_name : t
			}
			function ne(e, t) {
				return null !== e ? e.pro_name : t
			}
			function ie(e, t) {
				return d && e ? (0, c.ensureDefined)(e.ticker) : te(e, t)
			}
			function se(e) {
				return "regular" === e || "us_regular" === e
			}
			function oe(e) {
				return "c" === (null == e ? void 0 : e.visible_plots_set)
			}
			function re(e) {
				return null !== e && ("unit" === e.measure && null !== ae(e))
			}
			function ae(e) {
				var t;
				return null !== (t = null == e ? void 0 : e.value_unit_id) && void 0 !== t ? t : null
			}
			function ce(e) {
				return void 0 !== e.visible_plots_set ? "ohlcv" === e.visible_plots_set : !e.has_no_volume
			}
			function le(e) {
				return null !== e && "economic" === e.type
			}
			function ue(e) {
				return le(e) && e.source ? e.source : e.exchange && 0 !== e.exchange.length ? e.exchange : void 0
			}
			function de(e) {
				var t;
				return null !== e && "futures" === e.type && Boolean(e.has_backadjustment && (null === (t = e.typespecs) || void 0 === t ? void 0 : t.includes("continuous")))
			}
			function he(e) {
				var t;
				return (null === (t = e.typespecs) || void 0 === t ? void 0 : t.includes("crypto")) || "crypto" === e.type || "bitcoin" === e.type
			}
		},
		68522: (e, t, n) = > {
			"use strict";
			window.TradingView = window.TradingView || {},
			window.requireAll = function (e) {
				return e.keys().map(e)
			},
			n(823127),
			n(787236),
			n(778785).setClasses(),
			n(760947),
			n(128327).install(),
			n(8587),
			n(560170),
			n(835664),
			n(255091),
			n(638456),
			n(270617),
			n(72461),
			n(897116),
			n(296150),
			n(247872),
			n(351299),
			n(934440),
			n(834925),
			n(125226),
			n(49437),
			n(694755),
			n(250109),
			n(62802)
		},
		883721: (e, t, n) = > {
			"use strict";
			n.d(t, {
				handleJSONRequest: () = > o
			});
			var i = n(86674);

			function s({
				path: e,
				requestData: t
			}) {
				const n = new URL(e, window.origin);
				if ("GET" === t.method && t.query) for (const[e, i] of Object.entries(t.query)) void 0 !== i && n.searchParams.append(e, i);
				const s = {
					method: t.method,
					credentials: "same-origin"
				};
				return "POST" !== t.method && "PUT" !== t.method || (s.body = JSON.stringify(t.body), s.headers = new Headers({
					"Content-Type": "application/json"
				})),
				(0, i.fetch)(n.toString(), s)
			}
			async
			function o(e) {
				const t = await s(e);
				try {
					const e = await t.json();
					return t.ok ? e : Promise.reject(new r(t.status, e))
				} catch (e) {
					return Promise.reject(new r(t.status, {}))
				}
			}
			class r extends Error {
				constructor(e, t) {
					super([e, t.code, t.detail].filter(Boolean).join(" - ")),
					this.status = e,
					this.payload = t,
					this.name = "APIError",
					Object.setPrototypeOf(this, new.target.prototype)
				}
			}
		},
		3008: (e, t, n) = > {
			"use strict";

			function i(e, t, n) {
				return e * (1 - n) + t * n
			}
			n.d(t, {
				lerp: () = > i,
				doAnimate: () = > r
			});
			const s = {
				from: 0,
				duration: 250,
				easing: n(876242).easingFunc.easeOutCubic
			};
			class o {
				constructor(e) {
					this._doing = !0,
					this._completed = !1,
					this._options = {...s,
						...e
					};
					const t = performance.now();
					window.requestAnimationFrame(e = > {
						this._animation(t, this._options.from, e)
					})
				}
				stop() {
					this._doing = !1
				}
				completed() {
					return this._completed
				}
				_animation(e, t, n) {
					if (!this._doing) return void this._finishAnimation();
					const s = (n = !n || n < 1e12 ? performance.now() : n) - e,
					o = s >= this._options.duration || t === this._options.to,
					r = i(this._options.from, this._options.to, this._options.easing(s / this._options.duration)),
					a = o ? this._options.to : r,
					c = a - t;
					this._options.onStep(c, a),
					o ? this._finishAnimation() : window.requestAnimationFrame(t = > {
						this._animation(e, a, t)
					})
				}
				_finishAnimation() {
					this._options.onComplete && this._options.onComplete(),
					this._completed = !0
				}
			}
			function r(e) {
				return new o(e)
			}
		},
		246433: (e, t, n) = > {
			"use strict";
			var i;
			n.d(t, {
				ConnectionStatus: () = > i
			}),


			function (e) {
				e[e.Closed = 0] = "Closed",
				e[e.Connecting = 1] = "Connecting",
				e[e.Open = 2] = "Open"
			}(i || (i = {}))
		},
		673438: (e, t, n) = > {
			"use strict";
			n.d(t, {
				PersistentTransport: () = > u
			});
			var i = n(246433),
				s = n(55111),
				o = n(262325),
				r = n.n(o),
				a = n(97639),
				c = n.n(a),
				l = n(761068);
			class u {
				constructor(e, t, n) {
					this._url = "",
					this._socket = null,
					this._reconnectCount = 0,
					this._onlineCancellationToken = null,
					this._connectionStatus = new(r())(i.ConnectionStatus.Closed),
					this._socketCloseHandler = this._onCloseCallback.bind(this),
					this._socketErrorHandler = this._onErrorCallback.bind(this),
					this._socketOpenHandler = this._onOpenCallback.bind(this),
					this._socketMessageHandler = this._onMessageCallback.bind(this),
					this._maxReconnectReachedEventDelegate = new(c()),
					this._shouldReconnect = !0,
					this._maxReconnectCount = null,
					this._reconnectTimeoutId = 0,
					this._connectAbortController = null,
					this._tryReconnect = () = > {
						if (this._disconnect(), this._shouldReconnect) {
							const e = this._getReconnectTimeout();
							this._logger.logNormal(`Sleeping some time before reconnect $ {
								e
							}
							ms`),
							this._reconnectTimeoutId = setTimeout(this._tryReconnectImpl.bind(this), e)
						} else this._logger.logNormal("Skip reconnecting because of shouldReconnect state")
					},
					this._onOfflineHandler = () = > {
						this._removeOnOfflineListener(),
						this._logger.logInfo("Network status changed to offline - trying to reconnect"),
						this._tryReconnect()
					},
					this._logger = t,
					this._messageHandler = e,
					this._closeHandler = n,
					window.addEventListener("unload", () = > {
						t.logNormal("Unload event comes - disconnecting without reconnect after that..."),
						this._shouldReconnect = !1,
						this._disconnect()
					}, !1)
				}
				setUrl(e) {
					if (this._url === e) return;
					const t = this._connectionStatus.value() !== i.ConnectionStatus.Closed;
					t && this._disconnect(),
					this._url = e,
					t && this.connect()
				}
				url() {
					return this._url
				}
				connect() {
					this._connectImpl()
				}
				setMaxReconnectCount(e) {
					this._maxReconnectCount = e
				}
				connectionStatus() {
					return this._connectionStatus.readonly()
				}
				disconnect() {
					this._shouldReconnect = !1,
					this._disconnect()
				}
				maxReconnectReachedEvent() {
					return this._maxReconnectReachedEventDelegate
				}
				async _prepareParamsForConnection(e) {}
				_disconnect() {
					var e;
					null === (e = this._connectAbortController) || void 0 === e || e.abort(),
					this._connectAbortController = null,
					clearTimeout(this._reconnectTimeoutId),
					this._reconnectTimeoutId = 0,
					this._connectionStatus.value() !== i.ConnectionStatus.Closed ? this._socket ? (this._logger.logNormal(`Closing connection to: $ {
						this._socket.url
					}, currentStatus: $ {
						i.ConnectionStatus[this._connectionStatus.value()]
					}`), this._disconnectTransport()) : this._logger.logNormal("Disconnecting without socket - probably within preparing, it should be already scheduled for aborting") : this._logger.logNormal("Attempt to close connection but it is closed already")
				}
				_onErrorCallback() {
					this._logger.logInfo("Connection is closed by error"),
					this._tryReconnect()
				}
				_onCloseCallback(e) {
					var t;
					this._logger.logInfo(`Connection is closed - code = $ {
						e.code
					}
					msg = $ {
						e.reason
					}`),
					null === (t = this._closeHandler) || void 0 === t || t.call(this, e),
					this._tryReconnect()
				}
				_tryReconnectImpl() {
					return null !== this._maxReconnectCount && this._reconnectCount === this._maxReconnectCount ? (this._logger.logWarn("Maximum attempts to reconnect to websocket reached"), void this._maxReconnectReachedEventDelegate.fire()) : (this._reconnectCount += 1, this._logger.logInfo("Reconnecting count: " + this._reconnectCount), navigator.onLine ? (this._logger.logInfo("Network status: online - trying to connect"), void this.connect()) : (this._logger.logInfo("Network status: offline - wait until online"), void(this._onlineCancellationToken = (0, s.callWhenOnline)(() = > {
						this._logger.logInfo("Network status changed to online - trying to connect"),
						this.connect()
					}))))
				}
				_onOpenCallback() {
					this._logger.logNormal("Connection opened"),
					this._reconnectCount = 0,
					this._connectionStatus.setValue(i.ConnectionStatus.Open)
				}
				_onMessageCallback(e) {
					this._messageHandler(e.data)
				}
				_getReconnectTimeout() {
					return this._reconnectCount < 5 ? 300 : 5e3
				}
				_setOnOfflineListener() {
					window.addEventListener("offline", this._onOfflineHandler)
				}
				_removeOnOfflineListener() {
					window.removeEventListener("offline", this._onOfflineHandler)
				}
				async _connectImpl() {
					if (this._connectionStatus.value() !== i.ConnectionStatus.Closed) return void this._logger.logNormal("Attempt to open connection but it is not closed");
					this._socket && (this._logger.logError("Something went wrong - code 0x2"), this.disconnect()),
					this._onlineCancellationToken && (this._onlineCancellationToken(), this._onlineCancellationToken = null),
					this._logger.logNormal("Connecting to " + this._url),
					this._shouldReconnect = !0,
					this._connectAbortController = new AbortController;
					const e = this._connectAbortController.signal;
					try {
						if (this._connectionStatus.setValue(i.ConnectionStatus.Connecting), await this._prepareParamsForConnection(e), e.aborted) throw (0, l.createAbortError)();
						this._socket = this._createNativeTransport(this._url),
						this._setOnOfflineListener()
					} catch (e) {
						this._connectionStatus.setValue(i.ConnectionStatus.Closed),
						(0, l.skipAbortError)(e)
					} finally {
						this._connectAbortController = null
					}
				}
			}
		},
		876242: (e, t, n) = > {
			"use strict";
			n.r(t),
			n.d(t, {
				CubicBezier: () = > i.CubicBezier,
				color: () = > i.color,
				dur: () = > i.dur,
				easingFunc: () = > i.easingFunc
			});
			var i = n(745269)
		},
		888035: (e, t, n) = > {
			"use strict";
			var i;
			n.d(t, {
				BillingCycle: () = > i
			}),


			function (e) {
				e.Monthly = "m",
				e.ThreeMonths = "3m",
				e.OneYear = "y",
				e.TwoYears = "2y"
			}(i || (i = {}))
		},
		348102: (e, t, n) = > {
			"use strict";
			n.d(t, {
				getCountries: () = > o
			});
			var i = n(86674);
			let s = null;
			async
			function o() {
				var e;
				if (null !== s) return s;
				const t = await(0, i.fetch)("/accounts/countries/", {
					credentials: "include"
				});
				if (!t.ok) {
					const e = await t.json();
					throw Error(String(e))
				}
				const n = await t.json();
				return s = {...n,
					current_country_code: null !== (e = n.current_country_code) && void 0 !== e ? e : "US"
				},
				s
			}
		},
		809965: (e, t, n) = > {
			"use strict";
			var i, s, o;
			n.d(t, {
				ProPlans: () = > i,
				BrokerPlansIds: () = > o
			}),


			function (e) {
				e.Free = "free",
				e.Pro = "pro",
				e.ProTrial = "pro_trial",
				e.ProRealtime = "pro_realtime",
				e.ProRealtimeTrial = "pro_realtime_trial",
				e.ProPremium = "pro_premium",
				e.ProPremiumTrial = "pro_premium_trial",
				e.ProMiniAlerts = "pro_mini_alerts",
				e.ProMiniAds = "pro_mini_ads",
				e.ProMiniLayouts = "pro_mini_layouts",
				e.ProEdu = "pro_edu"
			}(i || (i = {})),


			function (e) {
				e.Platinum = "platinum",
				e.Gold = "gold",
				e.Silver = "silver",
				e.Free = "free"
			}(s || (s = {})),


			function (e) {
				e[e.Platinum = 3] = "Platinum",
				e[e.Gold = 2] = "Gold",
				e[e.Silver = 1] = "Silver",
				e[e.Free = 0] = "Free"
			}(o || (o = {}))
		},
		629588: (e, t, n) = > {
			"use strict";
			n.d(t, {
				createGoProDialog: () = > r
			});
			const i = new Set,
			s = [],
			o = new Promise(e = > {
				window.addEventListener("load", () = > {
					setTimeout(() = > {
						e()
					}, 3e3)
				}),
				setTimeout(() = > {
					e()
				}, 3e3)
			});
			async
			function r(e) {
				var t;
				if (await o, s.forEach(t = > {
					t(e.feature)
				}), i.has(e.feature)) return;
				const r = await Promise.all([n.e(69129), n.e(82888), n.e(25113), n.e(34956), n.e(18844), n.e(25380), n.e(39961), n.e(5723), n.e(14608), n.e(16036), n.e(87995), n.e(24377), n.e(38578), n.e(89137), n.e(5246)]).then(n.bind(n, 887426));
				await(null === (t = window.pro) || void 0 === t ? void 0 : t.ensureValidShopConf()),
				r.renderGoproDialog(e)
			}
			window.TradingView.createGoProDialog = r
		},
		338733: (e, t, n) = > {
			"use strict";

			function i(e) {
				return Promise.all([n.e(69129), n.e(82888), n.e(48463), n.e(25113), n.e(34956), n.e(86363), n.e(31205), n.e(2e3), n.e(15998), n.e(7427), n.e(69875), n.e(8879), n.e(66333), n.e(47552), n.e(18844), n.e(93713), n.e(25380), n.e(3848), n.e(81692), n.e(24555), n.e(6750), n.e(17662), n.e(5723), n.e(69565), n.e(31253), n.e(16767), n.e(67546), n.e(51891), n.e(62525), n.e(30413), n.e(81201), n.e(24731), n.e(1320), n.e(54194), n.e(31359), n.e(87995), n.e(91201), n.e(9541), n.e(85518), n.e(53286), n.e(70368), n.e(46877), n.e(16416), n.e(27737), n.e(78703)]).then(n.bind(n, 911009)).then(t = > t.openPaymentOrderDialog(e))
			}
			n.d(t, {
				showPaymentOrderDialog: () = > i
			})
		},
		706162: (e, t, n) = > {
			"use strict";
			var i;
			n.d(t, {
				StatusExtraData: () = > i
			}),


			function (e) {
				e.Enable = "enable",
				e.Disable = "disable"
			}(i || (i = {}))
		},
		459689: (e, t, n) = > {
			"use strict";
			n.d(t, {
				check: () = > s
			});
			var i = n(348102);
			async
			function s() {
				const {
					is_restricted: e
				} = await(0, i.getCountries)();
				return e
			}
		},
		224314: (e, t, n) = > {
			"use strict";
			n.r(t),
			n.d(t, {
				showRestrictedCountryNotificationDialog: () = > o
			});
			var i = n(787236),
				s = n(779923);

			function o() {
				(0, s.showWarning)({
					title: (0, i.t)("We can't accept your payment right now"),
					text: (0, i.t)("TradingView needs to comply with U.S. trade embargoes and economic sanctions, so we're unable to accept any payments from the region you're in at the moment.")
				})
			}
		},
		296150: (e, t, n) = > {
			"use strict";
			var i = n(823127);
			const s = n(911905).getLogger("Chart.FollowSymbolsButton"),
			o = n(132317).trackActionFollow,
			r = n(84119).followSymbol;
			!
			function () {
				var e = {};

				function t(t) {
					if (!t.symbol) return i.Deferred().reject().promise();
					if (null == t.follow && Object.prototype.hasOwnProperty.call(e, t.symbol)) return e[t.symbol].promise;
					var n = i.Deferred(),
						s = n.promise();
					return e[t.symbol] || (e[t.symbol] = {}),
					e[t.symbol].promise = s,
					r(t).then(i = > {
						i.error ? n.reject(i) : (n.resolve(i), i.symbol !== t.symbol && (e[i.symbol] = e[t.symbol]))
					}).
					catch (() = > {
						n.reject.apply(n, arguments)
					}),
					s
				}
				function n(e, n) {
					return t({
						symbol: e,
						follow: + !! n
					}).done((function (t) {
						var n = t.followTheSymbol;
						a(e, n)
					})).promise()
				}
				function a(e, t) {
					i(".js-follow-symbol").each((function () {
						var n = i(this);
						n.data("symbol") === e && l(n, t)
					}))
				}
				function c() {
					for (var t in e) delete e[t];
					l(i(".js-follow-symbol"), !1)
				}
				function l(e, t) {
					t = !! t,
					e.each((function () {
						var e = i(this);
						e.toggleClass("js-follow-symbol--followed", t).toggleClass(e.data("follow-symbol-button-followed-style-class") ? e.data("follow-symbol-button-followed-style-class") : "i-checked", t)
					}))
				}
				i(document).on("click", ".js-follow-symbol", (function (e) {
					var t = i(this),
						s = t.data("symbol"),
						r = t.data("type");
					s && runOrSignIn((function () {
						var e = function (e) {
							return e.hasClass("js-follow-symbol--followed")
						}(t),
							i = n(s, !e),
							a = e ? "Unfollow" : "Follow",
							c = {
								symbol: s,
								symbolType: r
							};
						l(t, !e),
						o("Symbol", a, c),
						i.fail((function () {
							l(t, e)
						}))
					}), {
						source: "Follow symbol button"
					})
				})),
				TradingView.FollowSymbols = {
					changeState: n,
					makeButton: function (e) {
						var n = (e = e || {}).$button,
							o = e.symbol;
						return n ? (n.addClass("js-follow-symbol tv-button tv-button--success"), o || (o = n.data("symbol"))) : n = i('<span class="js-follow-symbol tv-button tv-button--success">'),
						n.data({
							"follow-symbol-button-followed-style-class": "i-checked",
							"follow-symbol-button-change-text": void 0 === e.changeText || !! e.changeText
						}),
						o ? (t({
							symbol: o
						}).pipe((function (e) {
							n.attr("data-symbol", e.symbol),
							l(n, e.followTheSymbol)
						})), n) : (s.logError("symbol is required"), n)
					},
					request: t
				},
				i((function () {
					loginStateChange.subscribe(TradingView.FollowSymbols, (function (n) {
						n || (window.is_authenticated ? (c(), i(".js-follow-symbol").each((function () {
							var n = i(this).data("symbol");
							n && (Object.prototype.hasOwnProperty.call(e, n) || t({
								symbol: n
							}).done((function (e) {
								a(e.symbol, e.followTheSymbol)
							})))
						}))) : c())
					}))
				}))
			}()
		},
		735357: (e, t, n) = > {
			"use strict";
			var i = n(787236).t;
			n(897116);
			var s = n(324951),
				o = n(414879),
				r = o.WeekDays,
				a = o.Months,
				c = n(936410),
				l = c.monthsFullNames,
				u = c.monthsShortNames,
				d = c.weekDaysFullNames,
				h = c.weekDaysShortNames,
				_ = c.weekDaysMiniNames;
			window.language && (s.locale(window.language, {
				months: [l[a.JANUARY], l[a.FEBRUARY], l[a.MARCH], l[a.APRIL], l[a.MAY], l[a.JUNE], l[a.JULY], l[a.AUGUST], l[a.SEPTEMBER], l[a.OCTOBER], l[a.NOVEMBER], l[a.DECEMBER]],
				monthsShort: [u[a.JANUARY], u[a.FEBRUARY], u[a.MARCH], u[a.APRIL], u[a.MAY], u[a.JUNE], u[a.JULY], u[a.AUGUST], u[a.SEPTEMBER], u[a.OCTOBER], u[a.NOVEMBER], u[a.DECEMBER]],
				weekdays: [d[r.SUNDAY], d[r.MONDAY], d[r.TUESDAY], d[r.WEDNESDAY], d[r.THURSDAY], d[r.FRIDAY], d[r.SATURDAY]],
				weekdaysShort: [h[r.SUNDAY], h[r.MONDAY], h[r.TUESDAY], h[r.WEDNESDAY], h[r.THURSDAY], h[r.FRIDAY], h[r.SATURDAY]],
				weekdaysMin: [_[r.SUNDAY], _[r.MONDAY], _[r.TUESDAY], _[r.WEDNESDAY], _[r.THURSDAY], _[r.FRIDAY], _[r.SATURDAY]],
				longDateFormat: {
					LT: "HH:mm",
					LTS: "HH:mm:ss",
					L: "MMM D",
					l: "M/D/YYYY",
					LL: "MMM D, YYYY",
					ll: "MMM D LT",
					LLL: "LT - LL",
					lll: "MMM D, YYYY LT",
					LLLL: "ddd D MMMM YYYY LT",
					llll: "ddd D MMM YYYY LT"
				},
				calendar: {
					sameDay: i("{specialSymbolOpen}Today at{specialSymbolClose} {dayTime}").format({
						specialSymbolOpen: "[",
						specialSymbolClose: "]",
						dayTime: "LT"
					}),
					nextDay: i("{specialSymbolOpen}Tomorrow at{specialSymbolClose} {dayTime}").format({
						specialSymbolOpen: "[",
						specialSymbolClose: "]",
						dayTime: "LT"
					}),
					nextWeek: i("{dayName} {specialSymbolOpen}at{specialSymbolClose} {dayTime}").format({
						specialSymbolOpen: "[",
						specialSymbolClose: "]",
						dayTime: "LT",
						dayName: "dddd"
					}),
					lastDay: i("{specialSymbolOpen}Yesterday at{specialSymbolClose} {dayTime}").format({
						specialSymbolOpen: "[",
						specialSymbolClose: "]",
						dayTime: "LT"
					}),
					lastWeek: i("{specialSymbolOpen}Last{specialSymbolClose} {dayName} {specialSymbolOpen}at{specialSymbolClose} {dayTime}").format({
						specialSymbolOpen: "[",
						specialSymbolClose: "]",
						dayTime: "LT",
						dayName: "dddd"
					}),
					sameElse: "L"
				},
				relativeTime: {
					future: function (e) {
						return e === i("just now") ? e : i("in %s", {
							context: "time_range"
						}).replace("%s", e)
					},
					past: function (e) {
						return e === i("just now") ? e : i("%s ago", {
							context: "time_range"
						}).replace("%s", e)
					},
					s: i("just now"),
					m: function (e) {
						return i("%d minute", {
							plural: "%d minutes",
							count: e
						}).replace("%d", e)
					},
					mm: function (e) {
						return i("%d minute", {
							plural: "%d minutes",
							count: e
						}).replace("%d", e)
					},
					h: i("an hour"),
					hh: function (e) {
						return i("%d hour", {
							plural: "%d hours",
							count: e
						}).replace("%d", e)
					},
					d: i("a day"),
					dd: function (e) {
						return i("%d day", {
							plural: "%d days",
							count: e
						}).replace("%d", e)
					},
					M: i("a month"),
					MM: function (e) {
						return i("%d month", {
							plural: "%d months",
							count: e
						}).replace("%d", e)
					},
					y: i("a year"),
					yy: function (e) {
						return i("%d year", {
							plural: "%d years",
							count: e
						}).replace("%d", e)
					}
				},
				week: {
					dow: 1,
					doy: 4
				}
			}), s.locale(window.language)),
			e.exports = s
		},
		314370: (e, t, n) = > {
			"use strict";
			var i = n(86674).fetch,
				s = n(893278).visitPaymentPage,
				o = n(888035).BillingCycle,
				r = n(97639),
				a = n(588948).getFreshInitData;
			n(860779);
			var c = a();

			function l(e) {
				if (this._freeProductIds = ["tv-scripting", "tv-basicstudies", "tv-prostudies", "Script$USER", "Script$EDGR", "ESD$TV"], this.packagesUpdated = new r, !e) return this._products = this._discounts = {},
				void(this._offers = this._order = []);
				this._products = {},
				this._discounts = {},
				this._offers = e.offers,
				this._order = [],
				this._invalidShopConf = !0,
				"undefined" != typeof window && window.loginStateChange.subscribe(this, this.onLoginStateChange)
			}
			l.prototype.PRODUCT_TYPES = {
				pro_plan: 1,
				study_package: 2,
				news_feed: 3,
				exchange: 4,
				connection: 6,
				coins: 8
			},
			l.prototype.updateShopConf = function (e) {
				return this._shopConfPromise || (this._shopConfPromise = i("/market/shopconf/", {
					credentials: "include"
				}).then((function (e) {
					return e.json()
				})).then(function (t) {
					this._products = t.all_products && JSON.parse(t.all_products) || {},
					this._discounts = t.discounts && JSON.parse(t.discounts) || {},
					this._offers = t.offers && JSON.parse(t.offers) || [],
					this._order = t.order && JSON.parse(t.order) || [],
					this._invalidShopConf = !1,
					delete this._shopConfPromise,
					e || this.packagesUpdated.fire()
				}.bind(this)).
				catch (function () {
					delete this._shopConfPromise
				}.bind(this))),
				this._shopConfPromise
			},
			l.prototype.invalidateShopConf = function () {
				this._invalidShopConf = !0
			},
			l.prototype.isInvalidShopConf = function () {
				return !!this._invalidShopConf
			},
			l.prototype.ensureValidShopConf = function () {
				return new Promise(function (e) {
					return this.runOrUpdate(e)
				}.bind(this))
			},
			l.prototype.onLoginStateChange = function (e) {
				e || this.updateShopConf()
			},
			l.prototype.runOrUpdate = function (e, t) {
				this.isInvalidShopConf() ? this.updateShopConf(t).then(e) : e()
			},
			l.prototype.getIDCExchanges = function (e) {
				var t = this._products;
				if (c) if (e) {
					if (c.idc_delay_exchanges_list) return c.idc_delay_exchanges_list
				} else if (c.idc_exchanges_list) return c.idc_exchanges_list;
				return Object.keys(t).filter((function (n) {
					return e ? t[n].idc_service_codes_delay : t[n].idc_service_codes
				})).map((function (e) {
					return t[e].exchange
				}))
			},
			l.prototype.getProduct = function (e) {
				if (e in this._products) return this._products[e];
				if (this.isDiscountProductId(e)) {
					var t = this._discounts[e],
						n = Object.assign({
							discount_text_id: e
						}, this._products[t.product]);
					return t.cost && (n.cost = t.cost),
					t.cost_annual && (n.cost_annual = t.cost_annual),
					t.cost_biennial && (n.cost_biennial = t.cost_biennial),
					void 0 !== t.fixed_cost && (n.fixed_cost = t.fixed_cost),
					void 0 !== t.extra_days && (n.extra_days = t.extra_days),
					void 0 !== t.billing_cycle && (n.billing_cycle = t.billing_cycle),
					n
				}
				return {}
			},
			l.prototype.findProduct = function (e) {
				return new Promise(function (t) {
					var n = function () {
						t(this.getProduct(e))
					}.bind(this);
					if (!this.isInvalidShopConf()) return n();
					this.updateShopConf().then(n).
					catch (n)
				}.bind(this))
			},
			l.prototype.isProductDefined = function (e) {
				return !(!e || !Object.keys(e).length)
			},
			l.prototype.getDiscountProduct = function (e) {
				return this._discounts[e] || {}
			},
			l.prototype.isOffer = function (e, t) {
				var n = this._discounts;
				return Object.keys(n).filter((function (e) {
					return !n[e].expired && n[e].offer_type === t
				})).includes(e)
			},
			l.prototype.getProductId = function (e) {
				return e && (e.discount_text_id || e.text_id) || ""
			},
			l.prototype.isDiscountProductId = function (e) {
				return e in this._discounts
			},
			l.prototype.isPlan = function (e) {
				return e.type === this.PRODUCT_TYPES.pro_plan
			},
			l.prototype.isExchange = function (e) {
				return e.type === this.PRODUCT_TYPES.exchange
			},
			l.prototype.getActiveExchanges = function () {
				return this.getProductsByType(this.PRODUCT_TYPES.exchange).filter((function (e) {
					return !e.disabled && Boolean(e.cost)
				}))
			},
			l.prototype.getExchange = function (e) {
				for (var t, n = this.getProductsByType(this.PRODUCT_TYPES.exchange), i = 0; i < n.length; i += 1) if ((t = n[i]).exchange === e || t.included_exchanges && t.included_exchanges.includes(e)) return t;
				return {}
			},
			l.prototype.getCost = function (e, t) {
				var n = 1;
				if (o.TwoYears === t) {
					if (e.fixed_cost || (n = 24), e.cost_biennial) return e.cost_biennial * n;
					if (e.cost_annual) return e.cost_annual * n
				} else if (o.OneYear === t) {
					if (e.fixed_cost || (n = 12), e.cost_annual) return e.cost_annual * n
				} else o.ThreeMonths === t && (e.fixed_cost || (n = 3));
				return e.cost,
				e.cost * n
			},
			l.prototype.getProductsByType = function (e) {
				return Object.keys(this._products).filter((function (t) {
					return this._products[t].type === e
				}), this).map((function (e) {
					return this.getProduct(e)
				}), this).sort((function (e, t) {
					return t.order > e.order ? -1 : t.order < e.order ? 1 : 0
				}))
			},
			l.prototype.getProPlans = function (e) {
				return this.getProductsByType(this.PRODUCT_TYPES.pro_plan).filter((function (t) {
					return !e || !t.is_limited
				})).map((function (e) {
					return e.text_id
				}))
			},
			l.prototype.getSuperProduct = function (e) {
				for (var t in this._products) {
					var n = this._products[t];
					if (n.subproduct_ids && n.subproduct_ids.indexOf(e) >= 0) return n.id
				}
			},
			l.prototype.getStudiesOrder = function () {
				return this._order.filter((function (e) {
					return this._products[e] && this._products[e].type === this.PRODUCT_TYPES.study_package
				}), this)
			},
			l.prototype.hasPackage = function (e) {
				return this._offers.includes(e) || this._freeProductIds.includes(e)
			},
			l.prototype._getUser = function () {
				return window.user
			},
			l.prototype.updateUser = function () {},
			l.prototype.isPro = function () {
				return !!this._getUser().pro_plan
			},
			l.prototype.isTrial = function () {
				return !!this._getUser().is_trial
			},
			l.prototype.isPaidPro = function () {
				return this.isPro() && !this.isTrial()
			},
			l.prototype.userHasRealtimeForExchange = function (e) {
				e = (e || "").toLowerCase().replace("exchange-", "");
				var t = this.getExchange(e);
				if (!this.isProductDefined(t)) return !1;
				if (this._offers.includes("exchange-" + t.exchange)) return !0;
				if (t.included_exchanges) for (var n = 0; n < t.included_exchanges.length; n += 1) if (this._offers.includes("exchange-" + t.included_exchanges[n])) return !0;
				return !1
			},
			l.prototype._exHasRealtimeForType = function (e, t) {
				return !("stock" === t && !e.is_stocks) && (!("index" === t && !e.is_indices) && !("futures" === t && !e.is_futures))
			},
			l.prototype.hasRealtimeForExchange = function (e, t) {
				var n, i, s = pro.getProductsByType(pro.PRODUCT_TYPES.exchange);
				e = (e || "").toLowerCase();
				for (var o = 0; o < s.length; o += 1) if ((n = s[o]).exchange === e || (n.included_exchanges || []).includes(e)) {
					if (n.disabled && !n.included_exchanges) return !1;
					if (!t) return !0;
					if (n.included_exchanges) {
						for (var r, a = 0; a < n.included_exchanges.length; a += 1) if (i = this.getProduct("exchange-" + n.included_exchanges[a]), this.isProductDefined(i) && this._exHasRealtimeForType(i, t)) {
							r = !0;
							break
						}
						if (!r) return !1
					} else if (!this._exHasRealtimeForType(n, t)) return !1;
					return !0
				}
				return !1
			},
			l.prototype.visitExchangesPage = function (e) {
				var t = o.Monthly,
					n = !0,
					i = this._getUser();
				i.is_trial || (t = i.pro_plan_billing_cycle || o.OneYear, n = !1),
				s(t, {
					exchangesOnly: !0,
					newWindow: (e = e || {}).newWindow,
					paymentMethod: e.paymentMethod,
					fixedCycle: n
				})
			},
			l.prototype.offerLogoSrc = function (e) {
				return e.has_logo ? "/static/images/indicators/logos/" + e.text_id + ".png" : null
			},
			l.prototype.offers = function () {
				return this._offers
			},
			l.prototype.isSupportAvailable = function () {
				return Boolean(c.is_support_available)
			},
			l.prototype.discounts = function () {
				return this._discounts
			},
			l.prototype.hash = function () {
				var e = this._offers.slice(0);
				e.sort();
				var t = {
					offers: e
				};
				return JSON.stringify(t)
			},
			"undefined" != typeof window && window.TradingView && (window.TradingView.Pro = l),
			e.exports = l
		},
		234405: (e, t, n) = > {
			"use strict";
			n.r(t),
			n.d(t, {
				TRIAL_SUFFIX: () = > r,
				EA_SUFFIX: () = > a,
				CUSTOM_SUFFIX: () = > c,
				billingCycleToTimeUnit: () = > l,
				getReadableCycle: () = > u,
				getReadableNumericCycle: () = > d,
				billingPeriodText: () = > h,
				isEarlyAccess: () = > _,
				isTrialProduct: () = > m,
				getProductForTrial: () = > p,
				getDiscountFromEarlyAccess: () = > S,
				toEarlyAccess: () = > f,
				humanizeProPlan: () = > y,
				humanizeCardPlan: () = > g,
				getAmountOfDaysForBillingCycle: () = > b,
				countDiscountByBillingCycle: () = > T,
				billingCycleToMonth: () = > E,
				round2: () = > v,
				round0: () = > C,
				floor0: () = > w,
				round2or0: () = > A,
				round1or0: () = > R,
				roundMinimal: () = > I,
				getPlanName: () = > P
			});
			n(897116);
			var i = n(787236),
				s = n(809965),
				o = n(888035);
			const r = "_trial",
			a = "_discount",
			c = "_custom";

			function l(e) {
				return {
					y: (0, i.t)("year", {
						plural: "years",
						count: 1
					}),
					m: (0, i.t)("month", {
						plural: "months",
						count: 1
					}),
					"3m": (0, i.t)("three months"),
					"2y": (0, i.t)("two years")
				}[e]
			}
			function u(e) {
				return {
					m: (0, i.t)("monthly"),
					y: (0, i.t)("annually"),
					"3m": (0, i.t)("3 months"),
					"2y": (0, i.t)("2-year")
				}[e] || ""
			}
			function d(e) {
				return {
					[o.BillingCycle.Monthly]: (0, i.t)("monthly"),
					[o.BillingCycle.OneYear]: (0, i.t)("1 year"),
					[o.BillingCycle.ThreeMonths]: (0, i.t)("3 months"),
					[o.BillingCycle.TwoYears]: (0, i.t)("2 years")
				}[e] || ""
			}
			function h(e) {
				var t;
				return null !== (t = {
					y: (0, i.t)("Billed every year."),
					m: (0, i.t)("Billed every month."),
					"2y": (0, i.t)("Billed every two years.")
				}[e]) && void 0 !== t ? t : ""
			}
			function _(e) {
				return /\d{0,2}_discount$/.test(e)
			}
			function m(e) {
				return new RegExp(r + "$").test(e)
			}
			function p(e) {
				return e.split(r)[0]
			}
			function S(e) {
				const t = e.match(new RegExp("^(d{0,2})" + a + "$"));
				return t ? +t[1] || 50 : 0
			}
			function f(e, t) {
				return`$ {
					e
				}
				_$ {
					t
				}
				$ {
					a
				}`
			}
			function y(e, t) {
				let n = e;
				switch (e) {
				case s.ProPlans.Pro:
					n = "Pro";
					break;
				case s.ProPlans.ProRealtime:
					n = "Pro+";
					break;
				case s.ProPlans.ProPremium:
					n = "Premium";
					break;
				case s.ProPlans.ProMiniAds:
				case s.ProPlans.ProMiniLayouts:
				case s.ProPlans.ProMiniAlerts:
					n = (0, i.t)("1-feature");
					break;
				case s.ProPlans.ProEdu:
					n = (0, i.t)("Rookie")
				}
				return t && (n += " " + (0, i.t)("trial")),
				n
			}
			function g(e) {
				let t = e;
				switch (e) {
				case s.ProPlans.Pro:
					t = "Pro";
					break;
				case s.ProPlans.ProRealtime:
					t = "Pro+";
					break;
				case s.ProPlans.ProPremium:
					t = "Premium";
					break;
				case s.ProPlans.Free:
					t = "Basic"
				}
				return t
			}
			function b(e) {
				switch (e) {
				case o.BillingCycle.TwoYears:
					return 730;
				case o.BillingCycle.OneYear:
					return 365;
				case o.BillingCycle.ThreeMonths:
					return 90;
				case o.BillingCycle.Monthly:
					return 30;
				default:
					return 1
				}
			}
			function T(e, t, n) {
				return Math.round((t - e) * E(n))
			}
			function E(e) {
				switch (e) {
				case o.BillingCycle.TwoYears:
					return 24;
				case o.BillingCycle.OneYear:
					return 12;
				default:
					return 1
				}
			}
			function v(e) {
				return (Math.round(100 * e) / 100).toFixed(2)
			}
			function C(e) {
				const t = Math.round(100 * e) / 100;
				return Math.round(t).toFixed(0)
			}
			function w(e) {
				return Math.floor(e).toString()
			}
			function A(e) {
				const t = Math.round(100 * e) / 100,
				n = Math.round(t);
				return Math.abs(t - n) > 0 ? t.toFixed(2) : n.toFixed(0)
			}
			function R(e) {
				return Number.isInteger(e) ? e.toFixed(0) : (Math.round(10 * e) / 10).toFixed(1)
			}
			function I(e) {
				const t = Math.round(100 * e) / 100,
				n = Math.round(10 * e) / 10,
				i = Math.round(t);
				return Math.abs(t - i) > 0 ? Math.abs(t - n) > 0 ? t.toFixed(2) : n.toFixed(1) : i.toFixed(0)
			}
			function P(e) {
				const t = (0, i.t)("{proPlanName} Trial");
				if (m(e)) {
					const n = y(p(e));
					return t.format({
						proPlanName: n
					})
				}
				return y(e)
			}
		},
		834925: (e, t, n) = > {
			"use strict";
			var i = n(629588).createGoProDialog,
				s = n(231039).showSignModal;
			window.TVDialogs = {
				showSignInDialog: function (e) {
					return s(e)
				},
				signModal: null,
				showGoProDialog: function (e) {
					i(e)
				}
			}
		},
		761068: (e, t, n) = > {
			"use strict";

			function i(e) {
				let t = null;
				return (n, ...i) = > (null == t || t.abort(), t = new AbortController, null == n || n.addEventListener("error", () = > null == t ? void 0 : t.abort(), {
					once: !0
				}), e(t.signal, ...i))
			}
			function s(e) {
				if (!c(e)) throw e
			}
			function o(e) {
				if (c(e)) throw e
			}
			function r(e) {
				return (null == e ? void 0 : e.aborted) ? Promise.reject(a()) : new Promise((t, n) = > {
					null == e || e.addEventListener("abort", () = > n(a()), {
						once: !0
					})
				})
			}
			function a() {
				return new DOMException("Aborted", "AbortError")
			}
			function c(e) {
				return e instanceof Error && "AbortError" === e.name
			}
			function l(e, t) {
				return Promise.race([r(e), t])
			}
			async
			function u(e, t) {
				let n;
				try {
					await l(e, new Promise(e = > {
						n = setTimeout(e, t)
					}))
				} finally {
					clearTimeout(n)
				}
			}
			n.d(t, {
				respectLatest: () = > i,
				skipAbortError: () = > s,
				rethrowAbortError: () = > o,
				createAbortError: () = > a,
				isAbortError: () = > c,
				respectAbort: () = > l,
				delay: () = > u
			})
		},
		55111: (e, t, n) = > {
			"use strict";
			n.d(t, {
				callWhenOnline: () = > s,
				waitForOnline: () = > o
			});
			var i = n(761068);

			function s(e) {
				let t = e;
				const n = () = > {
					window.removeEventListener("online", n),
					t && t()
				};
				return window.addEventListener("online", n),
				() = > {
					t = null
				}
			}
			async
			function o(e = null) {
				return !0 === navigator.onLine || void 0 === navigator.onLine ? Promise.resolve() : (0, i.respectAbort)(e, new Promise(e = > {
					const t = () = > {
						window.removeEventListener("online", t),
						e()
					};
					window.addEventListener("online", t)
				}))
			}
		},
		198796: (e, t, n) = > {
			"use strict";

			function i(e, ...t) {
				return e && "object" == typeof e ? (0 === t.length || t.forEach(t = > {
					null != t && "object" == typeof t && Object.keys(t).forEach(n = > {
						const o = e[n],
						r = t[n];
						if (r === e) return;
						const a = Array.isArray(r);
						if (r && (s(r) || a)) {
							let t;
							t = a ? o && Array.isArray(o) ? o : [] : o && s(o) ? o : {},
							e[n] = i(t, r)
						} else void 0 !== r && (e[n] = r)
					})
				}), e) : e
			}
			function s(e) {
				if (!e || "[object Object]" !== Object.prototype.toString.call(e)) return !1;
				const t = Object.getPrototypeOf(e);
				if (!t) return !0;
				const n = Object.hasOwnProperty.toString,
				i = t.hasOwnProperty("constructor") && t.constructor;
				return "function" == typeof i && n.call(i) === n.call(Object)
			}
			n.d(t, {
				deepExtend: () = > i
			})
		},
		99177: (e, t, n) = > {
			"use strict";

			function i(e) {
				if (void 0 === e) return "";
				if (e instanceof Error) {
					let t = e.message;
					return e.stack && (t += " " + e.stack),
					t
				}
				return "string" == typeof e ? e.toString() : JSON.stringify(e)
			}
			n.d(t, {
				errorToString: () = > i
			})
		},
		514998: (e, t, n) = > {
			"use strict";

			function i(e) {
				return decodeURIComponent(e.replace(/\+/g, " ")).replace(/<\/?[^>]+(>|$)/g, "")
			}
			function s(e) {
				const t = /([^&=]+)=?([^&]*)/g,
				n = {};
				if (!e) return n;
				let s = t.exec(e);
				for (; s;) n[i(s[1])] = i(s[2]),
				s = t.exec(e);
				return n
			}
			function o() {
				return s(window.location.search.substring(1))
			}
			function r() {
				return s(window.location.hash.split("#")[1])
			}
			function a(e) {
				const t = [];
				for (const n in e) e.hasOwnProperty(n) && null != e[n] && t.push({
					key: n,
					pair: encodeURIComponent(n) + "=" + encodeURIComponent(e[n])
				});
				return t.sort((e, t) = > e.key > t.key ? 1 : e.key < t.key ? -1 : 0).map(e = > e.pair).join("&")
			}
			n.r(t),
			n.d(t, {
				decode: () = > i,
				getQueryParams: () = > s,
				getUrlParams: () = > o,
				getHashUrlParams: () = > r,
				createUrlParams: () = > a
			})
		},
		893278: (e, t, n) = > {
			"use strict";
			n.d(t, {
				visitPaymentPage: () = > d
			});
			var i = n(787236),
				s = n(698969),
				o = n(338733),
				r = n(888035),
				a = n(125226),
				c = n(706162),
				l = n(459689),
				u = n(224314);

			function d(e = "y", t = {}) {
				var n;
				const d = null !== (n = t.productName) && void 0 !== n ? n : "pro",
				h = t.paymentMethod || "paypal",
				_ = "bitcoin" === h ? "Bitcoin payment" : "Paypal payment";
				window.runOrSignIn(async() = > {
					if (await(0, l.check)()) return void(0, u.showRestrictedCountryNotificationDialog)();
					if ("function" == typeof t.canVisit && !t.canVisit()) return void(location.href = "/");
					if ((0, a.isFeatureEnabled)("braintree-trial-implementation")) return void(0, o.showPaymentOrderDialog)({
						productId: t.productName,
						billingCycle: t.exchangesOnly ? r.BillingCycle.Monthly : e,
						fixedCycle: t.fixedCycle,
						statusExtraData: t.exchangesExpanded ? c.StatusExtraData.Enable : void 0
					});
					const n = (0, s.parseHtmlElement)(` < form action = "/order/"
					method = "post"
					$ {
						t.newWindow ? 'target="_blank"' : ""
					} > \n\t\t\t\t\t < input type = "hidden"
					name = "product"
					value = "${d}" / > \n\t\t\t\t\t < input type = "hidden"
					name = "billing_cycle"
					value = "${e}" / > \n\t\t\t\t\t < input type = "hidden"
					name = "fixed_billing_cycle"
					value = "${t.fixedCycle?"
					1 ":""}" / > \n\t\t\t\t\t < input type = "hidden"
					name = "exchanges_only"
					value = "${t.exchangesOnly?"
					1 ":""}" / > \n\t\t\t\t\t < input type = "hidden"
					name = "exchanges_expanded"
					value = "${t.exchangesExpanded?"
					1 ":""}" / > \n\t\t\t\t\t < input type = "hidden"
					name = "selected_packages"
					value = "${(t.selectedPackages||[]).join(", ")}" / > \n\t\t\t\t\t < input type = "hidden"
					name = "payment_method"
					value = "${h}" / > \n\t\t\t\t < /form>`);n&&(document.body.appendChild(n),n.submit())},{source:_,paidAccountCheck:window.pro&&window.pro.getProduct(d).type===window.pro.PRODUCT_TYPES.pro_plan,paidAccountSuccessButtonText:(0,i.t)("Continue purchasing")})}},461909:(e,t,n)=>{"use strict";function i(e){if(void 0===e)return null;const t=e.match(/ (delayed_streaming) _([\d] {
						1,
						4
					}) / );
					return null === t ? null : {
						mode: t[1],
						interval: parseInt(t[2])
					}
				}
				n.d(t, {
					parseUpdateMode: () = > i
				})
				},
				936410: (e, t, n) = > {
					"use strict";
					n.r(t),
					n.d(t, {
						monthsFullNames: () = > o,
						monthsShortNames: () = > r,
						weekDaysFullNames: () = > a,
						weekDaysShortNames: () = > c,
						weekDaysMiniNames: () = > l
					});
					var i = n(787236),
						s = n(414879);
					const o = {
						[s.Months.JANUARY]: (0, i.t)("January"),
						[s.Months.FEBRUARY]: (0, i.t)("February"),
						[s.Months.MARCH]: (0, i.t)("March"),
						[s.Months.APRIL]: (0, i.t)("April"),
						[s.Months.MAY]: (0, i.t)("May"),
						[s.Months.JUNE]: (0, i.t)("June"),
						[s.Months.JULY]: (0, i.t)("July"),
						[s.Months.AUGUST]: (0, i.t)("August"),
						[s.Months.SEPTEMBER]: (0, i.t)("September"),
						[s.Months.OCTOBER]: (0, i.t)("October"),
						[s.Months.NOVEMBER]: (0, i.t)("November"),
						[s.Months.DECEMBER]: (0, i.t)("December")
					},
					r = {
						[s.Months.JANUARY]: (0, i.t)("Jan"),
						[s.Months.FEBRUARY]: (0, i.t)("Feb"),
						[s.Months.MARCH]: (0, i.t)("Mar"),
						[s.Months.APRIL]: (0, i.t)("Apr"),
						[s.Months.MAY]: (0, i.t)("May", {
							context: "short"
						}),
						[s.Months.JUNE]: (0, i.t)("Jun"),
						[s.Months.JULY]: (0, i.t)("Jul"),
						[s.Months.AUGUST]: (0, i.t)("Aug"),
						[s.Months.SEPTEMBER]: (0, i.t)("Sep"),
						[s.Months.OCTOBER]: (0, i.t)("Oct"),
						[s.Months.NOVEMBER]: (0, i.t)("Nov"),
						[s.Months.DECEMBER]: (0, i.t)("Dec")
					},
					a = {
						[s.WeekDays.SUNDAY]: (0, i.t)("Sunday"),
						[s.WeekDays.MONDAY]: (0, i.t)("Monday"),
						[s.WeekDays.TUESDAY]: (0, i.t)("Tuesday"),
						[s.WeekDays.WEDNESDAY]: (0, i.t)("Wednesday"),
						[s.WeekDays.THURSDAY]: (0, i.t)("Thursday"),
						[s.WeekDays.FRIDAY]: (0, i.t)("Friday"),
						[s.WeekDays.SATURDAY]: (0, i.t)("Saturday")
					},
					c = {
						[s.WeekDays.SUNDAY]: (0, i.t)("Sun"),
						[s.WeekDays.MONDAY]: (0, i.t)("Mon"),
						[s.WeekDays.TUESDAY]: (0, i.t)("Tue"),
						[s.WeekDays.WEDNESDAY]: (0, i.t)("Wed"),
						[s.WeekDays.THURSDAY]: (0, i.t)("Thu"),
						[s.WeekDays.FRIDAY]: (0, i.t)("Fri"),
						[s.WeekDays.SATURDAY]: (0, i.t)("Sat")
					},
					l = {
						[s.WeekDays.SUNDAY]: (0, i.t)("Su", {
							context: "day_of_week"
						}),
						[s.WeekDays.MONDAY]: (0, i.t)("Mo", {
							context: "day_of_week"
						}),
						[s.WeekDays.TUESDAY]: (0, i.t)("Tu", {
							context: "day_of_week"
						}),
						[s.WeekDays.WEDNESDAY]: (0, i.t)("We", {
							context: "day_of_week"
						}),
						[s.WeekDays.THURSDAY]: (0, i.t)("Th", {
							context: "day_of_week"
						}),
						[s.WeekDays.FRIDAY]: (0, i.t)("Fr", {
							context: "day_of_week"
						}),
						[s.WeekDays.SATURDAY]: (0, i.t)("Sa", {
							context: "day_of_week"
						})
					}
				},
				66974: (e, t, n) = > {
					"use strict";

					function i(e = location.host) {
						return -1 !== ["i18n.tradingview.com", "partial.tradingview.com", "www.tradingview.com", "wwwcn.tradingview.com"].indexOf(e) || -1 !== ["d33t3vvu2t2yu5.cloudfront.net", "dwq4do82y8xi7.cloudfront.net", "s.tradingview.com", "s3.tradingview.com"].indexOf(e) || e.match(/^[a-z]{2}\.tradingview\.com/) || e.match(/prod-[^.]+.tradingview.com/) ? "battle" : e.includes("tradingview.com") || e.includes("staging") ? "staging" : e.match(/webcharts/) ? "staging_local" : (e.match(/^localhost(:\d+)?$/), "local")
					}
					function s() {
						return "local" === i()
					}
					function o() {
						return "battle" === i()
					}
					function r() {
						return !o()
					}
					n.r(t),
					n.d(t, {
						environment: () = > i,
						isLocal: () = > s,
						isProd: () = > o,
						isDebug: () = > r
					})
				},
				560507: (e, t, n) = > {
					"use strict";
					n.d(t, {
						enabled: () = > c,
						getConfig: () = > l
					});
					const i = JSON.parse('{"free":{"CHART_STORAGE":{"limit":1},"MULTIPLE_CHARTS":{"limit":1},"INDICATORS_ON_CHART":{"limit":3},"HISTORICAL_BARS":{"limit":5},"STUDY_ON_STUDY":{"limit":270,"child_limit":1},"SERVER_SIDE_ALERTS":{"limit":1},"SCREENER_ALERTS":{"limit":1},"SCREENER_INTERVALS":{"interval":["1D","1W","1M"]},"STUDY_TEMPLATES":{"limit":1},"SIMULTANEOUS_CONNECTIONS":{"limit":1},"IDEA_SOCIAL_LINKS":{"socials":["Twitter","Youtube"]}},"__legacy_pro":{"CHART_STORAGE":{"limit":99999},"MULTIPLE_CHARTS":{"limit":8},"CUSTOM_INTERVALS":{},"MULTIPLE_WATCHLISTS":{},"IMPORT_WATCHLISTS":{},"EXPORT_WATCHLISTS":{},"INDICATORS_ON_CHART":{"limit":99999},"HISTORICAL_BARS":{"limit":10},"TV_VOLUMEBYPRICE":{"study_packages":["tv-volumebyprice"]},"STUDY_ON_STUDY":{"limit":270,"child_limit":99999},"TICK_BY_TICK_PUSH_DATA":{},"SERVER_SIDE_ALERTS":{"limit":20},"SCREENER_ALERTS":{"limit":99999},"SCREENER_AUTO_REFRESH":{},"SCREENER_EXPORT_DATA":{},"SCREENER_INTERVALS":{"interval":["1m","5m","15m","30m","1h","2h","4h","1D","1W","1M"]},"NO_SPONSORED_ADS":{},"STUDY_TEMPLATES":{"limit":99999},"SIMULTANEOUS_CONNECTIONS":{"limit":1},"IDC_AVAILABLE_DELAY":{},"STATUS":{"disable_on_trial":true},"MULTIFLAGGED_SYMBOLS_LISTS":{},"BAR_REPLAY_INTRADAY":{},"SHOWS":{"disable_on_trial":true},"ALERTS_WEBHOOK":{},"DEEP_FUNDAMENTALS_HISTORY":{},"IDEA_SOCIAL_LINKS":{"socials":["Twitter","Youtube"]},"EXTENDED_SOCIAL_LINKS":{"socials":["Facebook","Instagram"],"disable_on_trial":true},"MULTI_MONITOR":{},"PUBLISH_PROTECTED_SCRIPTS":{"disable_on_trial":true}},"__legacy_pro_realtime":{"extends":"__legacy_pro","TV_PROSTUDIES":{"study_packages":["tv-prostudies"]},"SERVER_SIDE_ALERTS":{"limit":1000},"CAN_EDIT_PUBLIC_CHATS":{"disable_on_trial":true},"EXPORT_CHART_DATA":{},"CUSTOM_FORMULAS":{},"INTRADAY_EXOTIC_CHARTS":{}},"__legacy_pro_premium":{"extends":"__legacy_pro_realtime","USE_BAR_MAGNIFIER":{},"HISTORICAL_BARS":{"limit":20},"IDEA_SIGNATURE":{"disable_on_trial":true},"PROFILE_WEBSITE_FIELD":{"disable_on_trial":true},"ALERTS_NO_EXPIRATION":{},"PUBLISH_INVITE_ONLY_SCRIPTS":{"disable_on_trial":true},"EXPORT_CHART_DATA":{},"DEEP_HISTORY_BACKTEST":{},"ALERTS_ON_SECONDS":{},"PERMANENT_STREAM_RECORDS":{},"EXTENDED_SOCIAL_LINKS":{"socials":["Facebook","Instagram","Website"],"disable_on_trial":true},"SECONDS_INTERVALS":{}},"pro":{"CHART_STORAGE":{"limit":5},"MULTIPLE_CHARTS":{"limit":2},"CUSTOM_INTERVALS":{},"MULTIPLE_WATCHLISTS":{},"IMPORT_WATCHLISTS":{},"EXPORT_WATCHLISTS":{},"INDICATORS_ON_CHART":{"limit":5},"HISTORICAL_BARS":{"limit":10},"TV_VOLUMEBYPRICE":{"study_packages":["tv-volumebyprice"]},"STUDY_ON_STUDY":{"limit":270,"child_limit":1},"TICK_BY_TICK_PUSH_DATA":{},"SERVER_SIDE_ALERTS":{"limit":20},"SCREENER_ALERTS":{"limit":99999},"SCREENER_AUTO_REFRESH":{},"SCREENER_EXPORT_DATA":{},"SCREENER_INTERVALS":{"interval":["1m","5m","15m","30m","1h","2h","4h","1D","1W","1M"]},"NO_SPONSORED_ADS":{},"STUDY_TEMPLATES":{"limit":99999},"SIMULTANEOUS_CONNECTIONS":{"limit":1},"IDC_AVAILABLE_DELAY":{},"STATUS":{"disable_on_trial":true},"BAR_REPLAY_INTRADAY":{},"MULTIFLAGGED_SYMBOLS_LISTS":{},"SHOWS":{"disable_on_trial":true},"ALERTS_WEBHOOK":{},"DEEP_FUNDAMENTALS_HISTORY":{},"PUBLISH_PROTECTED_SCRIPTS":{"disable_on_trial":true},"IDEA_SOCIAL_LINKS":{"socials":["Twitter","Youtube"]},"EXTENDED_SOCIAL_LINKS":{"socials":["Facebook","Instagram"],"disable_on_trial":true},"MULTI_MONITOR":{}},"pro_realtime":{"extends":"pro","CHART_STORAGE":{"limit":10},"MULTIPLE_CHARTS":{"limit":4},"INDICATORS_ON_CHART":{"limit":10},"TV_PROSTUDIES":{"study_packages":["tv-prostudies"]},"STUDY_ON_STUDY":{"limit":270,"child_limit":9},"SERVER_SIDE_ALERTS":{"limit":100},"CAN_EDIT_PUBLIC_CHATS":{"disable_on_trial":true},"SIMULTANEOUS_CONNECTIONS":{"limit":2},"EXPORT_CHART_DATA":{},"CUSTOM_FORMULAS":{},"INTRADAY_EXOTIC_CHARTS":{}},"pro_premium":{"extends":"pro_realtime","USE_BAR_MAGNIFIER":{},"CHART_STORAGE":{"limit":99999},"MULTIPLE_CHARTS":{"limit":8},"INDICATORS_ON_CHART":{"limit":25},"HISTORICAL_BARS":{"limit":20},"STUDY_ON_STUDY":{"limit":270,"child_limit":24},"SERVER_SIDE_ALERTS":{"limit":400},"SIMULTANEOUS_CONNECTIONS":{"limit":5},"IDEA_SIGNATURE":{"disable_on_trial":true},"PROFILE_WEBSITE_FIELD":{"disable_on_trial":true},"ALERTS_NO_EXPIRATION":{},"PUBLISH_INVITE_ONLY_SCRIPTS":{"disable_on_trial":true},"EXPORT_CHART_DATA":{},"DEEP_HISTORY_BACKTEST":{},"ALERTS_ON_SECONDS":{},"PERMANENT_STREAM_RECORDS":{},"EXTENDED_SOCIAL_LINKS":{"socials":["Facebook","Instagram","Website"],"disable_on_trial":true},"SECONDS_INTERVALS":{}},"pro_mini_alerts":{"extends":"free","SERVER_SIDE_ALERTS":{"limit":30},"SCREENER_ALERTS":{"limit":99999},"SHOWS":{"disable_on_trial":true},"IDC_AVAILABLE_DELAY":{},"DEEP_FUNDAMENTALS_HISTORY":{}},"pro_mini_ads":{"extends":"free","NO_SPONSORED_ADS":{},"SHOWS":{"disable_on_trial":true},"IDC_AVAILABLE_DELAY":{},"DEEP_FUNDAMENTALS_HISTORY":{}},"pro_mini_layouts":{"extends":"free","MULTIPLE_CHARTS":{"limit":8},"SHOWS":{"disable_on_trial":true},"IDC_AVAILABLE_DELAY":{},"DEEP_FUNDAMENTALS_HISTORY":{}},"pro_edu":{"extends":"free","CHART_STORAGE":{"limit":3},"MULTIPLE_CHARTS":{"limit":2},"MULTIPLE_WATCHLISTS":{},"IMPORT_WATCHLISTS":{},"EXPORT_WATCHLISTS":{},"TICK_BY_TICK_PUSH_DATA":{},"SERVER_SIDE_ALERTS":{"limit":5},"SCREENER_ALERTS":{"limit":99999},"SHOWS":{"disable_on_trial":true},"IDC_AVAILABLE_DELAY":{},"DEEP_FUNDAMENTALS_HISTORY":{}}}'),
					s = JSON.parse('{"cme":{"INDICATORS_ON_CHART":{"limit":99999}},"bovespa":{"INDICATORS_ON_CHART":{"limit":99999}},"qecomqa":{"INDICATORS_ON_CHART":{"limit":99999}}}');
					var o = n(833813),
						r = n(809965),
						a = n(234405);

					function c(e, t, n) {
						let i = window.user;
						n && (i = n);
						const s = l(e, t, i);
						return !!s && !(s[o.ProductFeatures.DISABLE_ON_TRIAL] && (!i || i.is_trial))
					}
					function l(e, t, n) {
						var o;
						let c = function e(t) {
							const n = i[t];
							return n ? n.extends ? Object.assign({}, e(n.extends), n) : n : null
						}(t ||
						function (e) {
							let t = window.user;
							e && (t = e);
							let n = (null == t ? void 0 : t.pro_plan) || r.ProPlans.Free;
							const i = n !== r.ProPlans.Free && !(0, a.isTrialProduct)(n);
							return i || (n = (0, a.getProductForTrial)(n)),
							i && t && !t.is_pro_limited && !t.new_pro_product_line && (n = "__legacy_" + n),
							n
						}(n));
						if (!c) return null;
						const l = null === (o = window.TradingView) || void 0 === o ? void 0 : o.widgetCustomer;
						return l && s[l] && (c = Object.assign({}, c, s[l])),
						c && c[e] || null
					}
				},
				833813: (e, t, n) = > {
					"use strict";
					var i;
					n.d(t, {
						ProductFeatures: () = > i
					}),


					function (e) {
						e.DISABLE_ON_TRIAL = "disable_on_trial",
						e.CUSTOM_INTERVALS = "CUSTOM_INTERVALS",
						e.CHART_STORAGE = "CHART_STORAGE",
						e.MULTIPLE_CHARTS = "MULTIPLE_CHARTS",
						e.MULTIPLE_WATCHLISTS = "MULTIPLE_WATCHLISTS",
						e.IMPORT_WATCHLISTS = "IMPORT_WATCHLISTS",
						e.EXPORT_WATCHLISTS = "EXPORT_WATCHLISTS",
						e.INDICATORS_ON_CHART = "INDICATORS_ON_CHART",
						e.STUDY_ON_STUDY = "STUDY_ON_STUDY",
						e.TICK_BY_TICK_PUSH_DATA = "TICK_BY_TICK_PUSH_DATA",
						e.SERVER_SIDE_ALERTS = "SERVER_SIDE_ALERTS",
						e.PUBLISH_INVITE_ONLY_SCRIPTS = "PUBLISH_INVITE_ONLY_SCRIPTS",
						e.PUBLISH_PROTECTED_SCRIPTS = "PUBLISH_PROTECTED_SCRIPTS",
						e.SCREENER_ALERTS = "SCREENER_ALERTS",
						e.SCREENER_AUTO_REFRESH = "SCREENER_AUTO_REFRESH",
						e.SCREENER_EXPORT_DATA = "SCREENER_EXPORT_DATA",
						e.SCREENER_INTERVALS = "SCREENER_INTERVALS",
						e.SIMULTANEOUS_CONNECTIONS = "SIMULTANEOUS_CONNECTIONS",
						e.STUDY_TEMPLATES = "STUDY_TEMPLATES",
						e.CAN_EDIT_PUBLIC_CHATS = "CAN_EDIT_PUBLIC_CHATS",
						e.NO_SPONSORED_ADS = "NO_SPONSORED_ADS",
						e.IDC_AVAILABLE_DELAY = "IDC_AVAILABLE_DELAY",
						e.STATUS = "STATUS",
						e.ALERTS_NO_EXPIRATION = "ALERTS_NO_EXPIRATION",
						e.MULTIFLAGGED_SYMBOLS_LISTS = "MULTIFLAGGED_SYMBOLS_LISTS",
						e.BAR_REPLAY_INTRADAY = "BAR_REPLAY_INTRADAY",
						e.TV_VOLUMEBYPRICE = "TV_VOLUMEBYPRICE",
						e.ALERTS_WEBHOOK = "ALERTS_WEBHOOK",
						e.DEEP_FUNDAMENTALS_HISTORY = "DEEP_FUNDAMENTALS_HISTORY",
						e.EXPORT_CHART_DATA = "EXPORT_CHART_DATA",
						e.ALERTS_ON_SECONDS = "ALERTS_ON_SECONDS",
						e.PERMANENT_STREAM_RECORDS = "PERMANENT_STREAM_RECORDS",
						e.IDEA_SOCIAL_LINKS = "IDEA_SOCIAL_LINKS",
						e.EXTENDED_SOCIAL_LINKS = "EXTENDED_SOCIAL_LINKS",
						e.DEEP_HISTORY_BACKTEST = "DEEP_HISTORY_BACKTEST",
						e.USE_BAR_MAGNIFIER = "USE_BAR_MAGNIFIER"
					}(i || (i = {}))
				},
				125226: (e, t, n) = > {
					"use strict";
					var i = n(49437).TVLocalStorage,
						s = n(97639),
						o = n(855385);
					n(638456);
					var r = new s;
					TradingView.FeatureToggle = {
						force_prefix: "forcefeaturetoggle.",
						onChanged: new s,
						enableFeature: function (e) {
							i.setItem(this.force_prefix + e, "true"),
							r.fire(e)
						},
						disableFeature: function (e) {
							i.setItem(this.force_prefix + e, "false"),
							r.fire(e)
						},
						resetFeature: function (e) {
							i.removeItem(this.force_prefix + e),
							r.fire(e)
						},
						onFeaturesStateChanged: function () {
							return r
						}
					},
					TradingView.isFeatureEnabled = function (e) {
						function t(e) {
							try {
								var t = o(e +
								function () {
									if (window.user && window.user.id) return window.user.id;
									var e = i.getItem("featuretoggle_seed");
									return null !== e || (e = Math.floor(1e6 * Math.random()), i.setItem("featuretoggle_seed", e)),
									e
								}());
								return new DataView(t).getUint32(0, !0) / 4294967296
							} catch (e) {
								return.5
							}
						}
						function s(n) {
							return !("local" !== window.environment || !
							function (e) {
								var t = new RegExp("broker_[A-Z]+[a-zA-Z0-9_]+_dev", "g"),
									n = new RegExp("hide_[A-Z]+[a-zA-Z0-9_]+_on_ios", "g"),
									i = new RegExp("hide_[A-Z]+[a-zA-Z0-9_]+_on_android", "g"),
									s = new RegExp("hide_[A-Z]+[a-zA-Z0-9_]+_on_mobile_web", "g");
								return -1 === ["remove_note_tab_from_bottom_panel", "broker_FXCM_token_v2", "broker_TRADESTATION_V3", "broker_TRADOVATE_dev", "black_friday_mainpage", "black_friday_popup", "datawindow", "trading-fast-renew-oauth-token", "switching_trial_year_to_month_disabled", "switching_year_to_month_disabled", "default_year_billing_cycle_switcher", "marketing-analytics", "google-ads", "visible_address_fields_by_default", "slow-support-warning", "hide-trading-floating-toolbar", "tvcoins_donations", "save-short-streams", "details_disable_bid_ask", "vat_disabled", "pro_plan_upgrades_disabled", "pro_plan_downgrades_disabled", "unit_conversion", "disable_recaptcha_on_signup", "braintree-order-one-click-dropdown", "braintree-trial-implementation", "braintree-gopro-in-order-dialog", "braintree-apple-pay", "braintree-google-pay", "braintree-apple-pay-trial", "braintree-google-pay-trial", "hide_gopro_popup_upgrade_button", "yandex_metric_enabled", "broker_id_session", "remove_line_tools_from_content", "do_not_save_shared_line_tools_to_charts", "save_shared_line_tools", "chart_storage_with_broker_name", "do_not_invalidate_chart_on_changing_line_tools", "log_removing_line_tools_group", "oanda-european-accounts-warning", "mobile_show_bottom_panel", "disable_save_settings", "desktop_version_notification_enabled", "favorites-in-broker-dropdown", "streams_stats_profile", "hide_ecomonic_events", "aggregating_page_pings", "mobile_trading_web", "mobile_trading_ios", "mobile_trading_android", "hide_real_brokers_on_mobile", "enable_trading_server_logger", "percentage_values_for_percentage_scale", "hide_ranges_label_colors", "disable_user_specific_encryption", "remove_scale_settings_from_menu", "enable_deep_history_backtesting", "show_checkbox_of_house_rules_to_idea_and_script", "enable_partner_program", "disable_phone_verification_sms", "no_overlap_mode_enabled", "collapse_pane_buttons_when_connected_to_broker", "enable_new_execution_style", "test_minds_connections", "enable_date_range_sync", "hide_ideas_on_chart", "show_symbol_chart_type_switcher", "hide_ideas_on_chart", "RU_SF_disable", "RU_VOR_disable", "show_continuous_contract_switches", "hide_sync_time", "enable_new_custom_public_chats", "bottom_panel_track_events"].indexOf(e) && -1 === e.indexOf("-maintenance") && !1 === t.test(e) && !1 === n.test(e) && !1 === i.test(e) && !1 === s.test(e)
							}(n)) || (!e[n] || -1 !== e[n]) && ( !! ("true" === i.getItem(TradingView.FeatureToggle.force_prefix + n) || window.is_authenticated && "undefined" != typeof user && user.settings && "true" === user.settings[TradingView.FeatureToggle.force_prefix + n]) || !("false" === i.getItem(TradingView.FeatureToggle.force_prefix + n) || window.is_authenticated && "undefined" != typeof user && user.settings && "false" === user.settings[TradingView.FeatureToggle.force_prefix + n]) && ( !! e[n] && (1 === e[n] || t(n) <= e[n])))
						}
						return TradingView.onWidget() || Promise.all([n.e(1867), n.e(34604)]).then(n.t.bind(n, 501867, 23)).then(t = > {
							t.on("featuretoggle", (function (t) {
								var n = s(t.name);
								e[t.name] = t.state,
								n !== s(t.name) && r.fire(t.name)
							}))
						}),
						s
					}(window.featureToggleState || {}),
					t.FeatureToggle = TradingView.FeatureToggle,
					t.isFeatureEnabled = TradingView.isFeatureEnabled,
					t.onFeaturesStateChanged = TradingView.FeatureToggle.onFeaturesStateChanged.bind(TradingView.FeatureToggle)
				},
				128327: (e, t, n) = > {
					"use strict";

					function i(e) {
						if (e instanceof Error) return e.stack || e.message;
						try {
							return e.outerHTML.slice(0, 1024)
						} catch (e) {}
						try {
							if (void 0 !== e) return JSON.stringify(e).slice(0, 1024)
						} catch (e) {}
						return String(e)
					}
					function s() {
						window.__tv_js_errors || (window.__tv_js_errors = []),
						window.addEventListener("error", e = > {
							const t = (new Date).toISOString();
							window.__tv_js_errors.push(`$ {
								t
							}
							$ {
								e.message || "JS error"
							}.$ {
								e.filename || "<unknown url>"
							}, line $ {
								e.lineno
							}, col $ {
								e.colno
							}.\nError: ` + i(e.error))
						}, !1),
						window.addEventListener("unhandledrejection", e = > {
							const t = (new Date).toISOString();
							window.__tv_js_errors.push(t + " Unhandled rejection.\nReason: " + i(e.reason))
						}, !1),
						document.addEventListener("securitypolicyviolation", e = > {
							var t, n;
							const s = (new Date).toISOString(),
							o = "report" === e.disposition ? "CSP report-only" : "CSP violation";
							window.__tv_js_errors.push(`$ {
								s
							}
							$ {
								o
							}: $ {
								e.violatedDirective || e.effectiveDirective
							}.$ {
								e.sourceFile || "<unknown url>"
							}, line $ {
								null !== (t = e.lineno) && void 0 !== t ? t : e.lineNumber
							}, col $ {
								null !== (n = e.colno) && void 0 !== n ? n : e.columnNumber
							}.\nBlocked URI: $ {
								e.blockedURL || e.blockedURI
							}\nSample: $ {
								e.sample
							}\nTarget: ` + i(e.target))
						}, !1)
					}
					n.d(t, {
						install: () = > s
					})
				},
				583912: (e, t, n) = > {
					"use strict";
					n.r(t),
					n.d(t, {
						Linking: () = > p,
						linking: () = > S
					});
					var i = n(12481),
						s = n(262325),
						o = n.n(s),
						r = n(611688),
						a = n(749473),
						c = n(911905),
						l = n(62802),
						u = n(588948),
						d = n(776734),
						h = n(371856);
					const _ = (0, c.getLogger)("Linking");
					var m;
					!
					function (e) {
						e[e.NotBound = 0] = "NotBound",
						e[e.BoundToWidget = 1] = "BoundToWidget",
						e[e.BoundToModel = 2] = "BoundToModel"
					}(m || (m = {}));
					class p {
						constructor() {
							this._watchedSymbol = new(o()),
							this._seriesShortSymbol = new(o()),
							this._proSymbol = new(o()),
							this._watchedInterval = new(o()),
							this._watchedIntraday = new(o()),
							this._watchedSeconds = new(o()),
							this._watchedTicks = new(o()),
							this._watchedRange = new(o()),
							this._watchedSupportedResolutions = new(o()),
							this._watchedSupportedChartStyles = new(o())([]),
							this._symbolNamesList = new(o()),
							this._chartWidgetBindingState = m.NotBound,
							this._activeChartWidget = null,
							this._watchedSymbolListenerBound = this._watchedSymbolListener.bind(this),
							this._watchedIntervalListenerBound = this._watchedIntervalListener.bind(this),
							this._onSymbolLinkBound = this._onSymbolLink.bind(this),
							this._searchCharts = null,
							this._searchChartsLoadDebounced = null,
							this._selfEmit = !1,
							this._preventFeedBySymbol = !1,
							this._feedBySymbolDebounceCounter = 0
						}
						get symbol() {
							return this._watchedSymbol
						}
						get proSymbol() {
							return this._proSymbol
						}
						get symbolNamesList() {
							return this._symbolNamesList
						}
						get seriesShortSymbol() {
							return this._seriesShortSymbol.readonly()
						}
						get interval() {
							return this._watchedInterval
						}
						get intraday() {
							return this._watchedIntraday.readonly()
						}
						get seconds() {
							return this._watchedSeconds.readonly()
						}
						get ticks() {
							return this._watchedTicks.readonly()
						}
						get range() {
							return this._watchedRange.readonly()
						}
						get supportedResolutions() {
							return this._watchedSupportedResolutions.readonly()
						}
						get supportedChartStyles() {
							return this._watchedSupportedChartStyles.readonly()
						}
						get preventFeedBySymbol() {
							return this._preventFeedBySymbol
						}
						bindToChartWidget(e) {
							if (this.unbindFromChartWidget(), this._activeChartWidget = e, e.hasModel()) return void this._onChartModelCreated(e.model());
							e.modelCreated().subscribe(this, this._onChartModelCreated),
							this._chartWidgetBindingState = m.BoundToWidget;
							const t = e.properties().childs().mainSeriesProperties.childs();
							this._watchedSymbol.setValue(t.symbol.value()),
							this._watchedInterval.setValue(t.interval.value())
						}
						unbindFromChartWidget() {
							switch (this._chartWidgetBindingState) {
							case m.BoundToWidget:
								if (!this._activeChartWidget) throw new Error("ChartWidget is undefined");
								this._activeChartWidget.modelCreated().unsubscribe(this, this._onChartModelCreated);
								break;
							case m.BoundToModel:
								this._symbolProperty().unsubscribe(this, this._onSymbolPropertyChange),
								this._watchedSymbol.unsubscribe(this._watchedSymbolListenerBound),
								this._mainSeries().dataEvents().symbolResolved().unsubscribe(this, this._updateSeriesSymbolInfo),
								this._mainSeries().dataEvents().symbolError().unsubscribe(this, this._updateSeriesSymbolInfo),
								this._intervalProperty().unsubscribe(this, this._onIntervalPropertyChange),
								this._watchedInterval.unsubscribe(this._watchedIntervalListenerBound),
								delete this._watchedSymbol.hook,
								delete this._watchedSymbol.writeLock
							}
							this._activeChartWidget = null,
							this._chartWidgetBindingState = m.NotBound
						}
						getChartWidget() {
							return this._activeChartWidget
						}
						bindToChartWidgetCollection(e) {
							this._chartWidgetCollection = e,
							this.unbindFromChartWidget(),
							e.activeChartWidget.subscribe(e = > {
								this.unbindFromChartWidget(),
								this.bindToChartWidget(e)
							}, {
								callWithLast: !0
							})
						}
						bindToSearchCharts(e) {
							this.unbindFromSearchCharts(),
							this._searchCharts = e,
							e.onSearchBySymbol.subscribe(this, this._onSearchBySymbol),
							e.loadingSymbol.subscribe(e = > {
								!1 === e && (this._feedBySymbolDebounceCounter = 0)
							}),
							this._watchedSymbol.subscribe(this._onSymbolLinkBound)
						}
						unbindFromSearchCharts() {
							this._searchCharts && (this._searchCharts.onSearchBySymbol.unsubscribe(this, this._onSearchBySymbol), this._watchedSymbol.unsubscribe(this._onSymbolLinkBound), this._searchCharts = null)
						}
						setPreventFeedBySymbol(e) {
							this._preventFeedBySymbol = e
						}
						_onSearchBySymbol(e) {
							if (!e.resolved_symbol) throw new Error("no resolved_symbol");
							this._selfEmit = !0,
							this._watchedSymbol.setValue(e.resolved_symbol),
							this._selfEmit = !1
						}
						_onSymbolLink(e) {
							if (!this._selfEmit) {
								if (!this._searchCharts) {
									const e = "No search charts defined";
									throw _.logError(e),
									new Error(e)
								}
								this._preventFeedBySymbol || this._loadSearchCharts(e)
							}
						}
						_loadSearchCharts(e) {
							if (!this._searchCharts) {
								const e = "No search charts defined";
								throw _.logError(e),
								new Error(e)
							}
							if (this._searchChartsLoadDebounced) return void(this._feedBySymbolDebounceCounter < 100 && (this._feedBySymbolDebounceCounter++, this._searchChartsLoadDebounced(e)));
							const t = e = > this._searchCharts ? (!0 === this._searchCharts.loadingSymbol.value() ? this._feedBySymbolDebounceCounter < 100 && (this._feedBySymbolDebounceCounter++, this._searchChartsLoadDebounced = (0, i.
						default)(t, 2e3), this._searchChartsLoadDebounced(e)) : this._searchChartsLoadDebounced = null, this._searchCharts.feedBySymbol.call(this._searchCharts, e)) : () = > {};
							!0 === this._searchCharts.loadingSymbol.value() ? this._feedBySymbolDebounceCounter < 100 && (this._feedBySymbolDebounceCounter++, this._searchChartsLoadDebounced = (0, i.
						default)(t, 2e3), this._searchChartsLoadDebounced(e)) : this._searchCharts.feedBySymbol(e)
						}
						_mainSeries() {
							if (!this._activeChartWidget) throw new Error("ChartWidget is undefined");
							return this._activeChartWidget.model().mainSeries()
						}
						_properties() {
							return this._mainSeries().properties()
						}
						_symbolProperty() {
							return this._properties().symbol
						}
						_intervalProperty() {
							return this._properties().interval
						}
						_watchedSymbolListener(e) {
							this._symbolProperty().value() !== e && (this._chartWidgetCollection.setSymbol(e), this._sendSnowplowAnalytics())
						}
						_sendSnowplowAnalytics() {
							if (window.user.do_not_track) return;
							const e = this._mainSeries(),
							t = () = > {
								e.dataEvents().symbolResolved().unsubscribe(this, n)
							},
							n = n = > {
								(0, d.getTracker)().then(e = > {
									if (null === e) return;
									const t = this._chartWidgetCollection.layout.value(),
									i = this._chartWidgetCollection.metaInfo.uid.value() || "";
									e.trackChartSymbols(n.pro_name, n.type, t, i)
								}),
								e.dataEvents().symbolError().unsubscribe(this, t)
							};
							e.dataEvents().symbolResolved().subscribe(this, n, !0),
							e.dataEvents().symbolError().subscribe(this, t, !0)
						}
						_onSymbolPropertyChange() {
							const e = this._symbolProperty().value() !== this._watchedSymbol.value();
							this._watchedSymbol.setValue(this._symbolProperty().value()),
							e && this._chartWidgetCollection.setSymbol(this._symbolProperty().value())
						}
						_onSymbolResolved(e) {
							const t = this._mainSeries().symbolInfo();
							t && this._applyValuesFromSymbolInfo(t)
						}
						_applyValuesFromSymbolInfo(e) {
							const t = e.pro_name || r.enabled("trading_terminal") && (e.full_name || e.name) || "";
							this._proSymbol.setValue(t),
							e.aliases && this._symbolNamesList.setValue(e.aliases)
						}
						_updateSeriesSymbolInfo() {
							this._seriesShortSymbol.setValue(this._properties().shortName.value());
							const e = this._mainSeries().symbolInfo();
							if (e) {
								this._applyValuesFromSymbolInfo(e);
								let t = (0, h.allChartStyles)();
								(0, a.isCloseBasedSymbol)(e) && (t = t.filter(e = > (0, a.isSingleValueBasedStyle)(e))),
								this._watchedSupportedChartStyles.setValue(t),
								this._watchedIntraday.setValue( !! e.has_intraday),
								this._watchedSeconds.setValue( !! e.has_seconds),
								this._watchedTicks.setValue(!(0, a.isCloseBasedSymbol)(e) && !! e.has_ticks),
								this._watchedRange.setValue(!(0, a.isCloseBasedSymbol)(e))
							} else this._watchedIntraday.deleteValue(),
							this._watchedSeconds.deleteValue(),
							this._watchedTicks.deleteValue(),
							this._watchedRange.deleteValue(),
							this._proSymbol.deleteValue()
						}
						_watchedIntervalListener(e) {
							this._intervalProperty().value() !== e && this._chartWidgetCollection.setResolution(e)
						}
						_onIntervalPropertyChange() {
							const e = this._intervalProperty().value() !== this._watchedInterval.value();
							this._watchedInterval.setValue(this._intervalProperty().value()),
							e && this._chartWidgetCollection.setResolution(this._intervalProperty().value())
						}
						_onChartModelCreated(e) {
							if (!this._activeChartWidget) throw new Error("ChartWidget is undefined");
							this._chartWidgetBindingState = m.BoundToModel,
							this._activeChartWidget.modelCreated().unsubscribe(this, this._onChartModelCreated);
							const t = this._symbolProperty();
							t.subscribe(this, this._onSymbolPropertyChange),
							this._watchedSymbol.setValue(t.value()),
							this._watchedSymbol.subscribe(this._watchedSymbolListenerBound);
							const n = this._mainSeries();
							n.dataEvents().symbolResolved().subscribe(this, this._onSymbolResolved),
							this._watchedSymbol.hook = e = > (n.symbolSameAsCurrent(e) && (e = n.symbol()), e),
							n.dataEvents().symbolResolved().subscribe(this, this._updateSeriesSymbolInfo),
							n.dataEvents().symbolError().subscribe(this, this._updateSeriesSymbolInfo),
							n.dataEvents().symbolNotPermitted().subscribe(this, this._updateSeriesSymbolInfo),
							n.dataEvents().symbolGroupNotPermitted().subscribe(this, this._updateSeriesSymbolInfo),
							this._updateSeriesSymbolInfo();
							const i = this._intervalProperty();
							i.subscribe(this, this._onIntervalPropertyChange),
							this._watchedInterval.setValue(i.value()),
							this._watchedInterval.subscribe(this._watchedIntervalListenerBound),
							this._activeChartWidget.readOnly() && (this._watchedSymbol.writeLock = !0)
						}
					}
					const S = new p; {
						const e = (0, u.getFreshInitData)().symbolInfo,
						t = e ? e.pro_symbol : l.getValue("editchart.model.symbol", window.DEFAULT_SYMBOL);
						S.symbol.setValue(t)
					}
					window.TradingViewApi || (window.TradingViewApi = {
						linking: S
					})
				},
				207678: (e, t, n) = > {
					"use strict";
					n.d(t, {
						breakpoints: () = > i,
						mobileFirstBreakpoints: () = > s,
						mobileFirstLegacyBreakpoints: () = > o
					});
					const i = {
						desktop: 1 / 0,
						desktopHd: 1919,
						phone: 767,
						"phone-vertical": 479,
						tablet: 1019
					},
					s = {
						base: 0,
						"media-mf-phone-vertical": 320,
						"media-mf-phone-landscape": 568,
						"media-mf-tablet-vertical": 768,
						"media-mf-tablet-landscape": 1024,
						"media-mf-laptop": 1280,
						"media-mf-desktop-medium": 1440,
						"media-mf-desktop-large": 1920,
						"media-mf-desktop-extra-large": 2560
					},
					o = {
						"media-mf-legacy-phone-vertical": 330,
						"media-mf-legacy-phone": 480,
						"media-mf-legacy-notebook": 1020,
						"media-mf-legacy-desktop-medium": 1480,
						"media-mf-legacy-desktop": 1531
					}
				},
				76107: (e, t, n) = > {
					"use strict";
					n.d(t, {
						getScrollbarWidth: () = > i,
						matchMediaMinMax: () = > s,
						getContentWidth: () = > o,
						setStyle: () = > r,
						getCSSProperty: () = > a,
						getCSSPropertyNumericValue: () = > c
					});
					const i = (() = > {
						let e;
						return () = > {
							var t;
							if (void 0 === e) {
								const n = document.createElement("div"),
								i = n.style;
								i.visibility = "hidden",
								i.width = "100px",
								i.msOverflowStyle = "scrollbar",
								document.body.appendChild(n);
								const s = n.offsetWidth;
								n.style.overflow = "scroll";
								const o = document.createElement("div");
								o.style.width = "100%",
								n.appendChild(o);
								const r = o.offsetWidth;
								null === (t = n.parentNode) || void 0 === t || t.removeChild(n),
								e = s - r
							}
							return e
						}
					})();

					function s(e, t) {
						return t === 1 / 0 ? window.matchMedia(` (min - width: $ {
							e
						}
						px)`) : window.matchMedia(` (min - width: $ {
							e
						}
						px) and(max - width: $ {
							t
						}
						px)`)
					}
					function o(e) {
						return c(e, "width") - c(e, "padding-left") - c(e, "padding-right")
					}
					function r(e, t, n) {
						null !== e && e.style.setProperty(t, n)
					}
					function a(e, t) {
						return getComputedStyle(e, null).getPropertyValue(t)
					}
					function c(e, t) {
						return parseInt(a(e, t))
					}
				},
				850775: (e, t, n) = > {
					"use strict";
					n.d(t, {
						mediaState: () = > l
					});
					var i = n(685459),
						s = n.n(i),
						o = n(677748),
						r = n(207678),
						a = n(76107);
					class c extends(s()) {
						constructor() {
							super(),
							this.width = 0,
							this.height = 0,
							this.device = null,
							this.breakpoints = r.breakpoints,
							this._checkDevice(),
							window.addEventListener("resize", this._checkDevice),
							Object.entries(r.breakpoints).sort(([e, t], [n, i]) = > t - i).forEach(([e, t], n, i) = > {
								let s;
								if (0 !== n) {
									const[, e] = i[n - 1];
									s = e + 1
								} else s = 0;
								const o = (0, a.matchMediaMinMax)(s, t);
								o.matches && this._setNewDevice(e),
								o.addListener(t = > {
									t.matches && (this._checkDevice(), this._setNewDevice(e))
								})
							}),
							(0, o.whenDocumentReady)(this._checkDevice.bind(this)),
							this.isPhoneSizeDevice.bind(this)
						}
						isPhoneSizeDevice() {
							return "phone" === this.device || "phone-vertical" === this.device
						}
						_checkDevice() {
							this.width = window.innerWidth,
							this.height = window.innerHeight
						}
						_setNewDevice(e) {
							const t = this.device;
							this.device = e,
							this.trigger("changeDevice", [e, t])
						}
					}
					const l = new c
				},
				501867: (e, t, n) = > {
					"use strict";
					var i = n(95935),
						s = n(226722).TVXWindowEvents,
						o = n(345848).trackEvent,
						r = n(49437).TVLocalStorage,
						a = n(590479).PushStream,
						c = n(246433).ConnectionStatus,
						l = n(175203).telemetry,
						u = n(911905),
						d = u.getLogger,
						h = u.getRawLogHistory,
						_ = d("PushStreamMultiplexer"),
						m = function () {
							var e, t = null,
								n = null,
								u = {},
								d = {},
								m = [],
								p = null,
								S = "multiplexer-bc-",
								f = "pushStreamMultiplexerState.",
								y = c.Closed,
								g = c.Closed,
								b = !1,
								T = {
									_codeParams: function (e) {
										return (e = Array.prototype.slice.call(e)).push((new Date).getTime()),
										JSON.stringify(e)
									},
									_decodeParams: function (e) {
										var t = JSON.parse(e);
										return t.pop(),
										t
									},
									guid: i.guid(),
									_init: function () {
										if (this._needInstantiating()) this._instantiatePushStream();
										else {
											var e = this._decodeConnectionStatus(r.getItem(this._connectionStatusKey));
											y = e[0],
											g = e[1]
										}
										setTimeout((function () {
											T.isConnected() || (_.logNormal("Not connected for a while after init..."), o("pushstream", "not connected after init", navigator.userAgent))
										}), T._activityTimeout)
									},
									_instantiatePushStream: function (e) {
										this._setMark(),
										t && (o("PushstreamDoublePublic", window.user && window.user.username || "Guest", navigator.userAgent), t.disconnect()),
										(t = new a(this._dispatchMessage.bind(this), {
											url: window.PUSHSTREAM_URL,
											urlPath: "message-pipe-ws"
										})).connectionStatus().subscribe(function (e) {
											this._dispatchStatusChange(e, g)
										}.bind(this)),
										n && (o("PushstreamDoublePrivate", window.user && window.user.username || "Guest", navigator.userAgent), n.disconnect()),
										(n = new a(this._dispatchMessage.bind(this), {
											url: window.PUSHSTREAM_URL,
											urlPath: "message-pipe-ws"
										})).connectionStatus().subscribe(function (e) {
											this._dispatchStatusChange(y, e)
										}.bind(this)),
										this.on("pushstream_set_user_channel", function (e) {
											this._setUserChannel(e)
										}.bind(this)),
										this._connectChannels(e)
									},
									_destructPushStream: function () {
										var e = t;
										t = null,
										e.disconnect(),
										e = n,
										n = null,
										e.disconnect(),
										this._dispatchStatusChangeFromOther(r.getItem(this._connectionStatusKey))
									},
									_activityTimeout: 5e3,
									_delayTimeout: 2e4,
									_pulseActivity: function () {
										this.ownPushStream() ? this._lostOwn() ? (_.logNormal("Lost own pushstream connection"), l.sendReport("site", "pushstream_lost_own"), this._destructPushStream()) : this._setMark() : this._needInstantiating() && !b && (_.logNormal("Creating pushstream connection, because other tab lost it"), l.sendReport("site", "pushstream_pick_up"), this._instantiatePushStream(this.getChannels()))
									},
									_markName: f + "mark",
									_lostOwn: function () {
										var e = r.getItem(this._markName);
										return !!e && (e = this._decodeParams(e))[0] !== this.guid
									},
									_getMark: function () {
										return this._decodeParams(r.getItem(this._markName))
									},
									_setMark: function () {
										r.setItem(this._markName, this._codeParams([this.guid, (new Date).getTime()]))
									},
									_unsetMark: function () {
										r.setItem(this._markName, "")
									},
									_needInstantiating: function () {
										var e = r.getItem(this._markName);
										if (e) {
											var t = (e = this._decodeParams(e))[1];
											return (new Date).getTime() - t > this._delayTimeout
										}
										return !0
									},
									_onRequestRecreate: function (e) {
										if (!this.ownPushStream() && this._needInstantiating()) {
											var t = this._decodeParams(e)[0];
											_.logNormal("Creating pushstream connection after recreate request"),
											this._instantiatePushStream(t)
										}
									},
									_onUnload: function () {
										this.ownPushStream() && (this._unsetMark(), this._sendRecreateRequest())
									},
									_getChannels: function () {
										return t.getChannels().concat(n.getChannels())
									},
									_channelsName: f + "channels",
									_getChannelsFromStorage: function () {
										var e = r.getItem(this._channelsName);
										return e ? JSON.parse(e) : []
									},
									getChannels: function () {
										return this.ownPushStream() ? this._getChannels() : this._getChannelsFromStorage()
									},
									_storeChannels: function () {
										r.setItem(this._channelsName, JSON.stringify(this._getChannels()))
									},
									_sendRecreateRequest: function () {
										var e = this._getChannels();
										s.emit(this._xEventRecreate, this._codeParams([e]))
									},
									ownPushStream: function () {
										return !!t || !! n
									},
									pushStream: function () {
										if (!this.ownPushStream()) throw new Error("Not own PushStream");
										return t
									},
									isConnected: function () {
										return y > 0
									},
									status: function () {
										return y || c.Closed
									},
									statusPrivate: function () {
										return g || c.Closed
									},
									_userChannel: function (e) {
										return "private_" + e
									},
									userChannel: function () {
										if (!p) throw new Error("No user channel");
										return this._userChannel(p)
									},
									_xEventRecreate: S + "recreate",
									_xEventSend: S + "send",
									_xEventChannelAdd: S + "channelAdd",
									_xEventChannelRemove: S + "channelRemove",
									_xEventRequiredChannels: S + "requirech",
									_xEventConnectionStatus: S + "connectionStatus",
									_xEventReconnectCommand: S + "reconnectCommand",
									_xEventRequestLogs: S + "requestLogs",
									_xEventShareLogs: S + "shareLogs",
									_shareLogsKey: f + "shareLogs",
									_connectionStatusKey: f + "connectionStatus",
									_addChannel: function (e) {
										var i = e.startsWith("private_") ? n : t;
										i.hasChannel(e) || (i.addChannel(e), this._storeChannels())
									},
									addChannel: function (e) {
										this.ownPushStream() ? this._addChannel(e) : s.emit(this._xEventChannelAdd, this._codeParams([e]))
									},
									_addChannelFromOther: function (e) {
										var t = this._decodeParams(e)[0];
										this.ownPushStream() && this._addChannel(t)
									},
									_removeChannel: function (e) {
										var i = e.startsWith("private_") ? n : t;
										i.hasChannel(e) && (i.removeChannel(e), this._storeChannels())
									},
									removeChannel: function (e) {
										this.ownPushStream() ? this._removeChannel(e) : s.emit(this._xEventChannelRemove, this._codeParams([e]))
									},
									_removeChannelFromOther: function (e) {
										var t = this._decodeParams(e)[0];
										this.ownPushStream() && this._removeChannel(t)
									},
									_connectChannels: function (e) {
										t.addChannel("public"),
										void 0 !== e && e.length > 0 && e.forEach((function (e) {
											e.startsWith("private_") || t.hasChannel(e) || t.addChannel(e)
										})),
										"is_authenticated" in window ? this._connectUserChannelInitial(!0) : window.loginStateChange && loginStateChange.subscribe(this, this._connectUserChannelInitial),
										t.connect()
									},
									_connectUserChannelInitial: function (e) {
										e && (is_authenticated ? (p = user.private_channel, n.addChannel(this.userChannel()), n.connect()) : p = null)
									},
									_changeLoginState: function (e) {
										e || (is_authenticated ? (p = user.private_channel, this.ownPushStream() && (this._addChannel(this.userChannel()), n.connect())) : (this.ownPushStream() && (this._removeChannel(this.userChannel()), n.disconnect()), p = null))
									},
									_setUserChannel: function (e) {
										_.logNormal("Set user channel " + e),
										e !== p && (this.ownPushStream() && p && this._removeChannel(this.userChannel()), p = e, this.ownPushStream() && p && this._addChannel(this.userChannel()))
									},
									_dispatchStatusChange: function (e, t) {
										this._dispatchStatusChangeToOthers(e, t),
										this._dispatchStatusChangeToSelf(e, t)
									},
									_dispatchStatusChangeToSelf: function (e, t) {
										e !== y && (y = e, this._callStatusHandlers(e, !1)),
										t !== g && (g = t, this._callStatusHandlers(t, !0))
									},
									_callStatusHandlers: function (e, t) {
										_.logNormal("Connection status change: " + e + ", private " + t),
										l.sendReport("site", "pushstream_status_change"),
										m.forEach((function (n) {
											n.isPrivate === t && n.handler(e)
										}))
									},
									_decodeConnectionStatus: function (e) {
										var t = parseInt(e, 10);
										return isNaN(t) ? this._decodeParams(e) : [t, t]
									},
									_dispatchStatusChangeFromOther: function (e) {
										var t = this._decodeConnectionStatus(e),
											n = t[0],
											i = t[1];
										this.ownPushStream() || this._dispatchStatusChangeToSelf(n, i)
									},
									_dispatchStatusChangeToOthers: function (e, t) {
										if (this.ownPushStream()) {
											var n = this._codeParams([e, t]);
											r.setItem(this._connectionStatusKey, n),
											s.emit(this._xEventConnectionStatus, n)
										}
									},
									_dispatchMessage: function (e, t, n) {
										this._dispatchMessageToOthers(e, t, n),
										this._dispatchMessageToSelf(e, t, n, !1)
									},
									_dispatchMessageToSelf: function (e, t, n, i) {
										n = e.channel,
										e = e.content,
										this._emit(e, t, n, i)
									},
									_dispatchMessageToOthers: function (e, t, n) {
										var i = [e, t, n, (new Date).getTime()];
										s.emit(this._xEventSend, this._codeParams(i))
									},
									_dispatchMessageFromOther: function (e) {
										if (!this.ownPushStream()) {
											var t = this._decodeParams(e),
												n = t[0],
												i = t[1],
												s = t[2];
											this._dispatchMessageToSelf(n, i, s, !0)
										}
									},
									_isSpecialChannel: function (e) {
										return /\*/.test(e)
									},
									_emit: function (e, t, n, i) {
										function s(s) {
											s.call(this, e, t, n, i)
										}
										for (var o in u[n] && u[n].forEach(s, this), d) {
											var r = "^" + o.replace(/\*/g, ".*?") + "$";
											new RegExp(r).test(n) && d[o].forEach(s, this)
										}
									},
									on: function (e, t) {
										var n = this._isSpecialChannel(e) ? d : u;
										n[e] || (n[e] = []),
										n[e].push(t)
									},
									off: function (e, t) {
										var n = this._isSpecialChannel(e) ? d : u;
										switch (arguments.length) {
										case 0:
											u = {},
											d = {};
											break;
										case 1:
											n[e] && delete n[e];
											break;
										default:
											if (n[e]) {
												var i = n[e].indexOf(t);~i && n[e].splice(i, 1)
											}
										}
									},
									onStatus: function (e) {
										m.push({
											handler: e,
											isPrivate: !1
										}),
										setTimeout((function () {
											e(y)
										}), 0)
									},
									onPrivateStatus: function (e) {
										m.push({
											handler: e,
											isPrivate: !0
										}),
										setTimeout((function () {
											e(g)
										}), 0)
									},
									offStatus: function (e) {
										m = m.filter((function (t) {
											return t.handler !== e
										}))
									},
									forceConnect: function () {
										b = !1,
										_.logNormal("Creating pushstream connection after force connect"),
										this.ownPushStream() ? (t.disconnect(), n.disconnect(), this._instantiatePushStream(this.getChannels())) : this._needInstantiating() ? this._instantiatePushStream() : s.emit(this._xEventReconnectCommand, {})
									},
									disconnect: function () {
										this.ownPushStream() && (this._destructPushStream(), this._unsetMark(), b = !0)
									},
									_dispatchReconnectCommandFromOther: function () {
										this.ownPushStream() && this.forceConnect()
									},
									_getOwnLogs: function (e) {
										if (this.ownPushStream()) {
											var t = h(e, "PushStreamMultiplexer"),
												n = this.pushStream().getLogs();
											return [].concat(t, n)
										}
										return []
									},
									_onRequestLogs: function (e) {
										if (this.ownPushStream()) {
											var t = this._getOwnLogs(e),
												n = "";
											try {
												n = JSON.stringify(t)
											} catch (e) {
												_.logError("Failed to stringify own pushstream logs")
											}
											r.setItem(this._shareLogsKey, n),
											s.emit(this._xEventShareLogs, n)
										}
									},
									getLogs: function (e) {
										return new Promise(function (t) {
											var n = setTimeout(function () {
												var e = r.getItem(this._shareLogsKey);
												t(null !== e ? JSON.parse(e) : [])
											}.bind(this), 1e3),
												i = function (e) {
													var o;
													s.off(this._xEventShareLogs, i),
													s.emit(this._xEventShareLogs, ""),
													clearTimeout(n);
													try {
														o = JSON.parse(e)
													} catch (e) {
														o = [],
														_.logError("Failed to parse logs received from master tab")
													}
													t(o)
												}.bind(this);
											this.ownPushStream() ? t(this._getOwnLogs(e)) : (s.on(this._xEventShareLogs, i), s.emit(this._xEventRequestLogs))
										}.bind(this))
									}
								};
							return T._init(),
							window.addEventListener("unload", T._onUnload.bind(T)),
							s.on(T._xEventRecreate, T._onRequestRecreate.bind(T)),
							s.on(T._xEventSend, T._dispatchMessageFromOther.bind(T)),
							s.on(T._xEventChannelAdd, T._addChannelFromOther.bind(T)),
							s.on(T._xEventChannelRemove, T._removeChannelFromOther.bind(T)),
							s.on(T._xEventConnectionStatus, T._dispatchStatusChangeFromOther.bind(T)),
							s.on(T._xEventReconnectCommand, T._dispatchReconnectCommandFromOther.bind(T)),
							s.on(T._xEventRequestLogs, T._onRequestLogs.bind(T)),
							e = function () {
								window.loginStateChange && loginStateChange.subscribe(T, T._changeLoginState)
							},
							"loading" !== document.readyState ? e() : document.addEventListener("DOMContentLoaded", e),
							setInterval(T._pulseActivity.bind(T), T._activityTimeout),
							T._pulseActivity(),
							T
						}();
					e.exports = m
				},
				590479: (e, t, n) = > {
					"use strict";
					n.d(t, {
						PushStream: () = > d
					});
					var i = n(588537),
						s = n(911905),
						o = n(246433),
						r = n(673438);
					const a = (0, s.getLogger)("PersistentWebsocketTransport");
					class c extends r.PersistentTransport {
						constructor(e, t) {
							super(e, a, t)
						}
						sendMessage(e) {
							this._connectionStatus.value() === o.ConnectionStatus.Open ? this._socket ? this._socket.send(e) : a.logError("Something went wrong - code 0x3") : a.logWarn("Attempt to send message but connection is not opened")
						}
						_createNativeTransport(e) {
							const t = new WebSocket(e);
							return t.binaryType = "arraybuffer",
							t.addEventListener("error", this._socketErrorHandler),
							t.addEventListener("close", this._socketCloseHandler),
							t.addEventListener("open", this._socketOpenHandler),
							t.addEventListener("message", this._socketMessageHandler),
							t
						}
						_disconnectTransport() {
							if (null === this._socket) return;
							this._socket.removeEventListener("error", this._socketErrorHandler),
							this._socket.removeEventListener("close", this._socketCloseHandler),
							this._socket.removeEventListener("open", this._socketOpenHandler),
							this._socket.removeEventListener("message", this._socketMessageHandler),
							this._removeOnOfflineListener();
							const e = this._socket;
							this._socket = null,
							this._connectionStatus.setValue(o.ConnectionStatus.Closed),
							e.readyState !== WebSocket.CLOSED && e.close()
						}
					}
					var l = n(175203);
					const u = (0, s.getLogger)("PushStream");
					class d {
						constructor(e, t) {
							this._channels = [],
							this._transport = new c(this._onPushStreamMessage.bind(this), this._onPushStreamClose.bind(this)),
							this._settings = t,
							this._messageHandler = e
						}
						addChannel(e) {
							(0, i.assert)(!this.hasChannel(e), "Channel already subscribed"),
							u.logNormal("Adding channel " + e),
							this._channels.push(e),
							this._transport.setUrl(this._generateUrl())
						}
						removeChannel(e) {
							const t = this._channels.indexOf(e);
							(0, i.assert)(-1 !== t, "There is no that channel"),
							u.logNormal("Removing channel " + e),
							this._channels.splice(t, 1),
							this._transport.setUrl(this._generateUrl())
						}
						getChannels() {
							return this._channels
						}
						hasChannel(e) {
							return -1 !== this._channels.indexOf(e)
						}
						connectionStatus() {
							return this._transport.connectionStatus()
						}
						connect() {
							(0, i.assert)(0 !== this._channels.length, "There is no channels"),
							this._transport.connect()
						}
						disconnect() {
							this._transport.disconnect()
						}
						sendMessage(e) {
							this._transport.sendMessage(e)
						}
						getLogs(e) {
							return (0, s.getRawLogHistory)(e, "PushStream")
						}
						_onPushStreamMessage(e) {
							if ("string" != typeof e) throw new Error("Wrong message type, expected string");
							const t = JSON.parse(e),
							n = t.id,
							i = t.channel; - 2 === n ? u.logWarn("Received unexpected message: about removed the channel") : n > 0 && (u.logDebug(`Received message: id = "${n}"
							channel = "${i}"`), this._messageHandler(t.text, n, i))
						}
						_onPushStreamClose(e) {
							1005 === e.code && l.telemetry.sendChartReport("websocket_code_1005")
						}
						_generateUrl() {
							const e = this._channels.join("/");
							return`$ {
								this._settings.url
							}
							/${this._settings.urlPath}/$ {
								e
							}`
						}
					}
				},
				564894: (e, t, n) = > {
					"use strict";
					n.d(t, {
						registerService: () = > r,
						unregisterService: () = > a,
						hasService: () = > c,
						service: () = > l,
						waitServiceRegistered: () = > u
					});
					var i = n(579917);
					const s = {},
					o = new Map;

					function r(e, t) {
						if (c(e)) throw new Error("Service already registered");
						s[e.id] = t;
						const n = o.get(e.id);
						void 0 !== n && (o.delete(e.id), n.resolve(t))
					}
					function a(e) {
						if (!c(e)) throw new Error("Service not found");
						s[e.id] = void 0
					}
					function c(e) {
						return void 0 !== s[e.id]
					}
					function l(e) {
						const t = s[e.id];
						if (void 0 === t) throw new Error("ServiceLocator: Service " + e.id + " not found");
						return t
					}
					function u(e) {
						if (c(e)) return Promise.resolve(l(e));
						let t = o.get(e.id);
						return void 0 === t && (t = (0, i.createDeferredPromise)(), o.set(e.id, t)),
						t.promise
					}
				},
				779923: (e, t, n) = > {
					"use strict";
					async
					function i(e, t) {
						const i = await Promise.all([n.e(69129), n.e(82888), n.e(48463), n.e(25113), n.e(34956), n.e(15998), n.e(69875), n.e(8879), n.e(66333), n.e(50279), n.e(34634), n.e(87995), n.e(27582), n.e(38890)]).then(n.bind(n, 894185));
						return i.showSimpleDialog(e, i.renameModule, t)
					}
					async
					function s(e, t) {
						const i = await Promise.all([n.e(69129), n.e(82888), n.e(48463), n.e(25113), n.e(34956), n.e(15998), n.e(69875), n.e(8879), n.e(66333), n.e(50279), n.e(34634), n.e(87995), n.e(27582), n.e(38890)]).then(n.bind(n, 894185));
						return i.showSimpleDialog(e, i.confirmModule, t)
					}
					async
					function o(e, t) {
						const i = await Promise.all([n.e(69129), n.e(82888), n.e(48463), n.e(25113), n.e(34956), n.e(15998), n.e(69875), n.e(8879), n.e(66333), n.e(50279), n.e(34634), n.e(87995), n.e(27582), n.e(38890)]).then(n.bind(n, 894185));
						return i.showSimpleDialog(e, i.warningModule, t)
					}
					n.r(t),
					n.d(t, {
						showRename: () = > i,
						showConfirm: () = > s,
						showWarning: () = > o
					})
				},
				224743: (e, t, n) = > {
					"use strict";
					n.d(t, {
						globalCloseDelegate: () = > s,
						globalCloseMenu: () = > o
					});
					var i = n(97639);
					const s = new(n.n(i)());

					function o() {
						s.fire()
					}
				}
			}]);