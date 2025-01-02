import Image from 'next/image';

const HeaderNav = (): React.ReactElement => {
  return (
    <div
      className={
        'flex items-center justify-center px-4 py-3 shadow-2xl bg-stone-200'
      }
    >
      <Image
        src={'/images/yib_icon.jpg'}
        width={100}
        height={100}
        alt="years in between icon"
      />
    </div>
  );
};

export default HeaderNav;
