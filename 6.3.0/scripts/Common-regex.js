// Regular expression that matches all symbols in the `Common` script as per Unicode v6.3.0:
/[\x00-\x40\x5B-\x60\x7B-\xA9\xAB-\xB9\xBB-\xBF\xD7\xF7\u02B9-\u02DF\u02E5-\u02E9\u02EC-\u02FF\u0374\u037E\u0385\u0387\u0589\u060C\u061B\u061F\u0640\u0660-\u0669\u06DD\u0964\u0965\u0E3F\u0FD5-\u0FD8\u10FB\u16EB-\u16ED\u1735\u1736\u1802\u1803\u1805\u1CD3\u1CE1\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u2000-\u200B\u200E-\u2064\u2066-\u2070\u2074-\u207E\u2080-\u208E\u20A0-\u20BA\u2100-\u2125\u2127-\u2129\u212C-\u2131\u2133-\u214D\u214F-\u215F\u2189\u2190-\u23F3\u2400-\u2426\u2440-\u244A\u2460-\u26FF\u2701-\u27FF\u2900-\u2B4C\u2B50-\u2B59\u2E00-\u2E3B\u2FF0-\u2FFB\u3000-\u3004\u3006\u3008-\u3020\u3030-\u3037\u303C-\u303F\u309B\u309C\u30A0\u30FB\u30FC\u3190-\u319F\u31C0-\u31E3\u3220-\u325F\u327F-\u32CF\u3358-\u33FF\u4DC0-\u4DFF\uA700-\uA721\uA788-\uA78A\uA830-\uA839\uA9CF\uFD3E\uFD3F\uFDFD\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE66\uFE68-\uFE6B\uFEFF\uFF01-\uFF20\uFF3B-\uFF40\uFF5B-\uFF65\uFF70\uFF9E\uFF9F\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFF9-\uFFFD]|\uD800[\uDD00-\uDD02\uDD07-\uDD33\uDD37-\uDD3F\uDD90-\uDD9B\uDDD0-\uDDFC]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBE\uDCC1-\uDCCF\uDCD1-\uDCDF\uDD00-\uDD0A\uDD10-\uDD2E\uDD30-\uDD6B\uDD70-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE10-\uDE3A\uDE40-\uDE48\uDE50\uDE51\uDF00-\uDF20\uDF30-\uDF35\uDF37-\uDF7C\uDF80-\uDF93\uDFA0-\uDFC4\uDFC6-\uDFCA\uDFE0-\uDFF0]|\uDB40[\uDC01\uDC20-\uDC7F]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDFCB\uDFCE-\uDFFF]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD66\uDD6A-\uDD7A\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDDD\uDF00-\uDF56\uDF60-\uDF71]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCF7\uDCF9-\uDCFC\uDD00-\uDD3D\uDD40-\uDD43\uDD50-\uDD67\uDDFB-\uDE40\uDE45-\uDE4F\uDE80-\uDEC5\uDF00-\uDF73]/;