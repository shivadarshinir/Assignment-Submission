import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Arrays;

public class ShuffleArray {
    public static void main(String[] args) {
        Integer[] array = {1, 2, 3, 4, 5, 6, 7};
        List<Integer> list = new ArrayList<>(Arrays.asList(array));
        Collections.shuffle(list);
        Integer[] shuffledArray = list.toArray(new Integer[0]);
        for (int value : shuffledArray) {
            System.out.print(value + " ");
        }
    }
}
