'use client'

interface AppCardProps {
  title: string;
  description: string;
  logo: string;
  link: string;
  gradient: string;
}

export default function AppCard({ title, description, logo, link, gradient }: AppCardProps) {
  return (
    <a
      href={link}
      className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition border border-white/10 hover:border-white/20"
    >
      <div className="flex flex-col items-center text-center space-y-6">
        <div className={`w-32 h-32 rounded-3xl bg-gradient-to-br ${gradient} p-1`}>
          <img
            src={logo}
            alt={title}
            className="w-full h-full rounded-3xl object-cover"
          />
        </div>

        <div>
          <h2 className="text-3xl font-bold text-white mb-2">{title}</h2>
          <p className="text-gray-400">{description}</p>
        </div>

        <button className={`bg-gradient-to-r ${gradient} text-white px-8 py-3 rounded-lg font-semibold group-hover:scale-105 transition transform`}>
          Visit Website →
        </button>
      </div>
    </a>
  );
}
