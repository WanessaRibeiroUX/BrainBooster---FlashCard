declare module "node-zip" {
  interface ZipFile {
    name: string;
    _data: Buffer | string;
  }

  interface ZipFiles {
    [filename: string]: ZipFile;
  }

  interface ZipOptions {
    base64?: boolean;
    checkCRC32?: boolean;
  }

  class NodeZip {
    files: ZipFiles;

    constructor(data: Buffer | string, options?: ZipOptions);
  }

  export = NodeZip;
}
