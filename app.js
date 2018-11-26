const cards = [
    {
      front: 'The "First Computer Programmer"',
      back: 'Ada Lovelace',
      flipped: false,
    },
    {
      front: 'Invented the "Clarke Calculator"',
      back: 'Edith Clarke',
      flipped: false,
  
    },
    {
      front: 'Famous World War II Enigma code breaker',
      back: 'Alan Turing',
      flipped: false,
    },
    {
      front: 'Created satellite orbit analyzation software for NASA',
      back: 'Dr. Evelyn Boyd Granville',
      flipped: false,
    },
  ]; 

new Vue({
  el: '#flashcard-app',
  data: {
    cards: cards,
    front: '',
    back: '',
    error: false,
  },
  methods: {
    toggleCard: function(card) {
      card.flipped = !card.flipped;
    },
    addCard: function() {
      if (!this.front || !this.back) {
        this.error = true;
      } else  {
        this.cards.push({
          front: this.front,
          back: this.back,
          flipped: false,
        });
        this.error = false;
        this.front = '';
        this.back = '';
      }
    },
    deleteCard: function(index) {
      this.cards.splice(index, 1);
    }
  }
});