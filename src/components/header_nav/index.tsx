import Image from 'next/image';
import Link from 'next/link';

const HeaderNav = (): React.ReactElement => {
  return (
    <Link
      className={
        'flex items-center justify-center px-4 py-3 shadow-2xl bg-stone-200'
      }
      href="/"
    >
      <Image
        src={'/images/yib_icon.jpg'}
        width={100}
        height={100}
        alt="years in between icon"
      />
    </Link>
  );
};

export default HeaderNav;
