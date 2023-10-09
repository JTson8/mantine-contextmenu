import { IconCopy, IconDownload } from '@tabler/icons-react';
import { useContextMenu } from 'mantine-contextmenu';
import Picture from '~/components/Picture';
import { copyImageToClipboard, downloadImage, unsplashImages } from '~/lib/image';

export default function GettingStartedExample() {
  // example-start
  const showContextMenu = useContextMenu();
  // example-skip
  const image = unsplashImages[0];
  const { src } = image.file;
  // example-resume
  return (
    <Picture
      image={image}
      onContextMenu={showContextMenu([
        {
          key: 'copy',
          icon: <IconCopy size={16} />,
          title: 'Copy to clipboard',
          onClick: () => copyImageToClipboard(src),
        },
        {
          key: 'download',
          icon: <IconDownload size={16} />,
          title: 'Download to your computer',
          onClick: () => downloadImage(src),
        },
      ])}
    />
  );
  // example-end
}
