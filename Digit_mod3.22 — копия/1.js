			if (((spot[i-1] < spot[i]) && (spot[i+1] < spot[i])) || ((spot[i-2] < spot[i-1]) && (spot[i-1] > spot[i]))) {
				if (((digit[i] == 2) && (digit[i+1] == 9)) || ((digit[i] == 3) && (digit[i+1] == 8)) || +
					((digit[i] == 4) && (digit[i+1] == 7)) || ((digit[i] == 5) && (digit[i+1] == 6)) || +
					((digit[i] == 5) && (digit[i+1] == 0)) || ((digit[i] == 7) && (digit[i+1] == 8)) || +
					((digit[i] == 7) && (digit[i+1] == 4)) || ((digit[i-1] == 2) && (digit[i] == 9)) || +
					((digit[i-1] == 3) && (digit[i] == 8)) || ((digit[i-1] == 4) && (digit[i] == 7)) || +
					((digit[i-1] == 5) && (digit[i] == 6)) || ((digit[i-1] == 5) && (digit[i] == 0)) || +
					((digit[i-1] == 7) && (digit[i] == 8)) || ((digit[i-1] == 7) && (digit[i] == 4))) {
						didgitfontCol = '#ffc0cb'
				}
			} 
			if (((spot[i-1] > spot[i]) && (spot[i+1] > spot[i]))) {
				if (((digit[i] == 2) && (digit[i+1] == 9)) || ((digit[i] == 3) && (digit[i+1] == 8)) || +
					((digit[i] == 4) && (digit[i+1] == 7)) || ((digit[i] == 5) && (digit[i+1] == 6)) || +
					((digit[i] == 5) && (digit[i+1] == 0)) || ((digit[i] == 7) && (digit[i+1] == 8))) {
						didgitfontCol = '#e3f3ff'
				}
			} 
			if ((spot[i-1] > spot[i])  && (spot[i+1] < spot[i]) ) {
				if ((digit[i] == 5) && (digit[i+1] == 5)) {
					didgitfontCol = '#e3f3ff'
				}
			}
			if ((spot[i-2] > spot[i-1]) && (spot[i-1] < spot[i])) {
				if (((digit[i-1] == 2) && (digit[i] == 9)) || ((digit[i-1] == 3) && (digit[i] == 8)) || +
					((digit[i-1] == 4) && (digit[i] == 7)) || ((digit[i-1] == 5) && (digit[i] == 6)) || +
					((digit[i-1] == 5) && (digit[i] == 0)) || ((digit[i-1] == 7) && (digit[i] == 8))) {
						didgitfontCol = '#e3f3ff'
				}
			}
			if ((spot[i-2] > spot[i-1]) && (spot[i-1] > spot[i])) {
				if ((digit[i-1] == 5) && (digit[i] == 5)) {
					didgitfontCol = '#e3f3ff'
				}
			}