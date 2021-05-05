import React from 'react';

const Joke = () => {
  const jokes = [
    {
      question: 'What’s the best thing about Switzerland?',
      punchline: 'The flag is a big plus.',
    },
    {
      question: 'Why do we tell actors to “break a leg?”',
      punchline: 'Because every play has a cast.',
    },
    {
      question: 'Helvetica and Times New Roman walk into a bar.',
      punchline:
        '“Get out of here!” shouts the bartender. “We don’t serve your type.”',
    },
    {
      question: 'Hear about the new restaurant called Karma?',
      punchline: 'There’s no menu: You get what you deserve.',
    },
    {
      question: 'What is the difference between an enzyme and a hormone?',
      punchline: "You can't hear the enzyme",
    },
    {
      punchline:
        'A bear walks into a bar and says, “Give me a whiskey and … cola.” “Why the big pause?” asks the bartender. The bear shrugged. “I’m not sure; I was born with them.” ',
    },
  ];

  const joke = jokes.map((joke, i) => (
    <React.Fragment key={i}>
      <h4>Joke {i + 1}</h4>
      <p>{joke.question}</p>
      <p>{joke.punchline}</p>
    </React.Fragment>
  ));

  return <section>{joke}</section>;
};

export default Joke;
