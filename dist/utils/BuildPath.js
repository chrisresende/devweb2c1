"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function BuildPath(pathDirName) {
    const paths = pathDirName.split('\\');
    let path = '';
    for (let i = 0; i < paths.length - 2; i++) {
        path = path + paths[i] + '\\';
    }
    return path;
}
exports.default = BuildPath;
//# sourceMappingURL=BuildPath.js.map