export type Rule = {
  type: string;
  start?: number;
  and?: number;
  bytes?: string;
  rules?: Rule[];
};

export type Signature = {
  type: string;
  ext?: string;
  mime?: string;
  rules: Rule[]
  desc?: string;
}

export type FileType = {
  ext: string;
  mime: string;
};

export type Callback = (err?: Error, type?: FileType) => any

declare class DetectFileType {
  static fromFile(filePath: string, bufferLength: number | Callback, callback?: Callback);
  static fromFd(fd: number, bufferLength: number | Callback, callback?: Callback);
  static fromBuffer(fd: Buffer, callback: Callback);
  static addSignature(Signature);
  static addCustomFunction(buffer: Buffer);
}

export = DetectFileType
