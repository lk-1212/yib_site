import Image from 'next/image';

const HeaderNav = (): React.ReactElement => {
  return (
    <div
      className={
        'flex items-center justify-center px-4 py-6 shadow-2xl bg-stone-200'
      }
    >
      <Image
        src={'/images/yib_icon.jpg'}
        width={200}
        height={200}
        alt="years in between icon"
      />
    </div>
  );
};

export default HeaderNav;
