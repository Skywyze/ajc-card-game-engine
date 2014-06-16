function Deck() {
	// Deck of cards
	this.cards = [];
	this.count = function() {
		return this.cards.length;
	}
	this.init = function() {
		for (s = 1; s <= 4; s++) {
		// start loop of suits, s
		// console.log("Suit: " + s);
			for (r = 1; r <= 13; r++) {
				// start loop of ranks, r
				// console.log("Rank: " + r);
				this.cards.push(new Card(r, s));
			}
		}
	}
	this.shuffle = function() {
		// Shuffle the cards array
		var currentIndex, cardTemp, cardRand;
		currentIndex = this.cards.length;
		console.log("Shuffling");
		// while cards left unshuffled
		while (currentIndex != 0) {
			// pick a random card
			cardRand = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;
			// swap it with the current card
			cardTemp = this.cards[currentIndex];
			this.cards[currentIndex] = this.cards[cardRand];
			this.cards[cardRand] = cardTemp;
		}
		console.log("Shuffled");
	}
}
// interaction with Deck:
//	- remove card
//	- return card
//  - shuffle
//	- deal card

function Card(rank, suit) {
	// Build cards
	this.rank = rank;
	this.suit = suit;
	this.hidden = true;

	this.setStr = function() {
		switch(this.rank) {
			case 0:
				this.rankStr = "Joker";
				break;
			case 1:
				this.rankStr = "A";
				break;
			case 11:
				this.rankStr = "J";
				break;
			case 12:
				this.rankStr = "Q";
				break;
			case 13:
				this.rankStr = "K";
				break;
			default:
				this.rank.string;
		}
		switch(this.suit) {
			case 1:
				this.suitStr = "spades";
				break;
			case 2:
				this.suitStr = "hearts";
				break;
			case 3:
				this.suitStr = "clubs";
				break;
			case 4:
				this.suitStr = "diamonds";
				break;
			default:
				this.suitStr = null;
		}
		if (this.suitStr == null) {
			return this.rankStr;
		} else {
			return this.rankStr + " of " + this.suitStr;
		}
	}
	this.cardStr = this.setStr();

	this.show = function() {
		this.hidden = false;
		console.log(this.cardStr);
	}
	this.hide = function() {
		this.hidden = true;
		console.log(this.cardStr + " hidden");
	}
}

function Dealer() {
	this.dealCard = function(deck) {
		// deals a single card
		return deck.pop();
	}
	this.dealHands = function() {
		// deals a hand to each player
		// depends on rules parameters: numCards per hand, hidden/not
	}
	this.newDeck = function() {
		// returns a new shuffled deck
		var d = new Deck();
		d.init();
		d.shuffle();
		return d;
	}
}

function Game() {
	;
}

dealer = new Dealer();
deck = dealer.newDeck();
