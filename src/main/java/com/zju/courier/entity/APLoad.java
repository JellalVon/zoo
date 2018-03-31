package com.zju.courier.entity;

public class APLoad {
    private int id;
    private int ap_id;
    private int numbers;

    @Override
    public String toString() {
        return "APLoad{" +
                "id=" + id +
                ", ap_id=" + ap_id +
                ", numbers=" + numbers +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        APLoad apLoad = (APLoad) o;

        if (id != apLoad.id) return false;
        if (ap_id != apLoad.ap_id) return false;
        return numbers == apLoad.numbers;
    }

    @Override
    public int hashCode() {
        int result = id;
        result = 31 * result + ap_id;
        result = 31 * result + numbers;
        return result;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getAp_id() {
        return ap_id;
    }

    public void setAp_id(int ap_id) {
        this.ap_id = ap_id;
    }

    public int getNumbers() {
        return numbers;
    }

    public void setNumbers(int numbers) {
        this.numbers = numbers;
    }
}
