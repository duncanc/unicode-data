// Regular expression that matches all symbols in the C category as per Unicode v4.1.0:
/[\0-\x1F\x7F-\x9F\xAD\u0242-\u024F\u0370-\u0373\u0376-\u0379\u037B-\u037D\u037F-\u0383\u038B\u038D\u03A2\u03CF\u0487\u04CF\u04FA-\u04FF\u0510-\u0530\u0557\u0558\u0560\u0588\u058B-\u0590\u05BA\u05C8-\u05CF\u05EB-\u05EF\u05F5-\u060A\u0616-\u061A\u061C\u061D\u0620\u063B-\u063F\u065F\u06DD\u070E\u070F\u074B\u074C\u076E-\u077F\u07B2-\u0900\u093A\u093B\u094E\u094F\u0955-\u0957\u0971-\u097C\u097E-\u0980\u0984\u098D\u098E\u0991\u0992\u09A9\u09B1\u09B3-\u09B5\u09BA\u09BB\u09C5\u09C6\u09C9\u09CA\u09CF-\u09D6\u09D8-\u09DB\u09DE\u09E4\u09E5\u09FB-\u0A00\u0A04\u0A0B-\u0A0E\u0A11\u0A12\u0A29\u0A31\u0A34\u0A37\u0A3A\u0A3B\u0A3D\u0A43-\u0A46\u0A49\u0A4A\u0A4E-\u0A58\u0A5D\u0A5F-\u0A65\u0A75-\u0A80\u0A84\u0A8E\u0A92\u0AA9\u0AB1\u0AB4\u0ABA\u0ABB\u0AC6\u0ACA\u0ACE\u0ACF\u0AD1-\u0ADF\u0AE4\u0AE5\u0AF0\u0AF2-\u0B00\u0B04\u0B0D\u0B0E\u0B11\u0B12\u0B29\u0B31\u0B34\u0B3A\u0B3B\u0B44-\u0B46\u0B49\u0B4A\u0B4E-\u0B55\u0B58-\u0B5B\u0B5E\u0B62-\u0B65\u0B72-\u0B81\u0B84\u0B8B-\u0B8D\u0B91\u0B96-\u0B98\u0B9B\u0B9D\u0BA0-\u0BA2\u0BA5-\u0BA7\u0BAB-\u0BAD\u0BBA-\u0BBD\u0BC3-\u0BC5\u0BC9\u0BCE-\u0BD6\u0BD8-\u0BE5\u0BFB-\u0C00\u0C04\u0C0D\u0C11\u0C29\u0C34\u0C3A-\u0C3D\u0C45\u0C49\u0C4E-\u0C54\u0C57-\u0C5F\u0C62-\u0C65\u0C70-\u0C81\u0C84\u0C8D\u0C91\u0CA9\u0CB4\u0CBA\u0CBB\u0CC5\u0CC9\u0CCE-\u0CD4\u0CD7-\u0CDD\u0CDF\u0CE2-\u0CE5\u0CF0-\u0D01\u0D04\u0D0D\u0D11\u0D29\u0D3A-\u0D3D\u0D44\u0D45\u0D49\u0D4E-\u0D56\u0D58-\u0D5F\u0D62-\u0D65\u0D70-\u0D81\u0D84\u0D97-\u0D99\u0DB2\u0DBC\u0DBE\u0DBF\u0DC7-\u0DC9\u0DCB-\u0DCE\u0DD5\u0DD7\u0DE0-\u0DF1\u0DF5-\u0E00\u0E3B-\u0E3E\u0E5C-\u0E80\u0E83\u0E85\u0E86\u0E89\u0E8B\u0E8C\u0E8E-\u0E93\u0E98\u0EA0\u0EA4\u0EA6\u0EA8\u0EA9\u0EAC\u0EBA\u0EBE\u0EBF\u0EC5\u0EC7\u0ECE\u0ECF\u0EDA\u0EDB\u0EDE-\u0EFF\u0F48\u0F6B-\u0F70\u0F8C-\u0F8F\u0F98\u0FBD\u0FCD\u0FCE\u0FD2-\u0FFF\u1022\u1028\u102B\u1033-\u1035\u103A-\u103F\u105A-\u109F\u10C6-\u10CF\u10FD-\u10FF\u115A-\u115E\u11A3-\u11A7\u11FA-\u11FF\u1249\u124E\u124F\u1257\u1259\u125E\u125F\u1289\u128E\u128F\u12B1\u12B6\u12B7\u12BF\u12C1\u12C6\u12C7\u12D7\u1311\u1316\u1317\u135B-\u135E\u137D-\u137F\u139A-\u139F\u13F5-\u1400\u1677-\u167F\u169D-\u169F\u16F1-\u16FF\u170D\u1715-\u171F\u1737-\u173F\u1754-\u175F\u176D\u1771\u1774-\u177F\u17B4\u17B5\u17DE\u17DF\u17EA-\u17EF\u17FA-\u17FF\u180F\u181A-\u181F\u1878-\u187F\u18AA-\u18FF\u191D-\u191F\u192C-\u192F\u193C-\u193F\u1941-\u1943\u196E\u196F\u1975-\u197F\u19AA-\u19AF\u19CA-\u19CF\u19DA-\u19DD\u1A1C\u1A1D\u1A20-\u1CFF\u1DC4-\u1DFF\u1E9C-\u1E9F\u1EFA-\u1EFF\u1F16\u1F17\u1F1E\u1F1F\u1F46\u1F47\u1F4E\u1F4F\u1F58\u1F5A\u1F5C\u1F5E\u1F7E\u1F7F\u1FB5\u1FC5\u1FD4\u1FD5\u1FDC\u1FF0\u1FF1\u1FF5\u1FFF\u200B-\u200F\u202A-\u202E\u2060-\u206F\u2072\u2073\u208F\u2095-\u209F\u20B6-\u20CF\u20EC-\u20FF\u214D-\u2152\u2184-\u218F\u23DC-\u23FF\u2427-\u243F\u244B-\u245F\u269D-\u269F\u26B2-\u2700\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u275F\u2760\u2795-\u2797\u27B0\u27BF\u27C7-\u27CF\u27EC-\u27EF\u2B14-\u2BFF\u2C2F\u2C5F-\u2C7F\u2CEB-\u2CF8\u2D26-\u2D2F\u2D66-\u2D6E\u2D70-\u2D7F\u2D97-\u2D9F\u2DA7\u2DAF\u2DB7\u2DBF\u2DC7\u2DCF\u2DD7\u2DDF-\u2DFF\u2E18-\u2E1B\u2E1E-\u2E7F\u2E9A\u2EF4-\u2EFF\u2FD6-\u2FEF\u2FFC-\u2FFF\u3040\u3097\u3098\u3100-\u3104\u312D-\u3130\u318F\u31B8-\u31BF\u31D0-\u31EF\u321F\u3244-\u324F\u32FF\u4DB6-\u4DBF\u9FBC-\u9FFF\uA48D-\uA48F\uA4C7-\uA6FF\uA717-\uA7FF\uA82C-\uABFF\uD7A4-\uD7FF\uDC00-\uF8FF\uFA2E\uFA2F\uFA6B-\uFA6F\uFADA-\uFAFF\uFB07-\uFB12\uFB18-\uFB1C\uFB37\uFB3D\uFB3F\uFB42\uFB45\uFBB2-\uFBD2\uFD40-\uFD4F\uFD90\uFD91\uFDC8-\uFDEF\uFDFE\uFDFF\uFE1A-\uFE1F\uFE24-\uFE2F\uFE53\uFE67\uFE6C-\uFE6F\uFE75\uFEFD-\uFF00\uFFBF-\uFFC1\uFFC8\uFFC9\uFFD0\uFFD1\uFFD8\uFFD9\uFFDD-\uFFDF\uFFE7\uFFEF-\uFFFB\uFFFE\uFFFF]|\uD869[\uDED7-\uDFFF]|\uD801[\uDC9E\uDC9F\uDCAA-\uDFFF]|[\uD803-\uD833\uD836-\uD83F\uD86A-\uD87D\uD87F-\uDB3F\uDB41-\uDBFF][\uDC00-\uDFFF]|\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDCFF\uDD03-\uDD06\uDD34-\uDD36\uDD8B-\uDEFF\uDF1F\uDF24-\uDF2F\uDF4B-\uDF7F\uDF9E\uDFC4-\uDFC7\uDFD6-\uDFFF]|\uD87E[\uDE1E-\uDFFF]|\uDB40[\uDC00-\uDCFF\uDDF0-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDFCA-\uDFCD]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC40-\uDDFF\uDE04\uDE07-\uDE0B\uDE14\uDE18\uDE34-\uDE37\uDE3B-\uDE3E\uDE48-\uDE4F\uDE59-\uDFFF]|\uD834[\uDCF6-\uDCFF\uDD27-\uDD29\uDD73-\uDD7A\uDDDE-\uDDFF\uDE46-\uDEFF\uDF57-\uDFFF]|[\uD800-\uDBFF]/;