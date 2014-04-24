// Regular expression that matches all symbols with the `Grapheme_Base` derived core property as per Unicode v5.1.0:
/[\x20-\x7E\xA0-\xAC\xAE-\u02FF\u0370-\u0377\u037A-\u037E\u0384-\u038A\u038C\u038E-\u03A1\u03A3-\u0482\u048A-\u0523\u0531-\u0556\u0559-\u055F\u0561-\u0587\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05D0-\u05EA\u05F0-\u05F4\u0606-\u060F\u061B\u061E\u061F\u0621-\u064A\u0660-\u066F\u0671-\u06D5\u06E5\u06E6\u06E9\u06EE-\u070D\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07C0-\u07EA\u07F4-\u07FA\u0903-\u0939\u093D-\u0940\u0949-\u094C\u0950\u0958-\u0961\u0964-\u0972\u097B-\u097F\u0982\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09BF\u09C0\u09C7\u09C8\u09CB\u09CC\u09CE\u09DC\u09DD\u09DF-\u09E1\u09E6-\u09FA\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3E-\u0A40\u0A59-\u0A5C\u0A5E\u0A66-\u0A6F\u0A72-\u0A74\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD-\u0AC0\u0AC9\u0ACB\u0ACC\u0AD0\u0AE0\u0AE1\u0AE6-\u0AEF\u0AF1\u0B02\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B40\u0B47\u0B48\u0B4B\u0B4C\u0B5C\u0B5D\u0B5F-\u0B61\u0B66-\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBF\u0BC1\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCC\u0BD0\u0BE6-\u0BFA\u0C01-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C41-\u0C44\u0C58\u0C59\u0C60\u0C61\u0C66-\u0C6F\u0C78-\u0C7F\u0C82\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CBE\u0CC0\u0CC1\u0CC3\u0CC4\u0CC7\u0CC8\u0CCA\u0CCB\u0CDE\u0CE0\u0CE1\u0CE6-\u0CEF\u0CF1\u0CF2\u0D02\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D28\u0D2A-\u0D39\u0D3D\u0D3F\u0D40\u0D46-\u0D48\u0D4A-\u0D4C\u0D60\u0D61\u0D66-\u0D75\u0D79-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DD0\u0DD1\u0DD8-\u0DDE\u0DF2-\u0DF4\u0E01-\u0E30\u0E32\u0E33\u0E3F-\u0E46\u0E4F-\u0E5B\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0ED0-\u0ED9\u0EDC\u0EDD\u0F00-\u0F17\u0F1A-\u0F34\u0F36\u0F38\u0F3A-\u0F47\u0F49-\u0F6C\u0F7F\u0F85\u0F88-\u0F8B\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE-\u0FD4\u1000-\u102C\u1031\u1038\u103B\u103C\u103F-\u1057\u105A-\u105D\u1061-\u1070\u1075-\u1081\u1083\u1084\u1087-\u108C\u108E-\u1099\u109E-\u10C5\u10D0-\u10FC\u1100-\u1159\u115F-\u11A2\u11A8-\u11F9\u1200-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1360-\u137C\u1380-\u1399\u13A0-\u13F4\u1401-\u1676\u1680-\u169C\u16A0-\u16F0\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1735\u1736\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17B6\u17BE-\u17C5\u17C7\u17C8\u17D4-\u17DC\u17E0-\u17E9\u17F0-\u17F9\u1800-\u180A\u180E\u1810-\u1819\u1820-\u1877\u1880-\u18A8\u18AA\u1900-\u191C\u1923-\u1926\u1929-\u192B\u1930\u1931\u1933-\u1938\u1940\u1944-\u196D\u1970-\u1974\u1980-\u19A9\u19B0-\u19C9\u19D0-\u19D9\u19DE-\u1A16\u1A19-\u1A1B\u1A1E\u1A1F\u1B04-\u1B33\u1B35\u1B3B\u1B3D-\u1B41\u1B43-\u1B4B\u1B50-\u1B6A\u1B74-\u1B7C\u1B82-\u1BA1\u1BA6\u1BA7\u1BAA\u1BAE-\u1BB9\u1C00-\u1C2B\u1C34\u1C35\u1C3B-\u1C49\u1C4D-\u1C7F\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FC4\u1FC6-\u1FD3\u1FD6-\u1FDB\u1FDD-\u1FEF\u1FF2-\u1FF4\u1FF6-\u1FFE\u2000-\u200A\u2010-\u2027\u202F-\u205F\u2070\u2071\u2074-\u208E\u2090-\u2094\u20A0-\u20B5\u2100-\u214F\u2153-\u2188\u2190-\u23E7\u2400-\u2426\u2440-\u244A\u2460-\u269D\u26A0-\u26BC\u26C0-\u26C3\u2701-\u2704\u2706-\u2709\u270C-\u2727\u2729-\u274B\u274D\u274F-\u2752\u2756\u2758-\u275E\u2761-\u2794\u2798-\u27AF\u27B1-\u27BE\u27C0-\u27CA\u27CC\u27D0-\u2B4C\u2B50-\u2B54\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2C6F\u2C71-\u2C7D\u2C80-\u2CEA\u2CF9-\u2D25\u2D30-\u2D65\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E00-\u2E30\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFB\u3000-\u3029\u3030-\u303F\u3041-\u3096\u309B-\u30FF\u3105-\u312D\u3131-\u318E\u3190-\u31B7\u31C0-\u31E3\u31F0-\u321E\u3220-\u3243\u3250-\u32FE\u3300-\u4DB5\u4DC0-\u9FC3\uA000-\uA48C\uA490-\uA4C6\uA500-\uA62B\uA640-\uA65F\uA662-\uA66E\uA673\uA67E-\uA697\uA700-\uA78C\uA7FB-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA824\uA827-\uA82B\uA840-\uA877\uA880-\uA8C3\uA8CE-\uA8D9\uA900-\uA925\uA92E-\uA946\uA952\uA953\uA95F\uAA00-\uAA28\uAA2F\uAA30\uAA33\uAA34\uAA40-\uAA42\uAA44-\uAA4B\uAA4D\uAA50-\uAA59\uAA5C-\uAA5F\uAC00-\uD7A3\uF900-\uFA2D\uFA30-\uFA6A\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3F\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFD\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE66\uFE68-\uFE6B\uFE70-\uFE74\uFE76-\uFEFC\uFF01-\uFF9D\uFFA0-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD00-\uDD02\uDD07-\uDD33\uDD37-\uDD8A\uDD90-\uDD9B\uDDD0-\uDDFC\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1E\uDF20-\uDF23\uDF30-\uDF4A\uDF80-\uDF9D\uDF9F-\uDFC3\uDFC8-\uDFD5]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93]|\uD87E[\uDC00-\uDE1D]|\uD809[\uDC00-\uDC62\uDC70-\uDC73]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F\uDD00-\uDD19\uDD1F-\uDD39\uDD3F\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE40-\uDE47\uDE50-\uDE58]|\uD869[\uDC00-\uDED6]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDFCB\uDFCE-\uDFFF]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD66\uDD6A-\uDD6D\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDDD\uDE00-\uDE41\uDE45\uDF00-\uDF56\uDF60-\uDF71]|[\uD840-\uD868][\uDC00-\uDFFF]|\uD808[\uDC00-\uDF6E]/;