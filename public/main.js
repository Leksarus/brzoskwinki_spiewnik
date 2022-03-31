const path = require('path');
const fs = require('fs');
const matter = require('gray-matter');
const dirPath = path.join(__dirname, "../src/songs/content")

const getSongs = () => {
  fs.readdir(dirPath, (err, files) => {
    const titles = {}
    if (err) {
        return console.log("Failed to list contents of directory: " + err)
    }
    files.forEach((file, i) => {
      fs.readFile(`${dirPath}/${file}`, "utf8", (err, contents) => {
        const title = matter(contents).data.title
        titles[file] = title
        fs.writeFileSync("src/songs/titles.json", JSON.stringify(titles))
      })
    })
})
}

getSongs()