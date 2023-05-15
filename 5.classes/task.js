class PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.state = 100;
		this.type = null;
	}

	fix() {
		this.state *= 1.5;
	}

	set state(newState) {
		if (newState < 0) {
			this._state = 0;
		} else if (newState > 100) {
			this._state = 100;
		} else {
			this._state = newState;
		}
	}

	get state() {
		return this._state;
	}
}

class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = "magazine";
	}
}

class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = "book";
		this.author = author;
	}
}

class NovelBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "novel";
	}
}

class FantasticBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "fantastic";
	}
}

class DetectiveBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "detective";
	}
}

class Library {
	constructor(name) {
		this.name = name;
		this.books = [];
	}

	addBook(book) {
		if (book.state > 30) {
			this.books.push(book);
		}
	}

	findBookBy(type, value) {
		for (let book of this.books) {
      if(book[type] === value) {
        return book;
      }
    }
    return null;
	}

	giveBookByName(bookName) {
		for (let book of this.books) {
      if(book.name === bookName) {
        this.books.splice(book, 1);
        return book;
      }
    }
    return null;
	}
}

const library = new Library("Библиотека имени Ленина");

library.addBook(
	new DetectiveBook(
		"Артур Конан Дойл",
		"Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
		2019,
		1008
	)
);
library.addBook(
	new FantasticBook(
		"Аркадий и Борис Стругацкие",
		"Пикник на обочине",
		1972,
		168
	)
);
library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));


class Student {
	constructor(name) {
	  this.name = name;
	  this.marks = {};
	}
  
	addMark(mark, subject) {
	  if (mark < 2 || mark > 5) {
		return 0;
	  }
  
	  if (!this.marks[subject]) {
		this.marks[subject] = [];
	  }
  
	  this.marks[subject].push(mark);
	}
  
	getAverageBySubject(subjectName) {
	  if (!this.marks[subjectName]) {
		return 0;
	  }
  
	  return this.marks[subjectName].reduce((acc, item, index, subject) => {
		acc += item;
  
		if (index === subject.length - 1) {
		  return acc / subject.length;
		}
		return acc;
	  }, 0);
	}
  
	getAverage() {
	  let subjects = Object.keys(this.marks);
	  let subjectsLength = subjects.length;
	  
	  return subjects.reduce((acc, item, index, subject) => {
		let intermediateValue = this.getAverageBySubject(item);
		acc += intermediateValue;
		
		if (index === subjectsLength - 1) {
		  return acc / subjectsLength;
		}
		return acc;
	  }, 0);
	}
  }
  
  const student = new Student("Олег Никифоров");