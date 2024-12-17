import Footer from '@/components/footer/index';
import MainImageSection from '@/components/main_image_section/index';
import UploadsHeader from '@/components/uploads_header/index';
import UploadsSection from '@/components/uploads_section/index';
import { Fragment } from 'react';

export default function Home() {
  return (
    <Fragment>
      <MainImageSection />
      <UploadsHeader />
      <UploadsSection />
      <Footer />
    </Fragment>
  );
}
