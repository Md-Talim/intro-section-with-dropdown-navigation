import heroDesktop from '../images/image-hero-desktop.png';
import heroMobile from '../images/image-hero-mobile.png';
import databiz from '../images/client-databiz.svg';
import audiophile from '../images/client-audiophile.svg';
import meet from '../images/client-meet.svg';
import maker from '../images/client-maker.svg';

function Home() {
  return (
    <main className="flex flex-col-reverse px-4 md:grid md:grid-cols-2 lg:place-items-center md:max-w-7xl md:mx-auto">
      <section className="mx-auto w-11/12 md:mt-20">
        <article className="text-center md:text-left mx-auto">
          <h1 className="font-bold text-3xl md:text-5xl lg:text-6xl xl:text-7xl mt-10 md:max-w-[11ch]">Make remote work</h1>
          <p className="mt-8 md:mt-12 md:max-w-[45ch] text-black text-lg opacity-60">
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </p>
          <button className="mt-8 md:mt-12 px-8 py-4 bg-black hover:bg-white text-white hover:text-black text-lg font-bold rounded-2xl border-2">
            Learn more
          </button>
        </article>
        <div className="flex flex-wrap gap-4 items-center justify-center md:justify-around my-10 md:mt-20 md:mb-0">
          <img src={databiz} alt="databiz" />
          <img src={audiophile} alt="audiophile" />
          <img src={meet} alt="meet" />
          <img src={maker} alt="maker" />
        </div>
      </section>
      <picture id="hero" className="mt-10">
        <source media="(min-width: 48rem)" srcSet={heroDesktop} />
        <img src={heroMobile} alt="hero" className='md:max-w-[468px] h-auto' />
      </picture>
    </main>
  );
}

export default Home;
