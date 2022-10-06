const fs = require('fs').promises;

const array = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'];

const files = ['file1.txt', 'file2.txt', 'file2.txt', 'file3.txt', 'file4.txt', 'file5.txt'];

const readAndWhrite = async () => {
  const createFiles = array
    .map((string, index) => fs.writeFile(`file${index + 1}.txt`, string));

  await Promise.all(createFiles);

  const readFiles = files.map((file) => fs.readFile(file, 'utf-8'));

  const allFiles = await Promise.all(readFiles);

  await fs.writeFile('fileAll.txt', allFiles.join(' '));
};

readAndWhrite();
