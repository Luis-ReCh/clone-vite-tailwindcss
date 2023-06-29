export default function ViteCards(props) {
  const icon = props.icon;
  const title = props.title;
  const content = props.content;

  return (
    <div className="rounded-lg py-10 pl-8 bg-black bgRelleno mb-4">
      <span className="py-2 bg-black w-8 text-xl rounded-lg px-4">{icon}</span>
      <h3 className="text-lg font-bold pt-4 pb-2">{title}</h3>
      <div className="w-80 pr-4">
        <p className="text-gray-400 font-medium">{content}</p>
      </div>
    </div>
  );
}
