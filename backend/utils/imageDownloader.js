import download from 'image-downloader';
import mime from 'mime-types';

export const downloadImage = async (link, dest) => {
  const extension = mime.entenxio(link);
  const filename = `${Date.now()}.${extension}`;

  options = {
    url: link,
    dest: `${dest}/${filename}`,
  };

  try {
    await download.image(options);
    console.log('Saved to', filename);
  } catch (error) {
    console.error(error);
  }
};
