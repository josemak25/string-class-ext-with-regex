# string_class_ext_with_regex
Extending Javascript String class with custom methods implement with Regex

# String Class

## Description
This is an extension of the String Class in JavaScript. with custom methods that support more string manipulation features.

## Custom Methods
* hasVowels (typeof **Boolean**): Returns true if the string contains vowels. This method is implemented using Regular Expression.

    ```JavaScript
    it('return true if string contains vowel letters', function() {
      var result = 'encyclopedia'.hasVowels();
      expect(result).toBeTruthy;
    });
    it('return false if string dosent contain vowel letters', function() {
      var result = 'rhythm'.hasVowels();
      expect(result).toBeFalsy;
    });
    ```

* toUpper (typeof **String**): Returns the String in question but with all characters in uppercases as applicable. This method can be implemented without the use of the toUpperCase internal methods.

    ```JavaScript
      it('return a string of lowercase to uppercase', function() {
        var result = 'ProgrAmminG is cool'.toUpper();
        expect(result).toBe('PROGRAMMING IS COOL');
      });
    ```

* toLower (typeof **String**): Returns the String in question but with all characters in lowercases as applicable. This method can be implemented without the use of the toLowerCase internal methods.

    ```JavaScript 
     it('return a string of uppercase to lower', function() {
        var result = 'ProgrAmMinG IS CoOl'.toLower();
        expect(result).toBe('programming is cool');
     });
    ```

* ucFirst (typeof **String**): Returns the String in question but changes the First Character to an upperCase.

    ```JavaScript
     it('return a string of the first character from lower case to uppercase', function() {
        var result = 'cool'.ucFirst();
        expect(result).toBe('Cool');
      });
     it('return initial string if the word starts with a digit', function() {
        var result = '1cool'.ucFirst();
       expect(result).toBe('1cool');
     });
    ```

* isQuestion (typeof **Boolean**): Return true if the string is a question (ending with a question mark). This method was implemented using Regular Expression.

    ```JavaScript
    it('return true if sentence is a question', function() {
        var result = 'what are programming languages?'.isQuestion();
        expect(result).toBeTruthy;
     });
    it('return false if sentence is a question', function() {
        var result = 'this is an essential part of building'.isQuestion();
        expect(result).toBeFalsy;
    });
    ```

* splitIntoWords (typeof **Object**, instanceof **Array**): Returns a list of the words in the string, as an Array. This method was implemented using Regular Expression.

    ```JavaScript 
      it('return an array of words in string when function is called on a string', function() {
          var result = 'what are programming languages'.splitIntoWords();
          expect(result).toContainEqual('what', 'are ', 'programming', 'languages');
      });
    ```

* wordCount (typeof **Number**): Returns the number of words in the string. was implemented using the splitIntoWords method above.

    ```JavaScript 
     it('return a number of the words in a string when function is called on a string', function() {
        var result = 'Programmings courses always starts with hello world example'.wordCount();
        expect(result).toBe(8);
     });
    ```

* toCurrency (typeof **String**): Returns a currency representation of the String e.g 11111.11 should be represented as 11,111.11. This method was implemented using Regular Expression.

    ```JavaScript 
     it('return a string of numbers in a currency representative form', function() {
        var result = '11111.11'.toCurrency();
        expect(result).toBe('11,111.11');
     });
    ```

* fromCurrency (typeof **Number**): Returns a number representation of the Currency String e.g 11,111.11 should return 11111.11 This method was implemented using Regular Expression.

    ```JavaScript 
    it('return a string of numbers in a currency representative form', function() {
        var result = '11,111.11'.fromCurrency();
        expect(result).toBe(11111.11);
        expect(typeof result).toBe('number');
    });
    ```
    
    
* inverseCase (typeof **String**): Returns an inverse case of a string in a word. This method was implemented using Regular Expression.

    ```JavaScript 
       it('return an inverse of a string characters from lower case to uppercase and uppercase to lowercase', function() {
          var result = 'Mr. Ben'.inverseCase();
          expect(result).toBe('mR. bEN');
       });
    ```

* alternatingCase (typeof **String**): Returns an alternating case of a string in a word. This method was implemented using Regular Expression.

    ```JavaScript 
       it('return an alternating case of a string characters from lower case to uppercase and uppercase to lowercase', function() {
          var result = 'Onomatopoeia'.alternatingCase();
          var digitResult = '2lang3u32ag1es2'.alternatingCase();
          expect(result).toBe('oNoMaToPoEiA');
          expect(digitResult).toBe('2LaNg3u32Ag1eS2');
       });
    ```

* isDigit (typeof **Boolean**): Returns true if the string in question is single digit. This method was implemented using Regular Expression.

    ```JavaScript 
       it('return true if a string has a single digit number on it', function() {
          expect('3'.isDigit()).toBeTruthy;
          expect('GOT'.isDigit()).toBeFalsy;
          expect('34'.isDigit()).toBeFalsy;
       });
    ```


* numberWords (typeof **String**): Returns the string in question with number in words. This method was implemented using Regular Expression.

    ```JavaScript 
       it('return the word representation of string digit', function() {
          var result = '325'.numberWords();
          expect(result).toMatch('three two five');
       });
    ```


## Motivation
Decagon Institute. 
