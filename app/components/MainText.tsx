export default function MainText(props: any) {
    return (
      <div>
        <h1 className="MainText relative w-[max-content] font-mono flex items-center justify-center font-bold text-center text-4xl text-slate-950
          before:absolute before:inset-0 before:animate-typewriter before:bg-white
          after:absolute after:inset-0 after:w-[0.04em] after:h-[1.5em] after:top-1/2 after:translate-y-[-50%] after:animate-caret after:bg-black"
        >
          {props.Text}
        </h1>
      </div>
    );
}
