module ChessKnightService
  class << self
    def run(cell)
      cell_x = get_position_by_letter(cell[0])
      cell_y = cell[1].to_i
      cell_x_movements = available_movements(cell_x)
      cell_y_movements = available_movements(cell_y)
      movements = []

      (0..cell_x_movements.length).each do |i|
        if cell_x_movements[i]
          (0..cell_y_movements.length).each do |j|
            if cell_y_movements[j] && (cell_x - cell_x_movements[i]).abs + (cell_y - cell_y_movements[j]).abs == 3
              new_movement = [cell_x_movements[i], cell_y_movements[j]]
              movements << new_movement unless movements.include?(new_movement)
            end
          end
        end
      end

      movements
    end

    private

    def available_movements(cell)
      [cell + 2, cell - 2, cell + 1, cell - 1].select do |cell_position|
        cell_position > 0 && cell_position < 9
      end
    end

    def get_position_by_letter(letter)
      positions = ["A", "B", "C", "D", "E", "F", "G", "H"]
      positions.index(letter) + 1
    end
  end
end
