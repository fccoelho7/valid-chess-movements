class ChessKnightService
  def self.run(cell)
    cell_x = get_position_by_letter(cell[0])
    cell_y = cell[1].to_i
    cell_x_moviments = available_moviments(cell_x)
    cell_y_moviments = available_moviments(cell_y)
    moviments = []

    (0..cell_x_moviments.length).each do |i|
      if cell_x_moviments[i]
        (0..cell_y_moviments.length).each do |j|
          if cell_y_moviments[j] && (cell_x - cell_x_moviments[i]).abs + (cell_y - cell_y_moviments[j]).abs == 3
            new_moviment = [cell_x_moviments[i], cell_y_moviments[j]]
            moviments << new_moviment unless moviments.include?(new_moviment)
          end
        end
      end
    end

    moviments
  end

  private_class_method

  def self.available_moviments(cell)
    [cell + 2, cell - 2, cell + 1, cell - 1].select do |cellPosition|
      cellPosition > 0 && cellPosition < 9
    end
  end

  def self.get_position_by_letter(letter)
    positions = ["A", "B", "C", "D", "E", "F", "G", "H"]
    positions.index(letter) + 1
  end
end
