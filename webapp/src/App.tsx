export const App = () => {
  const ideas = [
    {
      nick: 'idea-1',
      name: 'Idea 1',
      description: 'description 1',
    },
    {
      nick: 'idea-2',
      name: 'Idea 2',
      description: 'description 2',
    },
    {
      nick: 'idea-3',
      name: 'Idea 3',
      description: 'description 3',
    },
    {
      nick: 'idea-4',
      name: 'Idea 4',
      description: 'description 4',
    },
    {
      nick: 'idea-5',
      name: 'Idea 5',
      description: 'description 5',
    },
  ]

  return (
    <div>
      <h1>Ideas</h1>
      <ul>
        {ideas.map((idea) => (
          <li key={idea.nick}>
            <h2>{idea.name}</h2>
            <p>{idea.description}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
