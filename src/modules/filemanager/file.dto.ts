interface IFileDetails {
  originalName: string;
  fileName: string;
  size: number;
}

export class FileDetails {
  constructor(data: IFileDetails) {
    if (data) {
      this.originalName = data.originalName;
      this.fileName = data.fileName;
      this.size = data.size;
    }
  }

  originalName: string;

  fileName: string;

  size: number;
}
