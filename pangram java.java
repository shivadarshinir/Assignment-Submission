import java.util.HashSet;
import java.util.Scanner;
import java.util.Set;

public class PangramChecker {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a sentence: ");
        String input = scanner.nextLine();
        scanner.close();

        if (isPangram(input)) {
            System.out.println("The input is a pangram.");
        } else {
            System.out.println("The input is not a pangram.");
        }
    }

    public static boolean isPangram(String input) {
        // Convert the input to lowercase for case-insensitive comparison
        input = input.toLowerCase();

        Set<Character> alphabetSet = new HashSet<>();
        for (char c = 'a'; c <= 'z'; c++) {
            alphabetSet.add(c);
        }

        for (char c : input.toCharArray()) {
            if (Character.isLetter(c)) {
                alphabetSet.remove(c);
                if (alphabetSet.isEmpty()) {
                    return true; // All letters are present
                }
            }
        }

        return false; // Not all letters are present
    }
}
