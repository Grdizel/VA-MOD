//CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK
if ((digit[i] == 2) && (spot[i-1] < spot[i]) && (digit[i+1] == 9) && (spot[i+1] < spot[i])) didgitfontCol = '#ffc0cb' //2с9к Розовый
if ((digit[i-1] == 2) && (spot[i-2] < spot[i-1]) && (digit[i] == 9) && (spot[i-1] > spot[i]) ) didgitfontCol = '#ffc0cb' //2с9к Розовый




//CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC
if ((digit[i] == 2) && (spot[i-1] < spot[i]) && (digit[i+1] == 9) && (spot[i+1] > spot[i])) didgitfontCol = '#ffc0cb' //2с9с Розовый
if ((digit[i-1] == 2) && (spot[i-2] < spot[i-1]) && (digit[i] == 9) && (spot[i-1] < spot[i])) didgitfontCol = '#ffc0cb' //2с9с Розовый




//KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC
if ((digit[i] == 2) && (spot[i-1] > spot[i]) && (digit[i+1] == 9) && (spot[i+1] > spot[i])) didgitfontCol = '#afdafc' //2к9с Синий-синий иней
if ((digit[i-1] == 2) && (spot[i-2] > spot[i-1]) && (digit[i] == 9) && (spot[i-1] < spot[i])) didgitfontCol = '#afdafc' //2к9с Синий-синий иней





//KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK
if ((digit[i] == 5) && (spot[i-1] > spot[i]) && (digit[i+1] == 5) && (spot[i+1] < spot[i])) didgitfontCol = '#afdafc' //5к5к Синий-синий иней
if ((digit[i-1] == 5) && (spot[i-2] > spot[i-1]) && (digit[i] == 5) && (spot[i-1] > spot[i])) didgitfontCol = '#afdafc' //5к5к Синий-синий иней


