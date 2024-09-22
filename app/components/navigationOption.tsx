export default function NavigationOption(props: any) {
    return (
      <div className="m-4">
        <h1 className="relative text-lg text-slate-100 transition-colors duration-400 ease-[cubic-bezier(0.25,0.8,0.25,1)] hover:text-white focus:text-white after:content-[''] after:absolute after:left-1/2 after:bottom-[-2px] after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-400 after:ease-[cubic-bezier(0.25,0.8,0.25,1)] hover:after:w-full hover:after:left-0 focus:after:w-full focus:after:left-0">
          {props.Option}
        </h1>
      </div>
    );
  }
  