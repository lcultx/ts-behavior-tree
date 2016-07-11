call npm link
call npm link ts-behavior-tree
cd src 
call tsc
cd ..
cd test
call tsc
cd ..
node build-test/btree-test.js