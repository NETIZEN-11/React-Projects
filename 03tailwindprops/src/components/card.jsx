export default function Card(props) {
  return (
    <div className="w-[240px] rounded-md overflow-hidden shadow-lg bg-black/40 text-gray-100">
      {/* Image (Small) */}
      <img
        src={props.img}
        alt={props.title}
        className="w-full h-[18px] object-cover"
      />

      {/* Content */}
      <div className="p-4 space-y-2">
        <h2 className="text-lg font-bold">{props.title}</h2>

        <p className="text-xs text-gray-30 leading-relaxed">
          {props.desc}
        </p>

        <button className="mt-2 w-full bg-green-40 text-black py-2 rounded-md font-semibold">
          {props.btnText}
        </button>
      </div>
    </div>
  );
}

