// Regular expression that matches all symbols with the `Diacritic` property as per Unicode v5.2.0:
/[\x5E\x60\xA8\xAF\xB4\xB7\xB8\u02B0-\u034E\u0350-\u0357\u035D-\u0362\u0374\u0375\u037A\u0384\u0385\u0483-\u0487\u0559\u0591-\u05A1\u05A3-\u05BD\u05BF\u05C1\u05C2\u05C4\u064B-\u0652\u0657\u0658\u06DF\u06E0\u06E5\u06E6\u06EA-\u06EC\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F5\u0818\u0819\u093C\u094D\u0951-\u0954\u0971\u09BC\u09CD\u0A3C\u0A4D\u0ABC\u0ACD\u0B3C\u0B4D\u0BCD\u0C4D\u0CBC\u0CCD\u0D4D\u0DCA\u0E47-\u0E4C\u0E4E\u0EC8-\u0ECC\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F82-\u0F84\u0F86\u0F87\u0FC6\u1037\u1039\u103A\u1087-\u108D\u108F\u109A\u109B\u17C9-\u17D3\u17DD\u1939-\u193B\u1A75-\u1A7C\u1A7F\u1B34\u1B44\u1B6B-\u1B73\u1BAA\u1C36\u1C37\u1C78-\u1C7D\u1CD0-\u1CE8\u1CED\u1D2C-\u1D6A\u1DC4-\u1DCF\u1DFD-\u1DFF\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2CEF-\u2CF1\u2E2F\u302A-\u302F\u3099-\u309C\u30FC\uA66F\uA67C\uA67D\uA67F\uA6F0\uA6F1\uA717-\uA721\uA788\uA8C4\uA8E0-\uA8F1\uA92B-\uA92E\uA953\uA9B3\uA9C0\uAA7B\uAABF-\uAAC2\uABEC\uABED\uFB1E\uFE20-\uFE26\uFF3E\uFF40\uFF70\uFF9E\uFF9F\uFFE3]|\uD834[\uDD67-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD]|\uD804[\uDCB9\uDCBA]|/;