import * as uuid from 'uuid'
import * as path from 'path'

class FileService {
  saveFile(file) {
    try {
      if (Array.isArray(file)) {
        const fileNames = file.map(image => {
          const fileName = uuid.v4() + '.jpg';
          const filePath = path.resolve('static', fileName);
          image.mv(filePath);
          return fileName
        })
        return fileNames
      } else {
        const fileName = uuid.v4() + '.jpg';
        const filePath = path.resolve('static', fileName);
        file.mv(filePath);
        return [fileName]
      }
    } catch (e) {
      console.log(e)
    }
  }
}

export default new FileService();